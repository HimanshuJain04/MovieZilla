import React, { useEffect } from "react";
import { FetchDataFromApi } from "../api/FetchDataFromApi";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function Header() {
  const popular = "movie/now_playing?";
  let result = [];
  const [sliderIndex, setSliderIndex] = useState(0);
  const [data, setData] = useState([]);
  const { addToWishList } = useContext(Context);

  useEffect(() => {
    FetchDataFromApi(popular)
      .then((res) => {
        result = res?.data?.results;

        // Append six element in array
        setData(result.splice(6, 6));
      })
      .catch((err) => {
        console.log(err);
        console.log("Error in Header");
      });
  }, []);

  setTimeout(() => {
    if (sliderIndex > 4) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  }, 5000);

  return (
    <>
      {/* Slider Section */}
      <section className="w-full h-screen bg-black relative">
        {/* Sliding Image Div */}
        <div className={`overflow-hidden h-full w-full relative`}>
          {data &&
            data?.map((item, index) => (
              <div
                key={index}
                className={
                  `h-full text-white transition-all duration-1000 ease-in-out ` +
                  (sliderIndex === index ? " block" : " hidden")
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  className="w-full h-full"
                />

                <div className="absolute flex flex-col gap-5 z-20 font-semibold h-[500px] w-[500px] left-[5%] top-[25%]">
                  <p>
                    Popularity : <span>{item.popularity}</span>
                  </p>
                  <p className="flex gap-1  items-center">
                    {" "}
                    IMDB :
                    <span className="font-bold text-lg">
                      {item.vote_average}
                    </span>
                    <AiFillStar className="text-yellow-500 text-xl"></AiFillStar>
                  </p>
                  <p className="text-5xl font-bold">{item.title}</p>
                  <p>{`${item.overview.substring(0, 120)}....`}</p>

                  <div className="flex items-center gap-10 mt-10">
                    <Link
                      to={`/page/${item?.id}`}
                      className="flex items-center hover:bg-black border-[1px] border-red-500  transition-all duration-300 ease-in-out
                    justify-center gap-2 rounded-full px-5 py-3 bg-red-500 "
                    >
                      <BsFillPlayFill className="font-extrabold text-2xl"></BsFillPlayFill>
                      <span className="text-xl font-bold">WATCH</span>
                    </Link>

                    <button
                      onClick={() => {
                        addToWishList(item);
                      }}
                      className="flex shadow-md items-center py-3 px-5 rounded-full border-[1px] transition-all duration-300 ease-in-out hover:bg-red-500 border-red-500 justify-center gap-2 bg-black "
                    >
                      <FaPlus className="font-extrabold text-2xl"></FaPlus>

                      <span className="text-xl font-bold">ADD LIST</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Gradient */}
        <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute left-0 right-0 top-0 bottom-0 z-10"></div>

        {/* Sliding dots */}
        <div className="flex justify-center  items-center bottom-3 left-[50%] translate-x-[-50%]  p-5 z-10 absolute gap-3">
          {data &&
            data?.map((item, index) => (
              <div
                onClick={() => {
                  setSliderIndex(index);
                }}
                key={index}
                className={
                  `h-[4px] rounded-full cursor-pointer m-2 w-10 transition-all duration-300 ease-in-out  ` +
                  (sliderIndex === index ? " bg-white" : " bg-[white]/[0.3]")
                }
              ></div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Header;
