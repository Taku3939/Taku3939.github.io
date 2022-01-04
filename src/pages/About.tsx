import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Styles from "./About.module.scss";

export default function About() {
  return (
    <div>
      <Layout>  
        <div className={Styles.icon}/>
        This is about
        <Link to="/">top page</Link>
      </Layout>
    </div>
  );
}
