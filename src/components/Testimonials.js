import React from 'react'

import TestimonialsCarousel from './TestimonialsCarousel'

function Testimonials() {
  return (
    <div className='testimonials'>
      <h1>My happy clients</h1>
      <div className='container'>
        <div className='testimonials-content'>
        <TestimonialsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
