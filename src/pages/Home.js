import React from "react";
import ImageSlider from "../components/ImageSlider";
import HomeCards from "../components/HomeCards";
import DefaultLayout from "../layouts/default";
//import "../css/.css";

export default function ({ signedInUser, signIn, setSignInForm, signInForm }) {
  return (
    <DefaultLayout
      signIn={signIn}
      setSignInForm={setSignInForm}
      signInForm={signInForm}
      signedInUser={signedInUser}
    >
      <ImageSlider />
      <HomeCards />
    </DefaultLayout>
  );
}
