<template>
  <div class="TProfile">
    <o-profile @open-editer="openEditer"/>
    <o-profile-edit :open-modal="openModal" :edit-to="beingUpdated" @close-modal="openModal = $event"/>
  </div>
</template>

<script>
import OProfile from "./OProfile";
import OProfileEdit from "./OProfileEdit";

export default {
  name: "TProfile",
  data() {
    return {
      beingUpdated: "",
      openModal: false
    }
  },
  components: {
    OProfile,
    OProfileEdit
  },
  methods: {
    openEditer(beingUpdated) {
      this.beingUpdated = beingUpdated;
      this.openModal = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.TProfile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  width: 940px;
}
</style>