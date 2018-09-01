import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { main, intro, pricing } = frontmatter;
  return (
    <section>
      <h2>{frontmatter.title}</h2>
      <h3>{frontmatter.heading}</h3>
      <p>{frontmatter.description}</p>
      <Features gridItems={frontmatter.intro.blurbs} />
      <h3>{main.heading}</h3>
      <p>{main.description}</p>
      <img
        src={frontmatter.image}
      />
      <img
        src={frontmatter.full_image}
      />
      <img
        src={main.image1.image}
        alt={main.image1.alt}
      />
      <img
        src={main.image2.image}
        alt={main.image2.alt}
      />
      <img
        src={main.image3.image}
        alt={main.image3.alt}
      />
      <Testimonials testimonials={frontmatter.testimonials} />
      {pricing.heading}
      <p>{pricing.description}</p>
      <Pricing data={pricing.plans} />
    </section>
  )
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
