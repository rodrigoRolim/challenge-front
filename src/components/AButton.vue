<template>
  <button 
    class="AButton"
    :class="getClasses"
    @click="click"
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
        return ['primary', 'secondary', 'success'].indexOf(value) !== -1
      }
    },
    big: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    text: {
      type: String
    },
    rounded: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    streched: {
      type: Boolean
    },
    xSmall: {
      type: Boolean
    }
  },
  emits: ['click'],
  computed: {
    getClasses(){
      return [
        {
          'AButton--xSmall': this.xSmall,
          'AButton--small': this.small,
          'AButton--big': this.big,
          'AButton--default': !this.xSmall && !this.small && !this.big,
          'AButton--rounded': this.rounded,
          'AButton--streched': this.streched,
          'AButton--disabled': this.disabled,
          'AButton--outlined': this.outlined
        },
        'AButton--' + this.color
      ]
    }
  },
  methods: {
    click(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style lang="scss" scoped>
$bcolor: #fafafa;
.AButton {
  background-color: white;
  border: none;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.4rem;
  &:hover {
    cursor: pointer;
  };
  &:active {
    opacity: 0.8;
  }
}
.AButton--rounded {
  border-radius: 2rem;
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
.AButton--success {
  background-color: #5fc95b;
  color: #fafafa
}
.AButton--streched {
  width: 100%;
}
.AButton--xSmall {
  padding: 0.3rem 1.5rem;
  font-size: 0.9rem;
}
.AButton--disabled {
  background-color: rgba(0, 0, 0, 0.096);
  color: rgb(165, 161, 161);
  &:hover {
    cursor: not-allowed
  }
}
.AButton--outlined {
  background-color: #fafafa;
  &.AButton--primary {
    border: 1px solid  #00308F;
    color: #00308F;
  }
  &.AButton--secondary {
    border: 1px solid firebrick;
    color: firebrick
  }
  &.AButton--success {
    border: 1px solid #5fc95b;
    color: #5fc95b
  }
}
</style>