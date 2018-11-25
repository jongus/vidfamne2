// import firebase from "firebase";
import secret from "../secret/secret";
import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: secret.apiKey,
  authDomain: secret.authDomain
};

// const fire = firebase.initializeApp(config);
// export default fire;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

let fire, auth;

if (typeof window !== "undefined") {
  fire = firebase;
  auth = firebase.auth();
}

export { fire, auth };
