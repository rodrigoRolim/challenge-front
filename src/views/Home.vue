<template>
  <div class="Login">
    <t-signup />
  </div>
</template>

<script>
// @ is an alias to /src
import TSignup from "@/components/TSignup";
export default {
  name: 'Home',
  components: {
    TSignup
  }
}
</script>

<style lang="scss" scoped>
.Login {
  padding: 4rem 1rem 1rem 0rem;
  height: 100vh;
}
</style>
