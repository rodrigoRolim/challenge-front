<template>
  <form class="MSignupForm__Form">
    <div class="MSignupForm__Main">
      <div v-show="currentStep === 0">
        <a-input 
          label="nome" 
          class="MSignupForm__Input MSignup--margin"
          v-model="name"
        />
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
            <a-select label="país" class="MSignupForm__Input MSignup__MinorInput" 
              :options="[{ id:0,value:'bunda mole' }, {id:1,value:'idiota'} ,{id:2, value:'fraco' }]" />
            <a-select label="estado" class="MSignupForm__Input MSignup__MinorInput" />
          </div>
          <a-input label="rua" class="MSignupForm__Input MSignup--margin" />
          <div class="MSignup__GroupInput MSignup--margin">
            <a-input label="número" class="MSignupForm__Input MSignup__MinorInput " />
            <a-input label="complemento" class="MSignupForm__Input MSignup__MinorInput " />
          </div>
      </div>
      <div v-show="currentStep === 2">
        <a-input label="senha" class="MSignupForm__Input MSignup--margin" />
        <a-input label="confirmar senha" class="MSignupForm__Input MSignup--margin" />
      </div>
    </div>
    <div class="MSignupForm__Footer">
      <a-button
      class="MSignupForm__Button"
      @click.prevent.stop="prevCurrentStep" 
      text="voltar" 
      color="secondary"
    />
      <a-button
      class="MSignupForm__Button"
      @click.prevent.stop="nextCurrentStep" 
      :text="toggleButtonText" 
      color="primary"
    />
    </div>
  </form>
</template>

<script>
import AButton from './AButton.vue';
import AInput from "./AInput";
import ASelect from "./ASelect";

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
    AInput,
    ASelect,
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
.MSignupForm__Input {
  width: 100%;
}
.MSignupForm__Footer {
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 310px;
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