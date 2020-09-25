import React from "react";
import { Router } from "@reach/router";
import Admin from "./Admin";
import Orders from "./Orders";
import Products from "./Products";
import ProductDetail from "../../components/admin/ProductDetail";
import Category from "./Category";
import Categories from "./Categories";
import MyAccount from "../MyAccount";
import OrderDetail from "./OrderDetail";

//import NotFound from "../Components/NotFound";

const PrivateRoutes = ({ signOut }) => {
  return (
    <Router>
      <MyAccount path="myaccount" />
      <Admin path="admin" signOut={signOut}>
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
  );
};

export default PrivateRoutes;
