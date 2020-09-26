import React from "react";
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default function DefaultLayout({
  signIn,
  setSignInForm,
  signInForm,
  children,
}) {
  return (
    <div className="homeImage">
      <TheHeader
        signIn={signIn}
        setSignInForm={setSignInForm}
        signInForm={signInForm}
      />
      {children}
      <TheFooter />
    </div>
  );
}
