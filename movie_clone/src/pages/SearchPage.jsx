import React from "react";
import { useState, useEffect } from "react";
import CardTemplete from "../components/CardTemplete";
import { useLocation } from "react-router-dom";
import { FetchDataFromApi } from "../api/FetchDataFromApi";

function SearchPage() {
  const location = useLocation();
  const query = location.pathname.split("/").at(-1);
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  const midUrl = `search/movie?query=${query}&`;

  useEffect(() => {
    FetchDataFromApi(midUrl)
      .then((res) => {
        console.log(res.data.results);
        setAllData(res?.data?.results);
      })
      .catch((err) => {
        setAllData([]);
        console.log(err);
        console.log("Error in search Page");
      });
  }, [query]);

  return (
    <section className="py-10 min-h-screen bg-[black]/[0.87]  relative">
      <p className="left-20 absolute text-white top-32 text-5xl font-bold">{`${query?.toUpperCase()}`}</p>

      <div className="pt-52 justify-center w-full items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid px-10 gap-10 mx-auto  ">
        {allData &&
          allData.map((item) => (
            <CardTemplete key={item.id} item={item}></CardTemplete>
          ))}
      </div>
    </section>
  );
}

export default SearchPage;
