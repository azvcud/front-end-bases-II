'use client';
import * as React from "react";

interface Product {
  name: string;
  price: string;
  pricePerUnit: string;
  image: string;
  quantityImage: string;
}

interface CartItemProps {
  product: Product;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => {
  return (
    <div className="flex gap-5 justify-between pr-6 w-full rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between text-xl font-semibold leading-7">
        <img
          src={product.image}
          alt={product.name}
          className="shrink-0 w-40 max-w-full aspect-[1.01]"
        />
        <div className="flex flex-col my-auto">
          <div className="text-black">{product.name}</div>
          <div className="mt-3.5 text-lime-800">{product.pricePerUnit}</div>
          <img
            src={product.quantityImage}
            alt=""
            className="mt-5 w-32 max-w-full rounded-3xl border-2 border-solid aspect-[3.23] border-black border-opacity-10"
          />
        </div>
      </div>
      <div className="flex flex-col my-auto whitespace-nowrap">
        <div className="self-end text-xl font-semibold leading-7 text-right text-black">
          {product.price}
        </div>
        <button
          type="button"
          className="justify-center px-6 py-3.5 mt-11 text-base font-medium leading-6 text-white bg-red-600 rounded-lg shadow-sm max-md:px-5 max-md:mt-10"
          onClick={onRemove}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

const products: Product[] = [
  {
    name: "Heirloom tomato",
    price: "$5.99",
    pricePerUnit: "$5.99 / lb",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6de0f245530c9da35e1266add0d6bba333dc843eb18860f2a762de82545d28ac?apiKey=f50096866ace49c1858e31fb063ed080&",
    quantityImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c946acc72f00bda4323801e19999fec0af463f691f2104adb4f84c99fb6d44a?apiKey=f50096866ace49c1858e31fb063ed080&",
  },
  {
    name: "Organic ginger",
    price: "$6.50",
    pricePerUnit: "$12.99 / lb",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6505f578d9d4e6e95e17ca74fb94c315e0d8a4725b2191e3ee92f2ce5a078254?apiKey=f50096866ace49c1858e31fb063ed080&",
    quantityImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c704cd9bfec1df537297de8d433ca51ff0ec6da59b66559452f9f745f6d8d6?apiKey=f50096866ace49c1858e31fb063ed080&",
  },
  {
    name: "Sweet onion",
    price: "$14.95",
    pricePerUnit: "$2.99 / lb",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d987c74946a20120e1c0cc7a63808c259db6aa7e567d5978a3f81deea7b145c?apiKey=f50096866ace49c1858e31fb063ed080&",
    quantityImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a895c39d18bf62983f771e3ca2c84d96fcd04a87e2d6c034d0a647c606f4ede?apiKey=f50096866ace49c1858e31fb063ed080&",
  },
];

const MyComponent: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<Product[]>(products);

  const handleRemoveItem = (productToRemove: Product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== productToRemove.name)
    );
  };

  const handleShopClick = () => {
    // Logic to navigate to the shop
  };

  const handlePaymentClick = () => {
    // Logic to proceed with payment
  };

  const handleChangeSalesRepClick = () => {
    // Logic to change the sales representative
  };

  return (
    <div className="flex flex-col items-center pt-8 pb-20 bg-white">
      <header className="flex gap-5 w-full max-w-[1301px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-3xl font-medium tracking-tight leading-8 text-lime-800">
          NatamE
        </div>
        <div className="flex gap-5 justify-between text-base leading-5 text-center">
          <button
            type="button"
            className="my-auto text-black"
            onClick={handleShopClick}
          >
            Tienda
          </button>
          <div className="justify-center self-start px-6 py-4 font-semibold text-white bg-lime-800 rounded max-md:px-5">
            Carrito ({cartItems.length})
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b68bb1ba5dba82c30e8f3cc1143215fdd2239e3518ad96b9e9f9cb9e7c5f6c?apiKey=f50096866ace49c1858e31fb063ed080&"
            alt=""
            className="shrink-0 aspect-[1.85] w-[92px]"
          />
        </div>
      </header>
      <section className="self-stretch px-20 pt-16 pb-10 mt-8 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
            <h1 className="text-6xl tracking-tighter text-black leading-[76.8px] max-md:mt-10 max-md:text-4xl">
              Carrito
            </h1>
          </div>
          <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            <div className="mt-7 text-xl font-light leading-7 text-black max-md:mt-10 max-md:max-w-full">
              {cartItems.length} items
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 w-full max-w-[1248px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              {cartItems.map((product) => (
                <CartItem
                  key={product.name}
                  product={product}
                  onRemove={() => handleRemoveItem(product)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 py-7 mx-auto w-full text-base leading-5 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 max-md:px-5 max-md:mt-8">
              <div className="flex gap-5 justify-between text-black">
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">Orden de pago</div>
                  <div className="mt-10">Subtotal</div>
                  <div className="mt-6">Shipping</div>
                  <div className="mt-6">Tax</div>
                  <div className="mt-6 font-semibold">Total</div>
                </div>
                <div className="flex flex-col self-end mt-14 text-right whitespace-nowrap max-md:mt-10">
                  <div>$27.44</div>
                  <div className="flex flex-col items-start pl-3.5 mt-6">
                    <div>$3.99</div>
                    <div className="mt-6">$2.00</div>
                  </div>
                  <div className="mt-5 font-semibold">$33.43</div>
                </div>
              </div>
              <button
                type="button"
                className="flex gap-5 justify-end px-5 py-2 mt-9 font-semibold text-white bg-lime-800 rounded-lg"
                onClick={handlePaymentClick}
              >
                <span className="flex-auto my-auto">Continuar con pago</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/436b738744905f60c6a542e2cd314f5694db20045d36b8991f8dab9a31b316a0?apiKey=f50096866ace49c1858e31fb063ed080&"
                  alt=""
                  className="shrink-0 w-8 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1248px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full"></div>
          <aside className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-6 py-7 mx-auto w-full text-base font-semibold leading-5 text-black rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 max-md:px-5 max-md:mt-8">
              <div className="text-xl">Representante de ventas</div>
              <div className="flex gap-5 justify-between mt-7 font-medium leading-[150%]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6386d6d4cb7c5d44a159313b0d594fc1c8a678322722f9a5b6384ed74d37d9a0?apiKey=f50096866ace49c1858e31fb063ed080&"
                  alt="Tomate Virgilio"
                  className="shrink-0 w-16 aspect-square"
                />
                <div className="justify-center my-auto text-ellipsis">
                  Tomate Virgilio
                </div>
              </div>
              <button
                type="button"
                className="flex gap-5 justify-end px-5 py-2 mt-6 text-white whitespace-nowrap bg-lime-800 rounded-lg"
                onClick={handleChangeSalesRepClick}
              >
                <span className="my-auto">Cambiar</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/436b738744905f60c6a542e2cd314f5694db20045d36b8991f8dab9a31b316a0?apiKey=f50096866ace49c1858e31fb063ed080&"
                  alt=""
                  className="shrink-0 w-8 aspect-square"
                />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;