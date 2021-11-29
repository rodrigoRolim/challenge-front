<template>
  <div class="Home">
   <t-home :user="user" />
  </div>
</template>

<script>
import THome from "@/components/THome";
export default {
  name: "Home",
  data() {
    return {
      user: "Rodrigo"
    }
  },
  components: {
    THome
  }
}
</script>

<style lang="scss" scoped>
.Home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 1rem);
}
</style>