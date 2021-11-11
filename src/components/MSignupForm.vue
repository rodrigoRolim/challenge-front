<template>
  <a-card class="MSignupForm">
    <m-stepper 
      :steps="steps" 
      color="primary" 
      class="MSignup__Stepper" 
      :currentStep="currentStep"
      @select-step="updateCurrentStep" 
    />
    <form class="MSignupForm__Form">
      <div v-show="currentStep === 0">
        <a-input label="nome" class="MSignupForm__Input MSignup--margin" />
        <a-input label="e-mail" class="MSignupForm__Input MSignup--margin" />
        <a-input label="cpf" class="MSignupForm__Input MSignup--margin" />
        <a-input label="pis" class="MSignupForm__Input MSignup--margin" />
     </div>
     <div v-show="currentStep === 1">
        <a-input 
          label="cep" 
          class="MSignupForm__Input MSignup__MinorInput MSignup--margin" 
        />
        <div class="MSignup__GroupInput MSignup--margin">
          <a-input label="país" class="MSignupForm__Input MSignup__MinorInput " />
          <a-input label="estado" class="MSignupForm__Input MSignup__MinorInput " />
        </div>
        <a-input label="rua" class="MSignupForm__Input MSignup--margin" />
        <div class="MSignup__GroupInput MSignup--margin">
          <a-input label="número" class="MSignupForm__Input MSignup__MinorInput " />
          <a-input label="complemento" class="MSignupForm__Input MSignup__MinorInput " />
        </div>
     </div>
     <div v-show="currentStep === 2">
        <a-input label="senha" class="MSignupForm__Input MSignup--margin" />
     </div>
     
    </form>
  </a-card>  
</template>

<script>
import ACard from "./ACard";
import AInput from "./AInput";
import MStepper from "./MStepper";
export default {
  name: "OSignupForm",
  data() {
    return {
      currentStep: 0,
      steps: ['usuário', 'endereço', 'senha']
    }
  },
  components: {
    ACard,
    AInput,
    MStepper
  },
  methods: {
    updateCurrentStep(i) {
      this.currentStep = i;
    }
  }
}
</script>

<style lang="scss" scoped>
.MSignupForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 940px;
}
.MSignup__Stepper {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.MSignupForm__Form {
  width: 600px;
  padding: 1rem 0;
}
.MSignupForm__Input {
  width: 100%;
}
.MSignup__MinorInput {
  max-width: 290px;
}

.MSignup__GroupInput {
  display: flex;
  justify-content: space-between;
}
.MSignup--margin {
  margin: 1rem 0;
}
</style>