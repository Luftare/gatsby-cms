import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={item.image}>
        <img alt="" src={item.image} />
        <p>{item.text}</p>
      </div>
    ))}
  </div>
)

export default FeatureGrid
