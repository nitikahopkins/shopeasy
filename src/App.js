import React, { useState } from "react";
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
import { Auth } from "aws-amplify";
// import TheHeader from "./components/TheHeader";
// import TheFooter from "./components/TheFooter";

function App() {
  const [signedInUser, setSignedInUser] = useState(undefined);
  const [signInForm, setSignInForm] = useState({ username: "", password: "" });

  async function signIn() {
    try {
      const user = await Auth.signIn(signInForm.username, signInForm.password);
      setSignedInUser(user);
      console.log(await Auth.currentAuthenticatedUser());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* <TheHeader /> */}
      <PublicRoutes
        signIn={signIn}
        setSignInForm={setSignInForm}
        signInForm={signInForm}
        signedInUser={signedInUser}
      />
      <PrivateRoutes />
      {/* <TheFooter /> */}
    </div>
  );
}

export default App;
