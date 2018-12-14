import React from 'react'
import Layout from '../components/layout'
import { fire } from '../utils/fire'
import { Row, Box } from '../components/lgm-grid.js'

class debug extends React.Component {
  state = { isSignedIn: false }

  globalSignedIn = data => {
    //  console.log("dataFromChild", data);
    this.setState({ isSignedIn: data })
  }

  render() {
    console.log('testx render props', this.props)
    return (
      <Layout
        myPath={this.props.location.pathname}
        globalSignedIn={this.globalSignedIn}
      >
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
          </Box>
        </Row>
      </Layout>
    )
  }
}
export default debug
