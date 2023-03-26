import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/Sambo-logo.png" className="img-responsive" alt="" />
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Menú
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre el Açai
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Delivery
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galería
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
