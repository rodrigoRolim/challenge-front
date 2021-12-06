<template>
  <div class="ALink">
    <router-link :to="path">{{ name }}</router-link>
  </div>
</template>

<script>
export default {
  name: "ALink",
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default() { return "#" }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: 450;
  color: #535d66;
  text-decoration: none;
  font-family: Montserrat;
}
</style>