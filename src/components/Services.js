import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const iconFunction = (iconName) => {
  return (
    <div className="circle">
      <FontAwesomeIcon className="icon" icon={iconName} size="3x" />
    </div>
  );
};

function Services() {
  return (
    <div className="services">
      <h1 className="py-5">Proficiencies</h1>
      <div className="container">
        <div className="row">
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              {iconFunction(faReact)}
              <h3>React</h3>
              <p></p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              {iconFunction(faDatabase)}
              <h3>MongoDB</h3>
              <p></p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              {iconFunction(faPython)}
              <h3>Python</h3>
              <p></p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              {iconFunction(faJsSquare)}
              <h3>TypeScript/JS</h3>
              <p></p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Services;
