import React from 'react'
import Layout from '../components/layout'
import { fire } from '../utils/fire'
import { Row, Box } from '../components/lgm-grid.js'
import Helmet from 'react-helmet'
// import myFunction from '../components/msg.js'
// const myExtScript = require('../components/msg.js')

class debug extends React.Component {
  state = { isSignedIn: false }

  globalSignedIn = data => {
    //  console.log("dataFromChild", data);
    this.setState({ isSignedIn: data })
  }

  handleClick() {
    // myExtScript.myFunction()
  }

  render() {
    console.log('testx render props', this.props)
    // const myExtScript = require('../components/msg.js')
    // onClick={myExtScript.myFunction()}

    return (
      <Layout
        myPath={this.props.location.pathname}
        globalSignedIn={this.globalSignedIn}
      >
        <Helmet>
          <title>debug</title>
        </Helmet>
        <Row backgroundcolor="#e6dbc9">
          <Box>
            <p>SIGNEDIN: {this.state.isSignedIn ? 'TRUE' : 'FALSE'}</p>
            <p>
              USER:{' '}
              {this.state.isSignedIn
                ? fire.auth().currentUser.displayName
                : '-'}
            </p>
            <p>
              EMAIL:{' '}
              {this.state.isSignedIn ? fire.auth().currentUser.email : '-'}
            </p>
            <p>
              <button>Try it</button>
            </p>
          </Box>
        </Row>
      </Layout>
    )
  }
}
export default debug
