<template>
  <div class="MNavUnlogged">
    <a-button 
      color="primary" 
      outlined
      text="login" 
      v-if="isSignupPage" 
      
      @click="redirectToLogin" 
    />
    <a-button 
      class="MNavbar__ButtonSignup"
      color="success" 
      text="cadastre-se" 
      v-if="isLoginPage"

      @click="redirectToSignup" 
    />
  </div>
</template>

<script>
import AButton from "./AButton";

export default {
  name: "MNavUnlogged",
  components: {
    AButton
  },
  computed: {
    isSignupPage() {
      return this.$route.name == "Signup";
    },
    isLoginPage() {
      return this.$route.name == "Login";
    }
  },
  methods: {
    redirectToLogin() {
      this.$router.push("/login");
    },
    redirectToSignup() {
      this.$router.push("/cadastro");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>