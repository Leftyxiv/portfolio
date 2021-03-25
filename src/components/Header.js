import React from 'react'
import Typed from 'react-typed'


function Header() {
  return (
    <div className="header-wrapper">
      <div className='main-info'>
        <h1>Web development and website promotions</h1>
      <Typed 
      className='typed-text'
      strings= {[
        'Full Stack Developer', 'MERN / Python/Django', 'Animal Lover', 'Optimist'
      ]}
      typeSpeed={40}
      backSpeed={60}
      loop
      />
      <a href='#' className='btn-main-offer'>Contact Me</a>
      </div>
    </div>
  )
}

export default Header
