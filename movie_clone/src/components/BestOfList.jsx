import React from "react";
import { FetchDataFromApi } from "../api/FetchDataFromApi";
import { useEffect, useState } from "react";
import SimilarCardTemp from "./SimilarCardTemp";
import { Link } from "react-router-dom";

function BestOfList(props) {
  const query = props?.query;
  const [allData, setAllData] = useState(null);
  const midUrl = "discover/movie?";
  const lastUrl = `&with_genres=${query}`;

  useEffect(() => {
    FetchDataFromApi(midUrl, lastUrl)
      .then((res) => {
        setAllData(res?.data?.results);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error in category");
      });
  }, []);

  return (
    <div className="overflow-hidden flex flex-col gap-4 text-white w-full ">
      <Link to={`/category/${props?.name}/${query}`}>
        <span className="text-2xl cursor-pointer font-bold ml-5 hover:text-red-700 transition-all duration-200 ease-in-out">
          {props?.name}
        </span>
      </Link>
      <div className="flex gap-10 justify-start items-center overflow-auto scroll-smooth scrollbar-thin  scrollbar-thumb-[white]/[0.2] scrollbar-track-transparent">
        {allData &&
          allData?.map((item) => (
            <SimilarCardTemp key={item?.id} item={item}></SimilarCardTemp>
          ))}
      </div>
    </div>
  );
}

export default BestOfList;
