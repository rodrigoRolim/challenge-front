<template>
  <a-card class="OProfile">
    <div class="OProfile__UserDatas">
      <m-user-datas-card />
    </div>
    <div class="OProfile__Address">
      <m-user-address-card />
    </div>
    <div class="OProfile__Password">
      <m-user-password-card />
    </div>
  </a-card>
</template>

<script>
import ACard from "./ACard";
import MUserAddressCard from "./MUserAddressCard";
import MUserDatasCard from "./MUserDatasCard";
import MUserPasswordCard from "./MUserPasswordCard";

export default {
  name: "OProfile",
  components: {
    ACard,
    MUserAddressCard,
    MUserDatasCard,
    MUserPasswordCard
  }
}
</script>

<style lang="scss" scoped>
.OProfile__Password {
  width: 100%;
}
</style>