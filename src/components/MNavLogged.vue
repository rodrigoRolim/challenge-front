<template>
  <div class="MNavLogged">
    <a-link class="MNavLogged__Link" name="perfil" path="/dados"/>
    <a-button text="sair" color="secondary" outlined @click="logout"/>
  </div>
</template>

<script>
import AButton from "./AButton.vue";
import ALink from "./ALink";

export default {
  name: "MNavLogged",
  components: { 
    AButton,
    ALink
  },
  methods: {
    logout() {
      this.$router.push("/login")
    }
  }
}
</script>

<style lang="scss" scoped>
.MNavLogged {
  display: flex;
  align-items: center;
}
.MNavLogged__Link {
  margin-right: 1rem;
}
</style>
