import React from 'react'

export const HomePageTemplate = ({ title = '', posts = [] }) => {
  return (
    <section>
      <h2>{title}</h2>
      {posts.map((post, index) => {
        return <div key={post.node.id}>{post.node.frontmatter.title}</div>;
      })}
    </section>
  );
};

const HomePage = ({ data }) => {
  if(!data) return null;
  const content = data.page.frontmatter;
  const posts = data.posts.edges;
  return (
    <HomePageTemplate
      title={content.title}
      posts={posts}
    />
  );
}

export default HomePage

export const aboutPageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    posts: allMarkdownRemark(
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
