import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './index.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

export default TemplateWrapper
