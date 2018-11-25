import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import { Row, Box } from "../components/lgm-grid.js";
import Helmet from "react-helmet";
import config from "../utils/config";

const MarkdownFormat = styled.div`
  // Fill with css here for markdown data
  & h1 {
    color: #ff0000;
  }
  & .gatsby-resp-iframe-wrapper {
    margin: 0 16px 0 16px;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  // console.log("d", post.fields.slug);
  return (
    <Layout myPath={post.fields.slug}>
      <Helmet>
        <meta name="Description" content={post.frontmatter.description} />
        <title>
          {config.name} - {post.frontmatter.title}
        </title>
        <meta
          property="og:title"
          content={config.name + " - " + post.frontmatter.title}
        />
        <meta
          property="og:description"
          content={post.frontmatter.description}
        />
        <meta property="og:url" content={config.url + post.fields.slug} />
        <meta property="og:image" content={config.url + "/social_share.jpg"} />
      </Helmet>
      <Row backgroundcolor="#e6dbc9" color="#2e3830">
        <Box>
          <h1>{post.frontmatter.title}</h1>
          <MarkdownFormat dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
  }
`;
