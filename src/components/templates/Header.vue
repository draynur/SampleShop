<template>
  <b-navbar type="dark" variant="dark" fixed="top">
    <b-navbar-nav>
      <b-navbar-brand>One Stop Shop</b-navbar-brand>
      <b-nav-item href="/">Home</b-nav-item>
      <!-- Navbar dropdowns -->
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item
          ><router-link :to="{ path: 'Login' }"
            >Login/Signup</router-link
          ></b-dropdown-item
        >
        <b-dropdown-item @click="logOut">Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Header",
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.user = user
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  },
  computed: {},
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style>
</style>