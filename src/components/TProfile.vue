<template>
  <div class="TProfile">
    <o-user-datas-card />
    <o-user-address-card />
    <o-user-password-card />
  </div>
</template>

<script>
import OUserDatasCard from "./OUserDatasCard";
import OUserAddressCard from "./OUserAddressCard";
import OUserPasswordCard from "./OUserPasswordCard";
export default {
  name: "TProfile",
  components: {
    OUserAddressCard,
    OUserDatasCard,
    OUserPasswordCard
  }
}
</script>

<style lang="scss" scoped>

</style>