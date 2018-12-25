import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Row, Box } from '../components/lgm-grid.js'
import Helmet from 'react-helmet'
import config from '../utils/config'

const MarkdownFormat = styled.div`
  // Fill with css here for markdown data
  & .gatsby-resp-iframe-wrapper {
    margin: 0 16px 0 16px;
  }
`

// export const post = data.markdownRemark

class debug extends React.Component {
  state = { isSignedIn: false }

  globalSignedIn = data => {
    // console.log("dataFromChild", data)
    this.setState({ isSignedIn: data })
  }

  render() {
    // console.log("testx render props", this.props)
    return (
      <Layout
        myPath={this.props.data.markdownRemark.fields.slug}
        globalSignedIn={this.globalSignedIn}
      >
        <Helmet>
          <meta
            name="Description"
            content={this.props.data.markdownRemark.frontmatter.description}
          />
          <title>
            {config.name} - {this.props.data.markdownRemark.frontmatter.title}
          </title>
          <meta
            property="og:title"
            content={
              config.name +
              ' - ' +
              this.props.data.markdownRemark.frontmatter.title
            }
          />
          <meta
            property="og:description"
            content={this.props.data.markdownRemark.frontmatter.description}
          />
          <meta
            property="og:url"
            content={config.url + this.props.data.markdownRemark.fields.slug}
          />
          <meta
            property="og:image"
            content={config.url + '/social_share.jpg'}
          />
        </Helmet>
        <Row backgroundcolor="#e6dbc9" color="#2e3830">
          <Box>
            <MarkdownFormat
              dangerouslySetInnerHTML={{
                __html: this.props.data.markdownRemark.html,
              }}
            />
          </Box>
        </Row>
      </Layout>
    )
  }
}
export default debug

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
`
