'use client';
import * as React from "react";
import { useRouter } from "next/navigation";
import axios, {AxiosResponse} from 'axios';
import {useCart, Product} from "../../utils/CartContext"

const BACKEND_API_URL = "http://localhost:8080"

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

interface APIProduct {
  nombre: string;
  codigo: number;
  subCategoria: number;
  categoria: number;
  precioUnitario: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  onAddToCart,
  product
}) => {
  return (
    <div className="flex flex-col grow pb-8 w-full text-xl font-semibold leading-7 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 max-md:mt-8">
      <img src={product.image} alt={product.name} className="w-full aspect-[1.33]" />
      <div className="flex flex-col self-start mt-7 ml-6 max-md:ml-2.5">
        <div className="text-black">{product.name}</div>
        <div className="mt-2 text-lime-800">$ {product.price}</div>
        <div className="mt-7 text-base leading-6 text-neutral-500">
          {product.category}
        </div>
        <div className="mt-1 text-base leading-6 text-neutral-500">
          {product.subcategory}
        </div>
        <button
          className="mt-4 px-4 py-2 bg-lime-800 text-white rounded"
          onClick={onAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};


const MyComponent: React.FC = () => {
  const { cart, addToCart } = useCart();
  const router = useRouter();
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        //TODO: crear contexto para credenciales y obtener user y password de contexto
        const user = 'natame';
        const password = 'natame';

        const response: AxiosResponse<APIProduct[]> = await axios.get<APIProduct[]>(`${BACKEND_API_URL}/producto/`, {
          headers: {
            user,
            password,
          },
        });

        setProducts(response.data.map((item: APIProduct) => ({
          id: item.codigo,
          name: item.nombre,
          price: item.precioUnitario.toFixed(2),
          category: item.categoria,
          subcategory: item.subCategoria,
          image: '',
          quantity: 0,
        })));
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCartClick = () => {
    router.push('/natame/carrito')
  };

  return (
    <div className="flex flex-col pt-8 pb-20 bg-white">
      <header className="flex gap-5 self-center w-full max-w-[1301px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-3xl font-medium tracking-tight leading-8 text-lime-800">
          NatAmE
        </div>
        <nav className="flex gap-5 justify-between text-base leading-5 text-center">
          <button className="my-auto text-black">Tienda</button>
          <button className="justify-center self-start px-6 py-4 font-semibold text-white bg-lime-800 rounded max-md:px-5"
            onClick={handleCartClick}
          >
            Carrito ({cart.length})
          </button>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b68bb1ba5dba82c30e8f3cc1143215fdd2239e3518ad96b9e9f9cb9e7c5f6c?apiKey=f50096866ace49c1858e31fb063ed080&" 
          alt="" 
          className="shrink-0 aspect-[1.85] w-[92px]" 
          />
        </nav>
      </header>
      <section className="flex gap-5 justify-between items-start px-20 pt-16 pb-8 mt-8 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 text-black max-md:flex-wrap">
          <h1 className="flex-auto text-6xl tracking-tighter leading-[76.8px] max-md:text-4xl">
            Productos
          </h1>
          <div className="flex-auto self-end mt-8 text-xl leading-7">
            <span className="font-medium">Fresh</span>
            <span className="font-light"> — August 21, 2023</span>
          </div>
        </div>
        <div className="flex gap-3 mt-3.5 text-base font-semibold leading-5 text-center whitespace-nowrap">
          <button className="justify-center px-4 py-3.5 text-white bg-lime-800 rounded-3xl">
            Default
          </button>
          <button className="justify-center px-4 py-3.5 text-black bg-white rounded-3xl border border-solid border-stone-300">
            A-Z
          </button>
        </div>
      </section>
      <main className="mt-10 ml-24 max-w-full w-[822px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full ${
                index === 1 ? "ml-5" : ""
              }`}
            >
              <ProductCard product={product} onAddToCart={() => {addToCart(product)}} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyComponent;