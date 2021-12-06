<template>
  <form class="MLoginForm">
    <div class="MLoginForm__InputsGroup">
      <a-input 
        class="MLoginForm__Input" 
        label="e-mail / cpf / pis"
        v-model="user"
        :error="userError"
      />
      <a-input 
        class="MLoginForm__Input" 
        label="senha"
        v-model="password"
        :error="passwordError"
      />
    </div>
    <div class="MLoginForm__Submit">
      <a-button 
        text="entrar" 
        color="primary" 
        streched 
        rounded
        @click.prevent="login"
      />
    </div>
  </form>
</template>

<script>
import AButton from "./AButton";
import AInput from "./AInput";
import { required } from "../rules/required";
import { min } from "../rules/min";

export default {
  name: "MLoginForm",
  data() {
    return {
      user: "",
      userError: "",
      password: "",
      passwordError: ""
    }
  },
  components: {
    AButton,
    AInput
  },
  watch: {
    user(value) {
      this.userError = required.$(value).error;
    },
    password(value) {
      this.passwordError = min.$(value, 8).error;
    }
  },
  methods: {
    isAllValidate() {

      this.userError = required.$(this.user).error;
      this.passwordError = min.$(this.password, 8).error;

      return !this.userError && !this.passwordError;
    },
    login() {
      if (this.isAllValidate()) {
        this.$router.push("/ola-usuario");
      }
    }
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