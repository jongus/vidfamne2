import React from "react"
import Layout from "../components/layout"
// import { Row, Box } from "../components/lgm-grid.js";
// import Helmet from "react-helmet";
// import config from "../utils/config";

class testx extends React.Component {
  state = { isSignedIn: false }

  globalSignedIn = data => {
    //console.log("dataFromChild", data);
    this.setState({ isSignedIn: data })
  }

  render() {
    console.log("testx render props", this.props)
    return (
      <Layout
        myPath={this.props.location.pathname}
        globalSignedIn={this.globalSignedIn}
      >
        <div>
          <p>TEST {this.state.isSignedIn ? "TRUE" : "FALSE"}</p>
        </div>
      </Layout>
    )
  }
}
export default testx
