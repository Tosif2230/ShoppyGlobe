import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const placeOrder = (e) => {
    e.preventDefault();

    alert("Order placed"); //

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  if (cartItems.length === 0) {
    return <p className="text-center mt-10">Your cart is empty</p>;
  }

  return (
    <div className="w-3/4 mx-auto p-6 shadow-lg mt-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout Details</h1>

      {/* User Form */}
      <form onSubmit={placeOrder} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
          className="border p-2 rounded"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          className="border p-2 rounded"
          value={user.email}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          required
          className="border p-2 rounded"
          value={user.address}
          onChange={handleChange}
        />
        <hr className="text-gray-500 my-3" />
        <div>
          <h2 className="font-semibold mb-2">Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span className="flex gap-5 items-center">
                <img className="h-20 w-20 mb-2" src={item.images[0]} alt="" />
                {item.title} × {item.quantity}
              </span>
              <span className="font-semibold mx-2">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <p className="font-semibold flex justify-end mx-2">
            Subtotal : ${totalPrice.toFixed(2)}
          </p>
        </div>

        <button
          type="submit"
          className="mt-4 bg-cyan-500 text-white rounded-4xl py-2 hover:bg-cyan-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
