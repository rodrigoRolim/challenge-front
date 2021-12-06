<template>
  <div class="AModal" v-if="open">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AModal",
  props: {
    open: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.AModal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>