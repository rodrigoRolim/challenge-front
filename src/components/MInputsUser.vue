<template>
  <div class="MInputsUser">
    <a-input 
      label="nome" 
      class="MInputsUser__Input  MarginB-2"
      v-model="name"
    />
    <a-input label="e-mail" class="MInputsUser__Input  MarginB-2" />
    <a-input label="cpf" class="MInputsUser__Input  MarginB-2" />
    <a-input label="pis" class="MInputsUser__Input  MarginB-2" />
  </div>
</template>

<script>
import AInput from "./AInput";

export default {
  name: "MInputsUser",
  components: {
    AInput
  }
}
</script>

<style lang="scss" scoped>
.MInputsUser {
  width: 100%;
}
</style>