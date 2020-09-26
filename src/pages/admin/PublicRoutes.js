import React from "react";
import { Router } from "@reach/router";
//import SignInPage from "../Components/SignInPage";
//import NotFound from "../Components/NotFound";
import AdminLogIn from "./AdminLogin";
import Home from "../../pages/Home";

const PublicRoutes = ({ signedInUser, signIn, setSignInForm, signInForm }) => {
  return (
    <Router>
      <Home
        path="/"
        signIn={signIn}
        setSignInForm={setSignInForm}
        signInForm={signInForm}
        signedInUser={signedInUser}
      />
      <AdminLogIn path="adminlogin" />
    </Router>
  );
};

export default PublicRoutes;
