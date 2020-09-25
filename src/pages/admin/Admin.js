import React from "react";
import AdminLayout from "../../layouts/admin";

function Admin(props) {
  return <AdminLayout>{props.children}</AdminLayout>;
}
export default Admin;
