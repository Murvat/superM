import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Products from "./containers/Product.jsx";
import ProductDetails from "./containers/ProductDetails.jsx";
import ProductDetailInfo from "./components/ProductDetailInfo.js";
import ProductDetailNutrition from "./components/ProductDetailNutrition.js";
import ProductDetailStorage from "./components/ProductDetailStorage.js";
import Cart from "./containers/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

export default function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="" element={<ProductDetailInfo />}></Route>
              <Route
                path="nutrition"
                element={<ProductDetailNutrition />}
              ></Route>
              <Route path="storage" element={<ProductDetailStorage />}></Route>
            </Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
