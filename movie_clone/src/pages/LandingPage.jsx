import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FetchDataFromApi } from "../api/FetchDataFromApi";
import noImage from "../assets/no_image.jpeg";
import { AiFillStar } from "react-icons/ai";
import SimilarData from "../components/SimilarData";
import { BsFillPlayFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../Context";
import Player from "../components/Player";
import { toast } from "react-toastify";

function LandingPage() {
  const location = useLocation();
  const movieId = location.pathname.split("/").at(-1);
  const [allData, setAllData] = useState([]);
  const [isPlay, setIsPlay] = useState(false);
  const midUrl = `movie/${movieId}?`;
  const [showDetails, setShowDetails] = useState("overview");
  const { addToWishList } = useContext(Context);

  useEffect(() => {
    FetchDataFromApi(midUrl)
      .then((res) => {
        setAllData(res?.data);
      })
      .catch((err) => {
        setAllData([]);
        console.log(err);
        console.log("Error in Landing page");
      });
  }, [movieId]);

  return (
    <section className="min-h-screen w-full bg-[black] text-white relative">
      {allData && (
        <>
          {/*  main div */}
          <div className="pt-24 py-5 px-5 flex relative justify-center gap-10 items-start">
            {/* image div left */}
            <div className="w-[50%] relative border-5 my-10 h-[80%] flex justify-center items-center bg-black">
              <img
                className="w-full h-full"
                src={
                  allData?.poster_path
                    ? `https://image.tmdb.org/t/p/original${allData?.poster_path}`
                    : noImage
                }
              ></img>
              <div className=" w-full h-[60px] bg-gradient-to-b from-black to-transparent absolute  z-50 top-0"></div>
              <div className=" w-full h-[60px] absolute z-50 bg-gradient-to-t from-black to-transparent bottom-0"></div>
              <div className=" w-[60px] h-full bg-gradient-to-r from-black to-transparent absolute z-50 left-0"></div>
              <div className=" w-[60px] h-full bg-gradient-to-l from-black to-transparent absolute z-50 right-0"></div>
            </div>

            {/* right part for details */}
            <div className="w-[50%]  h-full flex my-14 px-10 text-white flex-col gap-10 justify-start items-start ">
              {/* name etc */}
              <div className="w-full flex flex-col gap-5 px-5">
                {/* name and rating */}
                <div className=" w-full flex justify-between items-center">
                  <p className="text-5xl font-semibold">{allData?.title}</p>
                  <div className="flex items-center justify-center text-4xl font-semibold gap-2">
                    <p>{`${allData?.vote_average?.toFixed(1)}`}</p>
                    <AiFillStar className=" text-yellow-500"></AiFillStar>
                  </div>
                </div>

                {/* duration and released data */}
                <div className="flex gap-5 text-[white]/[0.4] font-bold">
                  <p className="border-r-2 border-[white]/[0.4] pr-4">{`${allData?.release_date?.substring(
                    0,
                    4
                  )}`}</p>
                  <p className="border-r-2 border-[white]/[0.4] pr-4">
                    {allData?.runtime} Min
                  </p>
                  <p className="">{allData?.original_language}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mx-5">
                <div className="flex items-center gap-10 mt-10">
                  <button
                    onClick={() => {
                      setIsPlay(true);
                    }}
                    className="flex items-center hover:bg-black border-[1px] border-red-500  transition-all duration-300 ease-in-out
                    justify-center gap-2 rounded-full px-5 py-3 bg-red-500 "
                  >
                    <BsFillPlayFill className="font-extrabold text-2xl"></BsFillPlayFill>
                    <span className="text-xl font-bold">Play</span>
                  </button>
                  <button
                    onClick={() => {
                      addToWishList(allData);
                      toast.success("Added Successfully");
                    }}
                    className="flex shadow-md items-center py-3 px-5 rounded-full border-[1px] transition-all duration-300 ease-in-out hover:bg-red-500 border-red-500 justify-center gap-2 bg-black "
                  >
                    <FaPlus className="font-extrabold text-2xl"></FaPlus>

                    <span className="text-xl font-bold">ADD LIST</span>
                  </button>
                </div>
              </div>

              {/* description */}
              <div className="w-full h-[300px] px-5 flex  flex-col gap-8 mt-14 overflow-hidden">
                {/* nav of decription || upper-div */}
                <div className="flex justify-start gap-10 font-bold w-full items-center">
                  <div
                    className="cursor-pointer flex flex-col justify-center items-center gap-3"
                    onClick={() => {
                      setShowDetails("overview");
                    }}
                  >
                    <p>OVERVIEW</p>
                    <div
                      className={
                        `h-1 w-full transition-all duration-200 ease-in ` +
                        (showDetails === "overview" ? " bg-red-500" : "")
                      }
                    ></div>
                  </div>

                  <div
                    className="cursor-pointer flex flex-col justify-center items-center gap-3"
                    onClick={() => {
                      setShowDetails("cast");
                    }}
                  >
                    <p>CAST</p>
                    <div
                      className={
                        `h-1 w-full transition-all duration-200 ease-in ` +
                        (showDetails === "cast" ? " bg-red-500" : "")
                      }
                    ></div>
                  </div>
                </div>

                {/* Details of movie || lower div */}

                <div className="w-full ">
                  {/* OverView Section */}
                  <div
                    className={
                      `` + (showDetails === "overview" ? " block" : " hidden")
                    }
                  >
                    <div className="flex flex-col gap-6">
                      <p>{allData?.overview}</p>

                      <div className=" flex justify-start items-center font-bold text-[white]/[0.6]">
                        {allData?.genres &&
                          allData?.genres?.map((genre) => (
                            <p
                              className="px-5 border-r-2 border-[white]/[0.5]"
                              key={genre?.id}
                            >
                              {genre?.name}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Cast Section */}
                  <div
                    className={
                      `` + (showDetails === "cast" ? " block" : " hidden")
                    }
                  >
                    <div className="flex overflow-auto scrollbar scrollbar-thumb-transparent gap-5 p-x-5 py-2">
                      {allData?.production_companies &&
                        allData?.production_companies?.map((cast) => (
                          <div
                            key={cast?.id}
                            className="flex justify-center w-full h-full flex-col gap-4 items-center"
                          >
                            <div className="h-[100px] w-[100px] overflow-hidden bg-white rounded-full">
                              <img
                                className="w-full h-full bg-contain"
                                src={`https://image.tmdb.org/t/p/original${cast?.logo_path}`}
                              />
                            </div>

                            <p className="font-semibold">{cast?.name}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* related data */}
              <div className="w-full overflow-hidden">
                <p className="text-xl mx-5 font-semibold">Related Movies</p>
                <SimilarData id={allData.id}></SimilarData>
              </div>
            </div>
          </div>

          {/* Player */}
          <div
            className={
              `sticky top-0 left-0 right-0 backdrop-blur-sm bottom-0 z-50 w-full h-screen justify-center items-center ` +
              (isPlay ? " flex" : " hidden")
            }
          >
            <div className="relative">
              <Player id={allData?.id} isPlay={isPlay}></Player>
              <button
                onClick={() => {
                  setIsPlay(false);
                }}
                className=" absolute top-1 right-2 text-lg font-bold text-white hover:text-red-500 transition-all duration-200 ease-in-out"
              >
                X
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default LandingPage;
