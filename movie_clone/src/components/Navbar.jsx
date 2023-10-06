import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigate = useNavigate();

  function searchHandler(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  return (
    <div
      className={` z-50 flex text-lg px-5 sm:px-20 items-center h-[80px] w-full absolute  py-5 shadow-[transparent]/[0.2] text-white shadow-lg justify-between `}
    >
      <div className="flex justify-center items-center gap-14">
        {/* Logo of website */}
        <Link to={"/"}>
          <div
            className={
              `cursor-pointer justify-center text-3xl font-bold items-center ` +
              (showSearchBar ? " hidden sm:flex " : "flex")
            }
          >
            旅行
          </div>
        </Link>

        {/* Other Features */}
        <div
          className={
            `gap-8 font-semibolds ` +
            (showSearchBar ? " hidden" : " hidden md:flex ")
          }
        >
          <Link to={"/"}>
            <p className="cursor-pointer hover:font-bold transition-all duration-150 ease-in">
              Home
            </p>
          </Link>

          <div className="relative group ">
            <p
              className={`cursor-pointer hover:font-bold transition-all duration-150 ease-in `}
            >
              Categories
            </p>
            <Category className="group-hover:flex hidden transition-all duration-150 ease-in"></Category>
          </div>

          <Link to={"/wishlist"}>
            <p className="cursor-pointer hover:font-bold transition-all duration-150 ease-in">
              WishList
            </p>
          </Link>
          <Link to={"/contact"}>
            <p className="cursor-pointer hover:font-bold transition-all duration-150 ease-in">
              About Us
            </p>
          </Link>
          <Link to={"/login"}>
            <p className="cursor-pointer hover:font-bold transition-all duration-150 ease-in">
              Login
            </p>
          </Link>
        </div>
      </div>

      {/* Input */}
      <div
        className={` backdrop-blur-xl px-5 gap-3 border-[1px] border-[white]/[0.3]  justify-center items-center shadow-[transparent]/[0.5] rounded-full shadow-md flex `}
      >
        <BsSearch
          className="cursor-pointer"
          onClick={() => {
            if (search !== "") {
              navigate(`/search/${search}`);
            }
          }}
        ></BsSearch>
        <input
          type="text"
          onChange={searchHandler}
          placeholder="Search"
          className="font-semibold text-sm py-2 w-[150px] sm:w-[300px] xl:w-[500px] bg-transparent outline-none "
        />
      </div>

      {/* Hampburger Menu */}
      <div
        className={
          `justify-center rounded-full p-2 items-center cursor-pointer  ` +
          (showSearchBar ? "hidden " : " md:hidden flex")
        }
      >
        <GiHamburgerMenu className="text-xl"></GiHamburgerMenu>
      </div>
    </div>
  );
}

export default Navbar;
