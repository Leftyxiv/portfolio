import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Portfolio() {
  const openPopupboxNatours = () => {
    const content = (
      <>
        <img className="portfolio-image-popup-box" src="/images/natours.png" alt="natours-project" />
        <p>Deployed on Heroku! Can take 30s to start server, please be patient</p>
        <b>Github: </b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/Leftyxiv/natoursproject")}>
          Natours on Github
        </a>
        <b>Deployed: </b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://aledoux.net/natours")}>
          Natours Live Deployment
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigNatours = {
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxOnePer = () => {
    const content = (
      <>
        <img className="portfolio-image-popup-box" src="/images/oneper.png" alt="natours-project" />
        <p>Fully built out api!</p>
        <b>Github: </b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/Leftyxiv/onepercent")}>
          One Percent on Github
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigOnePer = {
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxStreamy = () => {
    const content = (
      <>
        <img className="portfolio-image-popup-box" src="/images/streamy.png" alt="natours-project" />
        <p>Stream your desktop live to the internet!</p>
        <b>Github: </b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/Leftyxiv/streamy")}>
          Streamy on Github
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigStreamy = {
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxUC = () => {
    const content = (
      <>
        <img className="portfolio-image-popup-box" src="/images/uc.png" alt="natours-project" />
        <p>UNDER CONSTRUCTION</p>
        <b>Github: </b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/Leftyxiv/FIXME")}>
          DEAD LINK UNDER CONSTRUCTION
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigUC = {
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNatours}>
            <img className="portfolio-image" src="/images/natours.png" alt="natours-project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxOnePer}>
            <img className="portfolio-image" src="/images/oneper.png" alt="portfolio-project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxStreamy}>
            <img className="portfolio-image" src="/images/streamy.png" alt="portfolio-project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxUC}>
            <img className="portfolio-image" src="/images/uc.png" alt="portfolio-project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNatours} />
      <PopupboxContainer {...popupboxConfigOnePer} />
      <PopupboxContainer {...popupboxConfigStreamy} />
      <PopupboxContainer {...popupboxConfigUC} />
    </div>
  );
}

export default Portfolio;
