import React from "react";
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default function DefaultLayout(props) {
  return (
    <div className="homeImage">
      <TheHeader />
      {props.children}
      <TheFooter />
    </div>
  );
}
