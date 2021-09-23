import React from "react";

export const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>education</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Full stack certification - Kenzie Academy MERN</p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018</h3>
            <p>ASE Certification - Steering & Suspension, brakes, and electrical systems.</p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2008</h3>
            <p>AA - Sierra College <br /> Liberal Arts </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2008</h3>
            <p>AA - Sierra College <br /> Business Administration </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2004</h3>
            <p>Woodcreek High School <br /> General Studies </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
