<template>
  <nav class="ONavbar">
    <component v-bind:is="getNavigationPainel" />
  </nav>
</template>

<script>
import MNavLogged from "./MNavLogged";
import MNavUnlogged from "./MNavUnlogged.vue";
export default {
  name: "ONavbar",
  components: {
    MNavLogged,
    MNavUnlogged
  },
  computed: {
    getNavigationPainel() {
      const isSignPages = this.isSignPages();
      
      return isSignPages ? 'MNavUnlogged' : 'MNavLogged';
    }
  },
  methods: {
    isSignPages() {
      return this.$route.name == "Login" || this.$route.name == "Signup";
    }
  }
}
</script>

<style scoped>
.ONavbar {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  min-height: 40px;
}
</style>
