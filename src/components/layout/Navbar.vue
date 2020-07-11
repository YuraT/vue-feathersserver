<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <a href="" class="brand-logo">Messages test</a>
        <ul class="right">
          <li><router-link :to="{ name: 'Messages' }">Messages</router-link></li>
          <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {
      
    }
  }
}
</script>

<style >

</style>