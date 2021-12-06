<template>
  <div class="OUserPassword">
    <m-info icon="key" text="szpvnp77" />
    <a-button 
      class="OUserPassword__Button" 
      text="mudar senha" 
      color="brand" 
      x-small
      @click="updatePassword"
    />
  </div>
</template>

<script>
import AButton from "./AButton";
import MInfo from "./MInfo";

export default {
  name: "OUserPassword",
  components: {
    AButton,
    MInfo
  },
  methods: {
    updatePassword() {
      this.$emit('open-editer-password');
    }
  }
}
</script>

<style lang="scss" scoped>
.OUserPassword {
  display: flex;
  align-items: center;
}
.OUserPassword__Button {
  margin-left: 1rem;
}
</style>