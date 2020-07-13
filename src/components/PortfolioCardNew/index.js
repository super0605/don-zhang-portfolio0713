import React from "react";
import "./style.css";

function PortfolioCardNew(props) {
  function clickCard(_url) {
    window.open(_url, "_blank");
  }

  return (
    <div
      className="col-md-4 text-center d-flex ftco-animate portfolio-card"
      onClick={clickCard.bind(this, props.url)}
    >
      <div className="portfolio-1 shadow project img ftco-animate d-flex justify-content-center align-items-center">
        <img
          src={`./web/images/works/${props.image}`}
          alt="portfolio_1"
          className="portfolio-img"
        />
        <div className="overlay overlay-1"></div>
        <div className="text text-center p-4 overlay-content">
          <h3>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              {props.summary}
            </a>
          </h3>
          <span>{props.stack}</span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCardNew;
