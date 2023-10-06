import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchDataFromApi } from "../api/FetchDataFromApi";
import CardTemplete from "../components/CardTemplete";

function CategoryPage() {
  const location = useLocation();
  const catId = location.pathname.split("/").at(-1);
  const catName = location.pathname.split("/").at(-2);
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  const midUrl = "discover/movie?";
  const lastUrl = `&with_genres=${catId}&page=${page}`;

  useEffect(() => {
    FetchDataFromApi(midUrl, lastUrl)
      .then((res) => {
        setAllData(res?.data?.results);
      })
      .catch((err) => {
        setAllData([]);
        console.log(err);
        console.log("Error in categoryPage");
      });
  }, [catId]);

  return (
    <section className="py-10 min-h-screen bg-[black]/[0.87]  relative">
      <p className="left-20 absolute text-white top-32 text-5xl font-bold">{`${catName.toUpperCase()}`}</p>

      <div className="pt-52 justify-center w-full items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid px-10 gap-10 mx-auto  ">
        {allData &&
          allData.map((item) => (
            <CardTemplete key={item.id} item={item}></CardTemplete>
          ))}
      </div>
    </section>
  );
}

export default CategoryPage;
