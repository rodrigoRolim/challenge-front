<template>
  <div class="TProfile">
    <o-profile />
  </div>
</template>

<script>
import OProfile from "./OProfile";

export default {
  name: "TProfile",
  components: {
    OProfile
  }
}
</script>

<style lang="scss" scoped>
.TProfile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
}
</style>