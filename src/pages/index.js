import React from 'react'
import Layout from '../components/layout'
import { Row, Box } from '../components/lgm-grid.js'
import Helmet from 'react-helmet'
import config from '../utils/config'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

class index extends React.Component {
  state = { isSignedIn: false }

  globalSignedIn = data => {
    console.log(`dataFromChild`, data)
    this.setState({ isSignedIn: data })
  }

  render() {
    // console.log("testx render props", this.props);
    return (
      <Layout
        myPath={this.props.location.pathname}
        globalSignedIn={this.globalSignedIn}
      >
        <Helmet>
          <meta name="Description" content={config.name + ` - homepage`} />
          <title>{config.name} - homepage</title>
          <meta property="og:title" content={config.name + ` - homepage`} />
          <meta property="og:description" content="Page content description" />
          <meta
            property="og:url"
            content={config.url + this.props.location.pathname}
          />
          <meta
            property="og:image"
            content={config.url + `/social_share.jpg`}
          />
        </Helmet>
        <Row backgroundcolor="#e6dbc9">
          <Box>
            <h1>SVERA Utbildnings portal</h1>
            <p>
              Här kommer ett eller flera stycken som beskriver denna denna
              utbildnings tjänst, vilka den är till för samt annan info om
              tjänsten. Det skall naturligtvis skrivas en riktig text här. Denna
              text upprepar sig. Här kommer ett eller flera stycken som
              beskriver denna denna utbildnings tjänst, vilka den är till för
              samt annan info om tjänsten. Det skall naturligtvis skrivas en
              riktig text här. Denna text upprepar sig. Här kommer ett eller
              flera stycken som beskriver denna denna utbildnings tjänst, vilka
              den är till för samt annan info om tjänsten. Det skall
              naturligtvis skrivas en riktig text här. Denna text upprepar sig.
            </p>
          </Box>
        </Row>
        <Row backgroundcolor="#c53211">
          <Box gridcolumn="2/4">
            <Img fluid={this.props.data.imgf.childImageSharp.fluid} />
          </Box>
          <Box color="#e6dbc9" gridcolumn="4/8">
            <h2>Grundkurs för funktionär</h2>
            <p>
              Skall du hjälpa till som funktionär för första gången? Gå den här
              kursen och du kommer att få en licens att arbeta som grundläggande
              funktionär vid båt eller aquabike tävlingar. Kursen tar cirka 20
              minuter att genomföra.
            </p>
            <p>
              För att kunna delta i kursen måste du vara inloggad. Följ bara
              länken så kommer du efter att du loggat in till kursen.
            </p>
            <p>
              <Link
                to={
                  this.state.isSignedIn
                    ? `/secure/abr3`
                    : `/signin?p=/secure/abr3`
                }
              >
                Grundkurs för funktionärer
              </Link>
            </p>
          </Box>
        </Row>
        <Row backgroundcolor="#f7b733">
          <Box gridcolumn="2/4">
            <Img fluid={this.props.data.imgtc.childImageSharp.fluid} />
          </Box>
          <Box gridcolumn="4/8">
            <h2>Namnet på en annan kurs</h2>
            <p>
              Occupy vice cloud bread, truffaut four dollar toast tofu iceland.
              Adaptogen wolf photo booth mixtape edison bulb, chia knausgaard
              waistcoat tacos man bun schlitz kitsch dreamcatcher. Truffaut
              neutra tbh, tote bag trust fund semiotics pour-over master cleanse
              gluten-free seitan. Brunch pour-over chicharrones fashion axe
              bitters pug etsy. Authentic tumeric four dollar toast, succulents
              austin chicharrones 90's ethical.
            </p>
          </Box>
        </Row>
        <Row backgroundcolor="#e6dbc9">
          <Box>
            <p>
              You probably haven't heard of them sartorial succulents jean
              shorts schlitz listicle hell of cred crucifix lo-fi vinyl echo
              park synth glossier irony. Letterpress iceland you probably
              haven't heard of them craft beer before they sold out poutine
              taiyaki etsy lomo meggings 8-bit fixie everyday carry
              vexillologist. Coloring book ethical migas, succulents YOLO wolf
              snackwave meditation. Narwhal intelligentsia vape food truck.
            </p>
          </Box>
        </Row>
      </Layout>
    )
  }
}
export default index

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1056) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imgf: file(relativePath: { eq: "images/f.jpg" }) {
      ...fluidImage
    }
    imgtc: file(relativePath: { eq: "images/tc.jpg" }) {
      ...fluidImage
    }
  }
`
