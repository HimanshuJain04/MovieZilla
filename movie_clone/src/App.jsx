import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import WishList from "./pages/WishList";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/wishlist" element={<WishList></WishList>} />
        <Route
          path="/category/:catName/:catId"
          element={<CategoryPage></CategoryPage>}
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/contact" element={<AboutUs></AboutUs>} />
        <Route path="/search/:query" element={<SearchPage></SearchPage>} />
        <Route path="/page/:id" element={<LandingPage></LandingPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
