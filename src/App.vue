<template>
  <div class="App__Navbar">
    <o-navbar />
  </div>
  <div class="App__Main">
    <router-view />
  </div>
</template>
<script>
import ONavbar from "@/components/ONavbar";

export default {
  name: "App",
  components: {
    ONavbar
  }
}
</script>>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
  overflow: auto;
}

.App__Navbar {
  position: fixed;
  width: 100%;
  padding: 0.5rem 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #fafafa;
}
.App__Main {
  min-height: 100vh;
}
</style>
