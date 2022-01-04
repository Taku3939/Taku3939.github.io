import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
//css
import Styles from "./Header.module.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>紹介</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/content">
              <Nav.Link>制作物</Nav.Link>
            </LinkContainer>
            {/* ここから要素追加していく */}
            <LinkContainer to="/uouo">
              <Nav.Link href="/uouo">うおうお</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
