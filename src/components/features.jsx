import { Image } from "./image";
import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
      <div className="section-title">
      <h2>Menú</h2>
          <p>
          <h1>¡Disfrutar!</h1>
          </p>
          <p>
         <h1>Precios válidos para consumo en la tienda física.</h1>
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
    </div>
  );
};