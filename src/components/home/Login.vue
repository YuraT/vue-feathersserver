<template>
  <div>
    <button @click="logout">logout</button>
    <input
      type="text"
      placeholder="Enter email"
      v-model="email"
    />
    <input
      type="password"
      placeholder="Enter password"
      v-model="password"
    />
    <button type="submit" @click="tryLogin">Login</button>
  </div>
</template>

<script>
import * as services from "../../services";

export default {
  name: "Login",
  data() {
    return {
        email: '',
        password: '',
    };
  },
  
  methods: {
    tryLogin() {
      services.client.authenticate({
        strategy: 'local',
        email: this.email,
        password: this.password
      }).then((stuffs) => {
        // Logged in
        console.log(stuffs)
      }).catch(e => {
        // Show login page (potentially with `e.message`)
        console.error('Authentication error', e);
      });
    },
    logout() {
      services.client.logout().then(() => {
        // redirect to some other page
      });
    }
  }
};

</script>

<style>

</style>