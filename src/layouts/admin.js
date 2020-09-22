import React from "react";
import Nav from "../components/admin/Nav";

export default function AdminLayout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}
