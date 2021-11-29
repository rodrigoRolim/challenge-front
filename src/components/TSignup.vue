<template>
  <div class="TSignup">
    <o-signup-card />
  </div>
</template>

<script>
import OSignupCard from "./OSignupCard";

export default {
  components: { OSignupCard },
  name: "TSignup"
}
</script>

<style>
.TSignup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 57px);
  margin-top: 3rem;
}
</style>