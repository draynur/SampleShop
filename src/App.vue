<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase"
import Header from "./components/templates/Header";


export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
      console.log(user)
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
