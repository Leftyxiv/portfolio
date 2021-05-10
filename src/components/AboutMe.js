import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src="./test.png" alt="headshot" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-header mb-5">About Me</h1>
          <p>
            In my search for meaningful employment, I have tried to look for jobs that I feel would really resonate with
            me. I am fascinated with technology and where things are moving. I was a computer science major before
            moving here to Kentucky, and although I do not have much work experience in this field, I am passionate
            about it. I feel like I am proficient in JavaScript, TypeScript, and the MERN stack for front end. I am
            currently finishing up the boot camp I am attending with the Python/Django curriculum.
            
            <br/>
             I have a decade of
            experience dealing with people, and sometimes in very tense and high intensity situations, and as a result
            I’ve gotten very good at finding different ways to articulate things to have meaningful or effective
            interactions with others. . I also have a certification from the National Institute for Automotive Service
            Excellence for electrical work, and as such I have a very strong understanding of electrical concepts and it
            gives me unique perspective on troubleshooting. With my passion for information technology, and my people
            skills I feel I would make a valuable addition to your team. Thank you for taking the time to visit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
