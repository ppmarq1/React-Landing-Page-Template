import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>
          Nuestras Delicias!
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
        <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Pedro Marques. Follow us here on{" "}
            <a href="https://www.instagram.com/samboacai.es/" rel="nofollow">
              INSTAGRAM
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
