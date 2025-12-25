import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Pages/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex mt-5 justify-between gap-4 shadow-lg">
      {/* Cart Items */}
      <div className="w-[75vw] p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">Shopping Cart</h1>
          <h2 className="text-gray-500 mt-8 mx-1">Price</h2>
        </div>

        <hr className="text-gray-300 my-3" />

        {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty </p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}

        <div className="flex justify-end">
          <h1>
            Subtotal ({totalQuantity} Items):
            <span className="font-semibold mx-1">${totalPrice.toFixed(2)}</span>
          </h1>
        </div>
      </div>

      {/* Cart Summary */}
      <section className="shadow-lg w-[20vw] p-4 flex flex-col gap-3">
        <h1>
          Subtotal ({totalQuantity} Items):
          <span className="font-semibold mx-1">${totalPrice.toFixed(2)}</span>
        </h1>

        <Link to="/checkout"><button  className="rounded-2xl w-full text-white bg-cyan-500 hover:bg-cyan-600 shadow-sm cursor-pointer py-1 mb-5">
          CheckOut
        </button></Link>
        <Link to="/">
          <button className="rounded-2xl text-white bg-cyan-500 hover:bg-cyan-600 shadow-sm cursor-pointer w-full py-1 mb-5">
          Go to Deshboard
        </button>
        </Link>

        <label className="text-sm border p-2 flex justify-between rounded">
          EMI Available:
          <select className="bg-transparent outline-none">
            <option></option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
          </select>
        </label>
      </section>
    </div>
  );
}

export default Cart;
