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
  background-color: #faf9f9;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
}
</style>