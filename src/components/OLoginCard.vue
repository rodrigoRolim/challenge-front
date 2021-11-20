<template>
  <a-card class="OLoginCard">
    <h1>Olá visitante !</h1>
    <m-login-form />
    <div class="OLoginCard__Line"></div>
    <div class="OLoginCard__SignupRedirect">
      <h2>Não possui uma conta ainda?</h2>
      <a-button text="cadastre-se" color="success" x-small @click="redirecToSignup"/>
    </div>
  </a-card>
</template>

<script>
import AButton from "./AButton";
import ACard from "./ACard";
import MLoginForm from "./MLoginForm"
export default {
  name: "OLoginCard",
  components: {
    AButton,
    ACard,
    MLoginForm
  },
  methods: {
    redirecToSignup() {
      this.$router.push("/cadastro")
    }
  }
}
</script>

<style lang="scss" scoped>
.OLoginCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 640px;
  min-height: 20vh;
  padding: 0 1rem;
  & h1 {
    font-family: Quicksand;
    font-size: 1.8rem;
    line-height: 22px;
    margin-top: 2rem;
    color: rgb(83, 83, 83)
  }
}
.OLoginCard__SignupRedirect {
  width: 95%;
  border-top: 1px solid rgb(206, 203, 203);
  padding: 1rem 1rem;
  margin: 0 2rem;
  h2 {
    font-family: Quicksand;
    font-size: 1rem;
    line-height: 18px;
    color: rgb(83, 83, 83);
    margin-bottom: 0.8rem;
  }
}
</style>