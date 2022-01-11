import React from "react";
import {Button, Card} from "react-bootstrap";

import Styles from "../components/Card.module.scss";

export interface CardParam {
    title: string;
    main: string;
    gitUrl?: string;
    src?: string;
}

export default function ContentCard(props: CardParam) {
    return (
        <Card className="p-3 mb-2">
            {props.src && <img width="100%" height="100%" src={props.src} alt=""/>}
            <div className="card-body">
                <h4 className="card-text">{props.title}</h4>
                <p className="card-text">{props.main}</p>
                <div className="d-flex justify-content-between align-items-center">
                    {props.gitUrl &&
                        <div className="btn-group">
                            <Button className={Styles.viewButton} variant="dark">
                                <a href={props.gitUrl}>Github</a>

                                {/* <LinkContainer to={props.path}>
                <Nav.Link>View</Nav.Link>
              </LinkContainer> */}
                            </Button>
                        </div>
                    }
                    {/*<small className="text-muted">9 mins</small>*/}
                </div>
            </div>
        </Card>
    );
}
