import React from "react";

function CartItem({ item }) {

  const { id, price ,title, images, description, quantity } = item;

  return (
    <>
      <section className="flex gap-4">
        {/* Image */}
        <img
          className="h-32 w-32 object-cover"
          src={images?.[0]}
          alt={title}
        />

        {/* Info */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl">{title}</h1>
          <p className="text-gray-600">
            {description?.substring(0, 60)}
          </p>

          {/* Quantity buttons */}
          <div className="flex items-center rounded text-white bg-cyan-500 w-fit px-2 gap-3">
            <button>-</button>
            <h2>{quantity}</h2>
            <button>+</button>
          </div>

          {/* Delete */}
          <button
            className="cursor-pointer mt-2 text-gray-400 w-fit"
          >
            Delete
          </button>
        </div>

        {/* Price */}
        <div className="ml-auto font-semibold mx-1">
          $ {Price}
        </div>
      </section>

      <hr className="text-gray-300 my-3" />
    </>
  );
}

export default CartItem;
