import React from "react";
import { Link, graphql, navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Bio from "../components/bio";
import SearchPosts from "../components/searchPosts";

const IndexPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const localSearchBlog = data.localSearchBlog;
  console.log("data", data);

  return (
    <Layout
      location={location}
      title={
        <>
          Hi{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>{" "}
          I'm Alex.
        </>
      }
    >
      <SEO title="Home" keywords={[`blog`]} />
      <p>Welcome to my small corner of the Internet.</p>
      <Bio />
      <SearchPosts
        posts={posts}
        localSearchBlog={localSearchBlog}
        navigate={navigate}
        location={location}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;
