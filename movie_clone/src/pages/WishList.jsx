import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import CardTemplete from "../components/CardTemplete";

function WishList() {
  const { wishList } = useContext(Context);

  return (
    <section className="py-10 min-h-screen bg-[black]/[0.87]  relative">
      <p className="left-20 absolute text-white top-32 text-5xl font-bold">
        WISHLIST
      </p>

      <div className="pt-52 justify-center w-full items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid px-10 gap-10 mx-auto  ">
        {wishList &&
          wishList?.map((item) => (
            <CardTemplete key={item.id} item={item}></CardTemplete>
          ))}
      </div>
    </section>
  );
}

export default WishList;
