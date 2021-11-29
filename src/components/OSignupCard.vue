<template>
  <a-card class="OSignupForm">
    <m-stepper 
      :steps="steps" 
      color="primary" 
      class="OSignup__Stepper" 
      :currentStep="currentStep"
      @select-step="selectCurrentStep" 
    />
    <m-signup-form
      :stepsNumber="steps.length"
      :currentStep="currentStep"
      @next-step="nextCurrentStep"
      @prev-step="prevCurrentStep"
    />
  </a-card>  
</template>

<script>
import ACard from "./ACard";
import MSignupForm from "./MSignupForm";
import MStepper from "./MStepper";

export default {
  name: "OSignupCard",
  data() {
    return {
      currentStep: 0,
      steps: ['usuário', 'endereço', 'senha']
    }
  },

  components: {
    ACard,
    MSignupForm,
    MStepper
  },
  methods: {
    selectCurrentStep(i) {
      this.currentStep = i;
    },
    nextCurrentStep() {
      if (this.currentStep === this.steps.length - 1) return;
      this.currentStep += 1;
    },
    prevCurrentStep() {
      if (this.currentStep === 0) return;
      this.currentStep -=1;
    }
  },
}
</script>

<style lang="scss" scoped>
.OSignupForm {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 940px;
  min-height: 80vh;
}
.OSignup__Stepper {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

</style>