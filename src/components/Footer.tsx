import React from "react";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <ul className="list-inline mb-5">
        <li className="list-inline-item">
          &nbsp;
          <a className="link-light social-link rounded-circle" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="list-inline-item">
          &nbsp;
          <a className="link-light social-link rounded-circle" href="#">
            <i className="icon-social-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          &nbsp;
          <a className="link-light social-link rounded-circle" href="#">
            <i className="icon-social-github"></i>
          </a>
        </li>
      </ul>
      <div className="container">
        <p className="text-muted mb-0 small">
          Copyright &nbsp;© Takuya Isaki 2022
        </p>
      </div>
      <a className="js-scroll-trigger scroll-to-top rounded" href="#page-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </footer>
  );
}
