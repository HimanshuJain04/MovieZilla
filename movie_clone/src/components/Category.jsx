import React, { useState } from "react";
import { FetchDataFromApi } from "../api/FetchDataFromApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Category(props) {
  const url = "genre/movie/list?";
  const css = props?.className;
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    FetchDataFromApi(url)
      .then((res) => {
        setAllData(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error in category");
      });
  }, []);

  return (
    <span
      className={
        `px-10 py-5 bg-transparent backdrop-blur-lg rounded-lg right-0 absolute flex-col flex-wrap gap-5 transition-all h-[500px] w-[300px] duration-300 ease-in-out items-start shadow-md shadow-black justify-start ` +
        css
      }
    >
      {allData &&
        allData.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              navigate(`/category/${item.name}/${item.id}`);
            }}
            className=" hover:underline cursor-pointer transition-all hover:font-semibold duration-100 ease-in-out"
          >
            {item?.name}
          </span>
        ))}
    </span>
  );
}

export default Category;
