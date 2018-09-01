import React from 'react'

const Pricing = ({ data }) => (
  <div>
    {data.map(price => (
      <div key={price.plan}>
        <h4>{price.plan}</h4>
        <h2>${price.price}</h2>
        <p>{price.description}</p>
        <ul>
          {price.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

export default Pricing
