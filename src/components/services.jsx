import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>DELIVERY</h2>
          <p>
          Próximamente podrás recibir todas nuestras delicias con Glovo
          </p>
        </div>
        <div className="row">
          {props.data
           ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                  <li>
                      <a
                        href="https://glovoapp.com/pt/pt/lisboa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img src="img/glovo.png" alt="glovo-icon" />
                      </a>
                  </li>
                  </div>
                ))
              : "Loading..."}
        </div>
      </div>
    </div>
  );
};
