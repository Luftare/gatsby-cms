import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <section>
      <Helmet title={`${post.frontmatter.title} | Blog`} />
      <h2>{post.frontmatter.title}</h2>
      <HTMLContent content={post.html}/>
      <p>{post.frontmatter.description}</p>
    </section>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
