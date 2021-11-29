<template>
  <div class="MInfo">
    <a-icon class="MInfo__Icon" :class="getColors" :icon="icon" :color="colorIcon" />
    <a-text class="MInfo__Text" tag="span" :text="text" :color="colorText" />
  </div>
</template>

<script>

import AText from "./AText";

export default {
  name: "MInfo",
  props: {
    colorIcon: {
      type: String,
      validator: function(value) {
        return ['primary', 'secondary', 'success', 'default'].indexOf(value) !== -1
      },
      default: 'default'
    },
    colorText: {
      type: String,
      validator: function(value) {
        return ['primary', 'secondary', 'success'].indexOf(value) !== -1
      }
    },
    icon: {
      type: [Array, String],
      required: true
    },
    text: {
      type: String,
      required: true,
      default: () => ""
    }
  },
  computed: {
    getColors() {
      return 'MInfo__Icon--' + this.colorIcon;
    }
  },
  components: {
    AText
  }
}
</script>

<style lang="scss" scoped>
.MInfo {
  display: flex;
}
.MInfo__Icon {
  min-width: 30px;
}
.MInfo__Text {
  margin-left: 1rem
}
.MInfo__Icon--default {
  color: gray;
}
.MInfo__Icon--primary {
  color: #00308F;
}
.MInfo__Icon--secondary {
  color: firebrick;
}
.MInfo__Icon--success {
  color: #5fc95b;
}
</style>