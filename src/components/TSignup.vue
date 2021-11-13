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
  justify-content: center;
}
</style>