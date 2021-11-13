<template>
  <button 
    class="AButton"
    :class="getClasses"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    color: {
      type: String,
      validator: function(value) {
        return ['primary', 'secondary'].indexOf(value) !== -1
      }
    },
    text: {
      type: String
    },
    small: {
      type: Boolean
    },
    xSmall: {
      type: Boolean
    },
    big: {
      type: Boolean
    }
  },
  computed: {
    getClasses(){
      return [
        {
          'AButton--xSmall': this.xSmall,
          'AButton--small': this.small,
          'AButton--big': this.big,
          'AButton--default': !this.xSmall && !this.small && !this.big
        },
        'AButton--' + this.color
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.AButton {
  background-color: white;
  border: none;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  };
  &:active {
    opacity: 0.8;
  }
}
.AButton--default {
  padding: 0.6rem 2.5rem;
}
.AButton--primary {
  background-color: #00308F;
  color: #fafafa;
}
.AButton--secondary {
  background-color: firebrick;
  color: #fafafa
}
</style>