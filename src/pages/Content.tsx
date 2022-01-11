import React from "react";
import Layout from "../components/Layout";
//import Styles from "./Content.module.scss";
//import imgUrl from "../imgs/holo.png";
import {Row, Col, Container} from "react-bootstrap";
import ContentCard, {CardParam} from "../components/ContentCard";

import ImgHolo from "../imgs/holo.png";
import ImgArtNet from "../imgs/Art-Net.png";
import ImgSp from "../imgs/spmodel-importer.png";
import ImgMV2021 from "../imgs/mikuec2020virtual.png";

const params: CardParam[] = [
    {
        title: "ArtNetReceiver",
        main: "Unity上でArt-Net通信をするためのプラグインです。",
        gitUrl: "https://github.com/Taku3939/ArtNetReceiver",
        src: ImgArtNet.toString(),
    },
    {
        title: "HoloRagnarok",
        main: "ホロライブEnキャラクターによる格ゲー",
        // path: "/page/HoloRagnarok",
        src: ImgHolo.toString(),
    },
    {
        title: "SPModelImporter",
        main: "SubstancePainterで出力したモデルを簡易にUnityに取り込むためのプラグイン",
        gitUrl: "https://github.com/Astript/SPModelImporter",
        src: ImgSp.toString(),
    },
    {
        title: "LiveCSharp",
        main: "C#でP2P通信を行うことができるプロジェクト",
        gitUrl: "https://github.com/Taku3939/LiveCSharp",
        src: "",
    },
    {
        title: "transferwise-ts",
        main: "WiseのAPIをtypescriptで扱うためのプラグイン",
        gitUrl: "https://github.com/Taku3939/transferwise-ts",
        src: "",
    },
    {
        title: "MikuecVirtual 2021",
        main: "VLLで作成した初音ミクのオンラインライブ",
        src: ImgMV2021.toString(),
    }

];

const sliceByNumber = (array: any, n: number) => {
    const length = Math.ceil(array.length / n);

    return new Array(length).fill(0).map((_, i) => {
        return [array[i * n], array[i * n + 1], array[i * n + 2]];
    });
};

export default function Content() {
    return (
        <Layout>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">My Works</h1>
                        <p className="lead text-muted">My programing works</p>
                    </div>
                </div>
            </section>
            <Container>
                {sliceByNumber(params, 3).map((p, index) => {
                    return (
                        <Row>
                            {p[0] && (
                                <Col md={4}>
                                    <ContentCard
                                        title={p[0].title}
                                        main={p[0].main}
                                        gitUrl={p[0].gitUrl}
                                        src={p[0].src}
                                    />
                                </Col>
                            )}
                            {p[1] && (
                                <Col md={4}>
                                    <ContentCard
                                        title={p[1].title}
                                        main={p[1].main}
                                        gitUrl={p[1].gitUrl}
                                        src={p[1].src}
                                    />
                                </Col>
                            )}
                            {p[2] && (
                                <Col md={4}>
                                    <ContentCard
                                        title={p[2].title}
                                        main={p[2].main}
                                        gitUrl={p[2].gitUrl}
                                        src={p[2].src}
                                    />
                                </Col>
                            )}
                        </Row>
                    )
                })}
            </Container>
        </Layout>
    );
}
