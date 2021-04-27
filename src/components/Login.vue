<template>
  <div>
    <h1>Login</h1>
    <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script>
// import {} from "";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  mounted() {
    // FirebaseUI config.
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      // tosUrl: "<your-tos-url>",
      // // Privacy policy url/callback.
      // privacyPolicyUrl: function () {
      //   window.location.assign("<your-privacy-policy-url>");
      // },
    };

    // Initialize the FirebaseUI Widget using Firebase.
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>

<style>
</style>