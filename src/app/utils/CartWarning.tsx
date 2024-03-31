'use client';
import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const CartMessage: React.FC = () => {
  const {cart} = useCart();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cart.length == 0) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {           
      event.preventDefault();
      if (cart.length != 0) {
        setShowModal(true); 
      }
      return (event.returnValue = '');
  };

    window.addEventListener('beforeunload', handleBeforeUnload, {capture: true});

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload, {capture: true});
    }
  }, [cart]);

  const handleAccept = () => {
    setShowModal(false);
    window.close();
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <p className="text-lg text-center mb-4 text-black">
              Tienes artículos en tu carrito. Seguro que quieres salir?
            </p>
            <div className="flex justify-center">
              <button
                className="bg-lime-800 text-white px-4 py-2 rounded mr-4"
                onClick={handleAccept}
              >
                Aceptar
              </button>
              <button
                className="bg-lime-800 text-white px-4 py-2 rounded"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartMessage;