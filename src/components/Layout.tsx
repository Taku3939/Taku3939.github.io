import React from "react";
import Header from "./Header";
import Styles from "./Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={Styles.layout}>
      <Header />
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
