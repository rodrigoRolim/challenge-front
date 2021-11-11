<template>
  <div class="TSignup">
    <m-signup-form />
  </div>
</template>

<script>
import MSignupForm from "./MSignupForm";

export default {
  components: { MSignupForm },
  name: "TSignup"
}
</script>

<style>
.TSignup {
  display: flex;
  justify-content: center;
}
</style>