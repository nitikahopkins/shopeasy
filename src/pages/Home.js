import React from "react";
import ImageSlider from "../components/ImageSlider";
import HomeCards from "../components/HomeCards";
import DefaultLayout from "../layouts/default";
import "../css/Home.css";

export default function Home() {
  return (
    <DefaultLayout>
      <ImageSlider />
      <HomeCards />
    </DefaultLayout>
  );
}
