import React from "react";
import BestOfList from "./BestOfList";

function HomeSection() {
  return (
    <div className="w-full min-h-screen bg-black flex justify-start py-20  px-10 items-center gap-20 flex-col">
      {/* Action */}
      <BestOfList query={"28"} name={"Recomended"}></BestOfList>
      {/* Action */}
      <BestOfList query={"28"} name={"Top Rated || Trending"}></BestOfList>
      {/* Action */}
      <BestOfList query={"28"} name={"Action"}></BestOfList>
      {/* Comedy */}
      <BestOfList query={"35"} name={"Comedy"}></BestOfList>
      {/* Horror */}
      <BestOfList query={"27"} name={"Horror"}></BestOfList>
      {/* Thriller */}
      <BestOfList query={"53"} name={"Thriller"}></BestOfList>
    </div>
  );
}

export default HomeSection;
