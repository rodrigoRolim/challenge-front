<template>
  <form class="MLoginForm">
    <div class="MLoginForm__InputsGroup">
      <a-input class="MLoginForm__Input" label="e-mail / cpf / pis"/>
      <a-input class="MLoginForm__Input" label="senha"/>
    </div>
    <div class="MLoginForm__Submit">
      <a-button text="entrar" color="primary" streched rounded/>
    </div>
  </form>
</template>

<script>
import AButton from "./AButton";
import AInput from "./AInput";
export default {
  name: "MLoginForm",
  components: {
    AButton,
    AInput
  }
}
</script>

<style lang="scss" scoped>
.MLoginForm {
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 2rem 0 3rem 0;
}
.MLoginForm__Input {
  margin: 1rem 0
}
.MLoginForm__Submit {
  margin-top: 1rem;
  width: 100%;
}
</style>