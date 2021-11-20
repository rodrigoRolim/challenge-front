<template>
  <div class="Login">
    <t-login />
  </div>
</template>

<script>
import TLogin from "@/components/TLogin";
export default {
  name: "Login",
  components: {
    TLogin
  }
}
</script>

<style lang="scss" scoped>
.Login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 1rem);
}
</style>