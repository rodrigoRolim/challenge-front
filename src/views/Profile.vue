<template>
  <div class="Profile">
    <t-profile />
  </div>
</template>

<script>
import TProfile from "@/components/TProfile"
export default {
  name: "Profile",
  components: {
    TProfile
  }
}
</script>

<style lang="scss" scoped>
.Profile {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>