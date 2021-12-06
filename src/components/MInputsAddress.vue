<template>
  <div class="MInputsAddress">
    <a-input 
      label="cep" 
      class="MInputsAddress__Input MInputsAddress__MinorInput  MarginB-2" 
    />
    <div class="MInputsAddress__GroupInput">
      <a-select 
        label="país" 
        class="MInputsAddress__Input MInputsAddress__MinorInput  MarginB-2" 
      />
      <a-select 
        label="estado" 
        class="MInputsAddress__Input MInputsAddress__MinorInput  MarginB-2" 
      />
    </div>
    <a-input 
      label="rua" 
      class="MInputsAddress__Input  MarginB-2" 
    />
    <div class="MInputsAddress__GroupInput">
      <a-input 
        label="número" 
        class="MInputsAddress__Input MInputsAddress__MinorInput  MarginB-2" 
      />
      <a-input 
        label="complemento" 
        class="MInputsAddress__Input MInputsAddress__MinorInput  MarginB-2" 
      />
    </div>
  </div>
</template>

<script>
import AInput from "./AInput";
import ASelect from "./ASelect";

export default {
  name: "MInputsAddress",
  components: {
    AInput,
    ASelect
  }
}
</script>

<style lang="scss" scoped>
.MInputsAddress__Input {
  width: 100%;
}
.MInputsAddress__GroupInput {
  display: flex;
  justify-content: space-between;
}
.MInputsAddress__MinorInput {
  max-width: 290px;
}
</style>