
// export default Cart;/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import Navbar from "@/components/navbar";

const Cart = () => {
  return (
    <>
      
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 text-custom-purple">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left font-semibold">
          Your Shopping Cart
        </h1>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Product List */}
          <div className="border-2 p-4">
            <h1 className="text-lg font-semibold">Products</h1>

            {/* Product 1 */}
            <div className="flex items-start justify-between mt-8">
              <div className="flex">
                <Image
                  src="/images/IMG-20241208-WA0087.jpg"
                  alt="Graystone Vase"
                  height={100}
                  width={100}
                  className="rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">Graystone Vase</h1>
                  <p className="text-sm mt-2">A timeless ceramic vase with a tri-color grey glaze.</p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-semibold hidden lg:block">Quantity</h1>
                <p className="mt-2 text-lg font-medium">1</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex items-start justify-between mt-8">
              <div className="flex">
                <Image
                  src="/images/IMG-20241208-WA0082.jpg"
                  alt="Basic White Vase"
                  height={100}
                  width={100}
                  className="rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">Basic White Vase</h1>
                  <p className="text-sm mt-2">Beautiful and simple, this is one for the classics.</p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-semibold hidden lg:block">Quantity</h1>
                <p className="mt-2 text-lg font-medium">1</p>
              </div>
            </div>
          </div>

          {/* Total Section */}
          <div className="border-2 p-4 hidden lg:block">
            <h1 className="text-lg font-semibold">Total</h1>
            <div className="mt-10">
              <p className="text-lg font-medium">Graystone Vase: £85</p>
              <p className="text-lg font-medium mt-4">Basic White Vase: £85</p>
            </div>
            <p className="mt-10 text-xl font-semibold">Total: £170</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
          <h1 className="inline text-xl sm:text-2xl font-semibold">£170</h1>
          <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
          <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white transition-transform duration-300 hover:scale-105">
            Go to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
