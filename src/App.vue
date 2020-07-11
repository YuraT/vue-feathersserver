<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar"
import Messages from "@/components/home/Messages"
import Login from "@/components/home/Login"

export default {
  name: "App",
  components: {
    Navbar: Navbar,
    Messages: Messages,
    Login: Login,
  }
};
</script>

<style>
</style>
