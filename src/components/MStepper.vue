<template>
  <div class="MStepper">
    <div 
      v-for="(step, i) in steps"
      :key="step"
      class="MStepper__NavItem"
      :class="getClasses(i)"
      @click="$emit('select-step', i)"
    >
      {{ step }}
   </div>
  </div>
</template>

<script>
export default {
  name: "MStepper",
  props: {
    active: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary'].indexOf(value) !== -1;
      }
    },
    currentStep: {
      type: Number
    },
    steps: {
      type: Array
    },
  },
  methods: {
    getClasses(index) {
      return [
        {
          'MStepper__NavItem--primary': this.currentStep === index && this.color === 'primary',
          'MStepper__NavItem--secondary': this.currentStep === index && this.color === 'secondary'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.MStepper {
  display: flex;
  width: 100%;
}
.MStepper__NavItem {
  width: auto;
  flex: 1;
  padding: 0.5rem 0rem;
  &:first-child {
    border-top-left-radius: inherit;
  }
  &:last-child {
    border-top-right-radius: inherit;
  }
  &:hover {
    cursor: pointer;
  }
}
.MStepper__NavItem--primary {
  background-color: #00308F;
  color: #fafafa;
}
.MStepper__NavItem--secondary {
  background-color: #72A0C1;
  color: #fafafa
}
</style>