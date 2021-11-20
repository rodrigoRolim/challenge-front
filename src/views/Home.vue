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

</style>