import React from 'react'
import { Menu, MenuItem } from './lgm-menu.js'
import { Row, Box } from './lgm-grid.js'
import { GlobalStyles, FooterLink, FooterRow, FooterPart } from './style.js'
import GDPRConsent from './gdpr-consent.js'
import Helmet from 'react-helmet'
import config from '../utils/config'

import faviconico16 from '../assets/favicon-16x16.png'
import faviconico32 from '../assets/favicon-32x32.png'
import appletouchicon from '../assets/apple-touch-icon.png'
import safaripinnedtab from '../assets/safari-pinned-tab.svg'

import CookieLogo from '../assets/cookie.png'
import MailLogo from '../assets/mail.png'

import { fire } from '../utils/fire'

class Layout extends React.Component {
  state = { isSignedIn: false }

  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      this.unregisterAuthObserver = fire.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        if (this.props.globalSignedIn)
          this.props.globalSignedIn(this.state.isSignedIn)
        console.log('user', user)
        var x = document.querySelector('umiak-single-answer')
        if (x != null) {
          x.heading = 'tesTUTAt'
        }
      })
    }
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const { children, myPath } = this.props
    console.log('Layout props', this.props)
    if (myPath === '/signin') {
      return <div>{children}</div>
    } else if (myPath === '/signout') {
      return <div>{children}</div>
    } else if (myPath.includes('/secure/') && !this.state.isSignedIn) {
      return <div>Du måste vara inloggad för att se denna sida.</div>
    } else {
      return (
        <div>
          <GlobalStyles>
            <Helmet>
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={appletouchicon}
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={faviconico32}
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={faviconico16}
              />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href={safaripinnedtab} color="#009fe3" />
              <meta name="msapplication-TileColor" content="#999999" />
              <meta name="theme-color" content="#ffffff" />
              <meta name="og:type" content="website" />
              <html lang="sv" />
            </Helmet>
            <GDPRConsent
              text="Vi använder kakor och hanterar användardata, läs mer i vår "
              linktext="kak- och integritetspolicy"
              linkto="/cookiesandprivacy"
              backgroundcolor="#000"
              color="#e6dbc9"
            />
            <Row backgroundcolor="#2e3830">
              <Box gridcolumn="2/8" backgroundcolor="#2e3830">
                <Menu
                  backgroundcolor="#2e3830"
                  color="#e6dbc9"
                  backgroundcolorhover="#151515"
                  hometext={config.name}
                  homelink="/"
                  homecolor="#e6dbc9"
                >
                  <MenuItem to="/" text="Hem" />
                  <MenuItem to="/allmd" text="allmd" />
                  {this.state.isSignedIn ? (
                    <MenuItem to="/signout" text="Logga ut" />
                  ) : (
                    <MenuItem to={'/signin?p=' + myPath} text="Logga in" />
                  )}
                </Menu>
              </Box>
            </Row>
            {children}
            <Row backgroundcolor="#2e3830">
              <Box gridcolumn="2/5" color="#e6dbc9">
                <FooterPart>
                  <img src={MailLogo} alt="Logo" />
                  <h3>Kontakta oss</h3>
                  <p>
                    Om du har frågor om denna webplats eller dess innehåll går
                    det naturligtvis bra att kontakta oss vis mejl
                    (jonas@pixotag.com) eller kontakta SVERAs kansli. Vi
                    försöker alltid svara så snabbt som möjligt men det händer
                    att vi har annat för oss ;-)
                  </p>
                </FooterPart>
              </Box>
              <Box gridcolumn="5/8" color="#e6dbc9">
                <FooterPart>
                  <FooterLink to="/cookiesandprivacy">
                    <img src={CookieLogo} alt="Logo" />
                    <h3>Kak- och integritetspolicy</h3>
                    <p>
                      Ja, precis som alla webplatser hanterar vi kakor och
                      användardata, det är inget att bli kränkt över ;-) Vi vill
                      sköta det på ett snyggt sätt och lagrar så lite som
                      möjligt om våra användare. Vill du veta mer kan du läsa
                      denna kak- och integritetspolicy.
                    </p>
                  </FooterLink>
                </FooterPart>
              </Box>
            </Row>
            <Row backgroundcolor="#151515">
              <Box color="#e6dbc9">
                <FooterRow>(CC BY-SA 4.0) SVERA</FooterRow>
              </Box>
            </Row>
          </GlobalStyles>
        </div>
      )
    }
  }
}
export default Layout
