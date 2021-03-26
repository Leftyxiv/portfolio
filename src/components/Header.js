import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'


function Header() {
  return (
    <div id='home' className="header-wrapper">
      <div className='main-info'>
        <h1>Web development and learning solutions</h1>
      <Typed 
      className='typed-text'
      strings= {[
        'Full Stack Developer', 'MERN / Python/Django', 'Animal Lover', 'Optimist'
      ]}
      typeSpeed={40}
      backSpeed={60}
      loop
      />
      <Link to='contact' smooth={true} className='btn-main-offer'>Contact Me</Link>
      </div>
    </div>
  )
}

export default Header
