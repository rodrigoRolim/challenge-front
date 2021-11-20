<template>
  <div class="MNavLogged">
    <a-button text="sair" color="secondary" outlined @click="logout"/>
  </div>
</template>

<script>
import AButton from './AButton.vue'
export default {
  name: "MNavLogged",
  components: { AButton },
  methods: {
    logout() {
      this.$router.push("/login")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
