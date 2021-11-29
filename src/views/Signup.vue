<template>
  <div class="Signup">
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
.Signup {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
