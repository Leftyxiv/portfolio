import React from "react";

const Contact = () => {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and I will contact you as soon as possible </p>
      </div>
      <div className="container">
        <div className="col-md-6 col-xs-12">
          {/* name input */}
          <div className="text-center">
            <input id="name" type="text" className="form-control" placeholder="Name" name="name" />
            <div className="line"></div>
          </div>
          {/* phone input */}
          <div className="text-center">
            <input id="phone" type="text" className="form-control" placeholder="Phone Number" phone="phone" />
            <div className="line"></div>
          </div>
          {/* email input */}
          <div className="text-center">
            <input id="email" type="email" className="form-control" placeholder="Email" email="email" />
            <div className="line"></div>
          </div>
          {/* subject input */}
          <div className="text-center">
            <input id="subject" type="text" className="form-control" placeholder="Subject" subject="subject" />
            <div className="line"></div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          {/* description input */}
          <div className="text-center">
            <textarea
              id="description"
              type="text"
              className="form-control"
              placeholder="Description"
              description="description"
            ></textarea>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="contact-button-container">
        <button className="btn-main-offer contact-btn" id="contactBtn" type="submit">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Contact;
