<template>
  <div class="OUserAddress">
    <div class="OUserAddress__Log">
      <m-info icon="map-marked-alt" text="vp 18 quadra 32, nº 13, cohab 2, cep 65700-000"/>
    </div>
    <div class="OUserAddress__City">
      <m-info icon="city" text="Bacabal-ma"/>
    </div>
  </div>
</template>

<script>
import MInfo from "./MInfo";

export default {
  name: "OUserAddress",
  components: {
    MInfo
  }
}
</script>

<style lang="scss" scoped>
.OUserAddressCard {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & div {
    text-align: start;
  }
}
.OUserAddress__Log,
.OUserAddress__City {
  margin-bottom: 1rem;
}
</style>