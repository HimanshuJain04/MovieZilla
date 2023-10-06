import React from "react";
import noImage from "../assets/no_image.jpeg";
import { Link } from "react-router-dom";

function CardTemplete(props) {
  const item = props?.item;

  return (
    // card
    <Link to={`/page/${item?.id}`}>
      <div className="h-[450px] w-[300px] cursor-pointer text-white flex gap-1 relative flex-col justify-start items-center ">
        <div className="w-[90%] h-[80%] flex justify-center items-center ">
          <img
            src={
              item?.poster_path
                ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                : noImage
            }
            className="shadow-lg shadow-black w-[90%] h-full hover:h-[110%] transition-all duration-500 ease-in-out hover:w-[120%]"
            loading="lazy"
          ></img>
        </div>

        <div className="absolute top-[60%] right-0 w-[50px] p-2 h-[50px] flex justify-center items-center bg-orange-400 rounded-full text-lg font-bold">
          {item?.vote_average}
        </div>

        <div className="flex flex-col items-start w-full p-5">
          <p className="font-bold">{item?.title}</p>
          <p className="font-semibold text-sm text-[white]/[0.8]">{`${item?.overview.substring(
            0,
            30
          )}...`}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardTemplete;
