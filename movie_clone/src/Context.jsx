import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [recomendation, setRecomendation] = useState("615656");
  // "Meg 2: The Trench"
  const [isLogin, setIsLogin] = useState(false);

  function addToWishList(data) {
    let flag = false;

    wishList.forEach((item) => {
      if (item?.id === data?.id) {
        flag = true;
      }
    });

    if (!flag) {
      const alldata = [...wishList, data];
      setWishList(alldata);
    }
  }

  return (
    <Context.Provider
      value={{
        wishList,
        setWishList,
        addToWishList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
