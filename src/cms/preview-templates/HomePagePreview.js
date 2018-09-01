import React from 'react'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

export default HomePagePreview
