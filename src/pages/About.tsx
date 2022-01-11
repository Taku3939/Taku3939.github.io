import React from "react";
import Layout from "../components/Layout";

import {Container, Col, Row} from "react-bootstrap";

interface BlogPage{
    title?: string;
    content?: any;
}
export interface IAbout {

}

const About = (props: IAbout) => {
    return (
        <div>
            <Layout>
                <article>
                    <Row>
                        <Col sm={10}>
                            <h1></h1>

                        </Col>
                        <Col sm={2}>
                            <aside>

                            </aside>
                        </Col>
                    </Row>


                </article>
            </Layout>
        </div>
    );
}

export default About;