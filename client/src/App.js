import { BrowserRouter, Routes, Route } from "react-router-dom";
import appStyle from "./AppStyle.module.css";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import RecipeList from "./components/lists/RecipeList";
import RecipeDetails from "./pages/RecipeDetails";
import Product from "./pages/Product";
import Member from "./pages/Member";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";
import TestPage from "./pages/TestPage";
import WriteBoard from "./pages/WriteBoard";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className={appStyle.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/member">
              <Route path="/member/:pageNum" element={<Member />} />
              <Route path="/member/test" element={<TestPage />} />
            </Route>

            <Route path="/product">
              <Route path="/product/:pageNum" element={<Product />} />
              <Route
                path="/product/:pageNum/:boardCode"
                element={<ProductDetails />}
              />
              <Route path="/product/write" element={<WriteBoard />} />
            </Route>

            <Route path="/menu">
              <Route path="/menu/:pageNum" element={<Menu />} />
              <Route path="/menu/:pageNum/:index" element={<RecipeDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
