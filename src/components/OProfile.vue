<template>
  <a-card class="OProfile">
    <div class="OProfile__Header">
      <h1>Dados do Usuário</h1>
    </div>
    <div class="OProfile__Main">  
      <div class="OProfile__UserDatas">
        <a-icon 
          class="OProfile__EditUser" 
          icon="pencil-alt" 
          :style="{ color: 'gray' }"
          @click="tryUpdate('user')"
        />
        <o-user-datas />
      </div>
      <div class="OProfile__Address">
        <a-icon 
          class="OProfile__EditAddres" 
          icon="pencil-alt" 
          :style="{ color: 'gray' }"
          @click="tryUpdate('address')"
        />
        <o-user-address />
      </div>
      <div class="OProfile__Password">
        <o-user-password @open-editer-password="tryUpdate('password')" />
      </div>
    </div>
  </a-card>
</template>

<script>
import ACard from "./ACard";
import OUserAddress from "./OUserAddress";
import OUserDatas from "./OUserDatas";
import OUserPassword from "./OUserPassword";

export default {
  name: "OProfile",
  components: {
    ACard,
    OUserAddress,
    OUserDatas,
    OUserPassword
  },
  methods: {
    tryUpdate(beingUpdated) {
      this.$emit('open-editer', beingUpdated);
    }
  }
}
</script>

<style lang="scss" scoped>
.OProfile {
  width: 100%;
  padding: 1rem 2rem;
}
.OProfile__Header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  & h1 {
    font-size: 1.2rem;
    line-height: 22px;
    margin: 0 auto;
  }
}
.OProfile__UserDatas {
  width: 100%;
  display: flex;
  flex-direction: column;
  & .OProfile__EditUser {
    align-self: flex-end;
    cursor: pointer;
  }
}
.OProfile__Address {
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgray;
  margin-top: 2rem;
  padding-top: 2rem;
  & .OProfile__EditAddres {
    align-self: flex-end;
    cursor: pointer;
  }
}
.OProfile__Password {
  padding-top: 2rem;
}
</style>
