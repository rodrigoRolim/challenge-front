<template>
  <div class="MUserInputs">
    <a-input 
      label="nome" 
      class="MUserInputs__Input  mb-2"
      v-model="name"
    />
    <a-input label="e-mail" class="MUserInputs__Input  mb-2" />
    <a-input label="cpf" class="MUserInputs__Input  mb-2" />
    <a-input label="pis" class="MUserInputs__Input  mb-2" />
  </div>
</template>

<script>
export default {
  name: "MUserInputs"
}
</script>

<style lang="scss" scoped>
.MUserInputs {
  width: 100%;
}
</style>