<template>
  <form class="MSignupForm__Form" >
    <div class="MSignupForm__Main">
      <div v-show="currentStep === 0">
        <m-inputs-user />
      </div>
      <div v-show="currentStep === 1">
        <m-inputs-address />
      </div>
      <div v-show="currentStep === 2">
        <m-inputs-password />
      </div>
    </div>
    <div class="MSignupForm__Footer">
      <a-button
        class="MSignupForm__Button"
        @click.prevent="prevCurrentStep"
        :disabled="currentStep === 0"
        text="voltar" 
        color="secondary"
      />
      <a-button
        class="MSignupForm__Button"
        @click.prevent="nextCurrentStep" 
        :text="toggleButtonText" 
        color="primary"
      />
    </div>
  </form>
</template>

<script>
import AButton from "./AButton.vue";
import MInputsAddress from "./MInputsAddress";
import MInputsPassword from "./MInputsPassword";
import MInputsUser from "./MInputsUser";

export default {
  name: "MSignupForm",
  props: {
    currentStep: {
      type: Number
    },
    stepsNumber: {
      type: Number
    }
  },

  data() {
    return {
      name: ''
    }
  },
  computed: {
    toggleButtonText() {
      return (this.currentStep !== this.stepsNumber - 1) ? 'continuar' : 'confirmar';
    }
  },
  components: {
    AButton,
    MInputsAddress,
    MInputsPassword,
    MInputsUser,
  },
  methods: {
    nextCurrentStep() {
      this.$emit("next-step");
      
    },
    prevCurrentStep() {
      this.$emit("prev-step");
    }
  }
}
</script>

<style lang="scss" scoped>

.MSignupForm__Form {
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 1rem 0;
}
.MSignupForm__Main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
}

.MSignupForm__Footer {
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 310px;
}

</style>