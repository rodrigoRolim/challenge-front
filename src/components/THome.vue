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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>