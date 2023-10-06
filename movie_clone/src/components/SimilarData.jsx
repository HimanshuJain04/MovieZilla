import React from "react";
import { useEffect, useState } from "react";
import { FetchDataFromApi } from "../api/FetchDataFromApi";
import SimilarCardTemp from "./SimilarCardTemp";

function SimilarData({ id }) {
  const midUrl = `movie/${id}/similar?`;
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    FetchDataFromApi(midUrl)
      .then((res) => {
        setAllData(res?.data?.results.splice(10, 10));
      })
      .catch((err) => {
        setAllData([]);
        console.log(err);
        console.log("Error in Similar Data");
      });
  }, [id]);

  return (
    <div className="w-full scrollbar overflow-hidden scrollbar-track-black ">
      {allData &&
        (allData.length !== 0 ? (
          <div className="flex gap-5 overflow-auto scrollbar scrollbar-thumb-transparent scrollbar-track-transparent">
            {allData?.map((item) => (
              <SimilarCardTemp key={item?.id} item={item}></SimilarCardTemp>
            ))}
          </div>
        ) : (
          <div>No data</div>
        ))}
    </div>
  );
}

export default SimilarData;
