<template>
  <component class="AText" :is="tag">{{ text }}</component>
</template>

<script>
export default {
  name: "AText",
  props: {
    tag: {
      type: String,
      default: "p"
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>