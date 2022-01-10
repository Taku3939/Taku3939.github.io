import React from "react";
import {LinkContainer} from "react-router-bootstrap";

import Styles from "./Header.module.scss";
import {Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <div className={Styles.header}>
            <Navbar bg="dark" variant="dark">
                <Nav className={Styles.test}>
                    <LinkContainer to="/">
                        <Nav.Link>紹介</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/content">
                        <Nav.Link>制作物</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link href="/about">About</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
