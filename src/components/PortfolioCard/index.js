import React from "react";
import "./style.css";

function PortfolioCard(props) {
  function clickCard(_url) {
    window.open(_url, '_blank'); 
  } 

  return (
    <div className="col-md-4 portfolio-card" onClick={clickCard.bind(this, props.url)}>
      <div
        className="project img ftco-animate d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(./web/images/works/${props.image})`,
        }}
      >
        <div className="overlay"></div>
        <div className="text text-center p-4">
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

export default PortfolioCard;
