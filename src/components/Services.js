import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Services() {
  return (
    <div className="services">
      <h1 className="py-5">Proficiencies</h1>
      <div className="container">
        <div className="row">
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <i className="fab fa-react"></i>
              <div className="circle"></div>
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3>React</h3>
              <p>Under construction!</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"></div>
              <FontAwesomeIcon icon={faDatabase} size="3x" />
              <h3>MongoDB</h3>
              <p>Under construction!</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"></div>
              <FontAwesomeIcon icon={faPython} size="3x" />
              <h3>Python</h3>
              <p>Under construction!</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"></div>
              <FontAwesomeIcon icon={faServer} size="3x" />
              <h3>Django</h3>
              <p>Under construction!</p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Services;
