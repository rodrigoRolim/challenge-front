<template>
  <nav class="MNavbar">
    <a-button v-if="isSignupPage" text="login" @click="redirectToLogin" color="primary" outlined/>
    <a-button v-if="isLoginPage" text="cadastre-se" color="success" @click="redirectToSignup" class="MNavbar__ButtonSignup"/>
  </nav>
</template>

<script>
import AButton from "./AButton";

export default {
  name: "MNavbar",
  components: {
    AButton
  },
  computed: {
    isSignupPage() {
      return this.$route.name === "Signup";
    },
    isLoginPage() {
      return this.$route.name === "Login";
    }
  },
  methods: {
    redirectToLogin() {
      this.$router.push("/login")
    },
    redirectToSignup() {
      this.$router.push("/cadastro")
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
.MNavbar {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  min-height: 40px;
}

</style>