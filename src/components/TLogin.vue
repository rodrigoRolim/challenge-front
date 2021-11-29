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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 57px);
  margin-top: 3rem;
}
</style>