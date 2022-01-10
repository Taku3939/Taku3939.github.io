import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Styles from "./Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={Styles.layout}>
      <Header />
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
