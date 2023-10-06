import React from "react";
import noImage from "../assets/no_image.jpeg";
import { Link } from "react-router-dom";

function SimilarCardTemp({ item }) {
  return (
    <Link to={`/page/${item?.id}`}>
      <div className="bg-[black]/[0.5] cursor-pointer group rounded-md p-3 flex flex-col gap-3 items-start justify-start">
        <div className="w-[250px] h-[350px] relative">
          <img
            className="w-full h-full"
            src={
              item?.poster_path
                ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                : noImage
            }
          ></img>

          <div className="absolute bottom-0 group-hover:h-[60px] group-hover:border-b-2 group-hover:border-red-600 transition-all duration-300 ease-in-out left-0 h-[30px] px-5 flex justify-start items-center w-full bg-gradient-to-t from-black to-[transparent]/[0.1]">
            <p className=" text-white font-bold">{`${item?.original_title.substring(
              0,
              15
            )}..`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SimilarCardTemp;
