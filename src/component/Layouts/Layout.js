import React from "react";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </> 
  );
};      


export default Layout;
