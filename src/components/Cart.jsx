import React, { useState } from "react";

function Cart() {
  const [count, setCount] = useState(1);
  const price = 8.99; // demo price
  const totalPrice = count * price;

  return (
    <div className="flex mt-5 justify-between gap-4 shadow-lg">
      {/* Cart Items */}
      <div className=" w-[75vw] p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">Shopping Cart</h1>
          <h2 className="text-gray-500 mt-8 mx-1">Price</h2>
        </div>

        <hr className="text-gray-300 my-3" />

        <section className="flex gap-4">
          <img
            className="h-32 w-32  object-cover"
            src="https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
            alt="Product"
          />

          <div className="flex flex-col gap-1">
            <h1 className="text-xl">Cat Food</h1>
            <p className="text-gray-600">High quality pet food</p>

            <div className="flex items-center  rounded text-white bg-cyan-500 w-fit px-2 gap-3 border">
              <button onClick={() => setCount(Math.max(0, count - 1))}>
                -
              </button>
              <h2>{count}</h2>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>

            <button className="cursor-pointer mt-2 text-gray-400 w-[10vh]" onClick={() => setCount(0)}>
              Delete
            </button>
          </div>

          <div className="ml-auto font-semibold mx-1">$ {price}</div>
        </section>
        <hr className="text-gray-300 my-3" />
        <div className=" flex justify-end">
          <h1 className="">
          Subtotal ({count} Item):
          <span className="font-semibold mx-1">${totalPrice}</span>
        </h1>
        </div>
      </div>

      {/* Cart Summary */}
      <section className="shadow-lg w-[20vw] p-4 flex flex-col gap-3">
        <h1 className="">
          Subtotal ({count} Item):
          <span className="font-semibold mx-1">${totalPrice}</span>
        </h1>

        <button className="rounded-2xl text-white bg-cyan-500 hover:bg-cyan-600 shadow-sm cursor-pointer py-1 mb-5">
          CheckOut
        </button>
        

        <label
          className="text-sm border p-2 flex justify-between rounded"
        >
          EMI Available:
          <select name="EMI" id="EMI" className="outline-none focus:outline-none focus:ring-0 bg-transparent">
            <option value=""></option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
            <option value="18">18 Months</option>
          </select>
        </label>
      </section>
    </div>
  );
}

export default Cart;
