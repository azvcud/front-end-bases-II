'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';
import {useCart, Product} from "../../utils/CartContext"


interface CartItemProps {
  product: Product;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex mb-4 gap-5 justify-between pr-6 w-full rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between text-xl font-semibold leading-7">
        <img
          src={product.image}
          alt={product.name}
          className="shrink-0 rounded-xl w-40 max-w-full aspect-[1.01]"
        />
        <div className="flex flex-col my-auto">
          <div className="text-black">{product.name}</div>
          <div className="mt-3.5 mb-3 text-lime-800">$ {product.price}</div>

          {/* Botones aumentar, disminuir cantidad */}
          <div className="flex items-center gap-4">
            <button
              onClick={onDecrease}
                className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18" height="19" viewBox="0 0 18 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
            <input type="text" id="number"
                className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                value={product.quantity} onChange={()=>{}}/>
            <button
              onClick={onIncrease}
                className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18" height="19" viewBox="0 0 18 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
          </div>

        </div>
      </div>
      <div className="flex flex-col my-auto whitespace-nowrap">
        <div className="self-end text-xl font-semibold leading-7 text-right text-black">
          $ {product.price * product.quantity}
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


const MyComponent: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const router = useRouter();

  const handleRemoveItem = (productToRemove: Product) => {
    removeFromCart(productToRemove.id)
  };

  const handleShopClick = () => {
    router.push('/natame/tienda')
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
          NatAmE
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
            Carrito ({cart.length})
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
              {cart.length} items
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 w-full max-w-[1248px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              {cart.map((product) => (
                <CartItem
                  key={product.name}
                  product={product}
                  onRemove={() => handleRemoveItem(product)}
                  onIncrease={() => increaseQuantity(product.id)}
                  onDecrease={() => decreaseQuantity(product.id)}
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