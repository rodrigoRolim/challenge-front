<template>
  <a-modal class="OProfileEdit" :open="openModal">
    <form class="OProfileEdit__Form">
      <h1 class="MarginB-4">{{ title }}</h1>
      <div class="OProfileEdit__Address" v-if="editTo === 'user'">
        <m-inputs-address />
      </div>
      <div class="OProfileEdit__Password" v-if="editTo === 'password'">
        <m-inputs-password />
      </div>
      <div class="OProfileEdit__User" v-if="editTo === 'address'">
        <m-inputs-user />
      </div>
      <div class="OProfileEdit__Actions">
        <a-button text="cancelar" color="secondary" @click="closeModal"/>
        <a-button text="confirmar" color="primary"/>
      </div>
    </form>
  </a-modal>
</template>

<script>
import AButton from "./AButton";
import AModal from "./AModal";
import MInputsAddress from "./MInputsAddress";
import MInputsPassword from "./MInputsPassword";
import MInputsUser from "./MInputsUser";

export default {
  name: "OProfileEdit",
  props: {
    editTo: {
      type: String,
      validator(value) {
        return ['user', 'address', 'password', ""].indexOf(value) !== -1
      }
    },
    openModal: {
      type: Boolean
    }
  },
  data() {
    return {

    }
  },
  computed: {
    title() {
      if (this.editTo === 'user') return "Editar Usuário";
      if (this.editTo === 'address') return "Editar Endereço";
      if (this.editTo === 'password') return "Editar Senha";
      return "";
    }
  },
  components: {
    AButton,
    AModal,
    MInputsAddress,
    MInputsPassword,
    MInputsUser
  },
  methods: {
    closeModal() {
      this.$emit("close-modal", false);
    }
  }
}
</script>

<style lang="scss" scoped>
.OProfileEdit__Form {
  background-color: #fafafa;
  max-width: 940px;
  min-width: 680px;
  padding: 1rem 2rem;
  border-radius: 1rem;
  & h1 {
    text-align: center;
    font-size: 18px;
    line-height: 22px;
  }
}
.OProfileEdit__Actions {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
}
</style>