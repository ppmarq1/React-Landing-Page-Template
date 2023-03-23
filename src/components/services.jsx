import { Image } from "./image";
import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>DELIVERY</h2>
          <p>
          ¿Quieres disfrutar de un açai en casa o en el trabajo?
          </p>
        </div>
        <div className="row">
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
  );
};
