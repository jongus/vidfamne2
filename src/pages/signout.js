import React from "react";
import Layout from "../components/layout";
import { fire } from "../utils/fire";
import { navigate } from "gatsby";

class signout extends React.Component {
  componentDidMount = () => {
    fire.auth().signOut();
  };
  render() {
    if (typeof window !== "undefined") {
      navigate("/");
    }
    return (
      <Layout myPath={this.props.location.pathname}>
        <div>
          <button onClick={() => fire.auth().signOut()}>Logga ut</button>
        </div>
      </Layout>
    );
  }
}
export default signout;
