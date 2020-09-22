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

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Admin path="admin">
          <Products path="products" />
          <Orders path="orders" />
          <ProductDetail path="productdetail/:slug/edit" edit={true} />
          <ProductDetail path="productdetail/new" />
          <OrderDetail path="orderdetail" />
          {/* <ProductDetail path="productdetail" /> */}
          <Category path="categories/new" />
          <Category path="categories/:slug/edit" edit={true} />
          <Categories path="categories" />
        </Admin>
      </Router>
    </div>
  );
}

export default App;
