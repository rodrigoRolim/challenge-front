<template>
  <div class="THome">
    <h1>Olá {{ user }}</h1>
  </div>
</template>

<script>
export default {
  name: "THome",
  props: {
    user: {
      type: String,
      default() { return "Fulano" }
    } 
  }
}
</script>

<style lang="scss" scoped>
.THome {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 57px);
  margin-top: 3rem;;
}
</style>