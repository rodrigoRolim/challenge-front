<template>
  <div class="Acard">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Acard"
}
</script>

<style lang="scss" scoped>
.Acard {
  background-color: #fafafa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
}
</style>