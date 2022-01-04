import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
export default function Top() {
  return (
    <div>
      <Layout>
        <h2>hoge</h2>
        <p>This is about page</p>
        
        <Link to="/about">about page</Link>
      </Layout>
    </div>
  );
}
