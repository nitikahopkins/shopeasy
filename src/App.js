import React from "react";
import { Router } from "@reach/router";
import Admin from "./pages/admin/Admin";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
//import NewProduct from "./pages/admin/NewProduct";
import OrderDetail from "./pages/admin/OrderDetail";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./components/admin/ProductDetail";
import Categories from "./pages/admin/Categories";
import Category from "./pages/admin/Category";
import AdminLogIn from "./pages/admin/AdminLogin";
import MyAccount from "./pages/MyAccount";
import PublicRoutes from "./pages/admin/PublicRoutes";
import PrivateRoutes from "./pages/admin/PrivateRoutes";
import Defaut from "../src/layouts/default";
// import TheHeader from "./components/TheHeader";
// import TheFooter from "./components/TheFooter";

function App() {
  return (
    <div>
      {/* <TheHeader /> */}
      <PublicRoutes />
      <PrivateRoutes />
      {/* <TheFooter /> */}
    </div>
  );
}

export default App;
