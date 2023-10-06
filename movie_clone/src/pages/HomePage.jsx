import React from "react";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-bg-[black]/[0.87]">
      <Header></Header>
      <HomeSection></HomeSection>
    </div>
  );
}

export default HomePage;
