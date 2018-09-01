import React from 'react'
import Link from 'gatsby-link'
import HomePageTemplate from '../templates/home-page';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        // <HomePageTemplate title={'jou'}/>
        {posts
          .map(({ node: post }) => (
            <div key={post.id}>
              <Link to={post.fields.slug}>LINK</Link>
              {post.frontmatter.title}
              {post.frontmatter.date}
              {post.excerpt}
            </div>
          ))}
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
