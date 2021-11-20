<template>
  <div class="TLogin">
    <o-login-card />
  </div>
</template>

<script>
import OLoginCard from "./OLoginCard";
export default {
  name: "TLogin",
  components: {
    OLoginCard
  }
}
</script>

<style lang="scss" scoped>
.TLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>