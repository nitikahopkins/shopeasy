import React from "react";
import ImageSlider from "../components/ImageSlider";
import HomeCards from "../components/HomeCards";
import DefaultLayout from "../layouts/default";
//import "../css/.css";

export default function () {
  return (
    <DefaultLayout>
      <ImageSlider />
      <HomeCards />
    </DefaultLayout>
  );
}
