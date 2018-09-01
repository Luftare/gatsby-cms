import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={v4()}>
        <div>
          {testimonial.quote}
          <cite>{testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

export default Testimonials
