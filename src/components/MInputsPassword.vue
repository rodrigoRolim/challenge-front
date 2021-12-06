<template>
  <div class="MInputsPassword">
    <a-input label="senha" class="MInputsPassword__Input  MarginB-2" />
    <a-input label="confirmar senha" class="MInputsPassword__Input  MarginB-2" />
  </div>
</template>

<script>
import AInput from "./AInput";
export default {
  name: "MInputsPassword",
  components: {
    AInput
  }
}
</script>

<style lang="scss" scoped>

</style>
