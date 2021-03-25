import React from 'react';

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className="photo-wrap">

          <img className='profile-img' src='./test.png' alt='headshot' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-header mb-5'>About Me</h1>
          <p>I"m going to add some more stuff about me here at a later time!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
