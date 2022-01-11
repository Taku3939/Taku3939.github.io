import React from "react";
import Layout from "../components/Layout";
import Styles from "./Top.module.scss";
import { Container, Col, Row } from "react-bootstrap";

export default function Top() {
  return (
    <div>
      <Layout>
        <div>
          <div className={"container-fluid"}>
            {/*タイトル*/}
            <Row className={`${Styles.item} ${Styles.content_1}`}>
              <Col className={"px-0"} xs={8}>
                <h1 className={Styles.title}>Taku Portfolio</h1>
                <hr/>
                <div className={Styles.subTitle}>
                  <p>C#, TypeScript, Python, C++</p>
                  <p>すべてのうおうお、うおうお</p>
                </div>
              </Col>
            </Row>
            {/*自己紹介*/}
            <Row className={`${Styles.item} ${Styles.content_2}`}>
              {/*<Col>*/}
              {/*  <div className={Styles.icon} />*/}
              {/*</Col>*/}
              <Col className ={Styles.left}>
                <h2 className={Styles.title}>自己紹介</h2>
                <p>名前 : Taku</p>
                <p>
                  Github :{" "}
                  <a href="https://github.com/Taku3939">
                    https://github.com/Taku3939
                  </a>
                </p>
                <p>出身大学 : 電気通信大学</p>
              </Col>
            </Row>


          </div>
        </div>
      </Layout>
    </div>
  );
}
