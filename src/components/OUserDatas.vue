<template>
  <div class="OUserDatas">
    <div class="OUserDatas__User">
      <m-info icon="user" text="rodrigo rolim veras" />  
    </div>
    <div class="OUserDatas__Envelope">
      <m-info icon="envelope" text="rodrigorolim@gmail.com"/>
    </div>
    <div class="OUserDatas__IdCard">
      <m-info icon="id-card" text="054.467.373-50"/>
    </div>
    <div class="OUserDatas__Pis">
      <m-info icon="book" text="00991/110"/>
    </div>
  </div>
</template>

<script>
import MInfo from "./MInfo";

export default {
  name: "OUserDatas",
  components: {
    MInfo
  }
}
</script>

<style lang="scss" scoped>
.OUserDatasCard {
  width: 940px;
  padding: 0rem 1rem;
  text-align: start;
}
.OUserDatas__User,
.OUserDatas__Envelope,
.OUserDatas__IdCard,
.OUserDatas__Pis {
  width: 100%;
  margin-bottom: 1rem;
}
</style>