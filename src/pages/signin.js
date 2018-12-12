import React from "react"
import Layout from "../components/layout"
import { auth } from "../utils/fire"
import firebase from "firebase/app"
import "firebase/auth"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import config from "../utils/store";

class signin extends React.Component {
  uiConfig = {
    signInFlow: "redirect",
    queryParameterForSignInSuccessUrl: "p",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        console.log("signInSuccessWithAuthResult", authResult, redirectUrl)
        return true
      },
    },
  }
  render() {
    return (
      <Layout myPath={this.props.location.pathname}>
        <div>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth} />
        </div>
      </Layout>
    )
  }
}
export default signin
