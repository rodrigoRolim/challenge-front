<template>
  <label class="AInput" :class="{ 'AInput--error': error }">
    <div class="AInput__Labels">
      <span>{{ label }}</span>
      <small v-if="error">*{{error}}</small>
    </div>
    <input 
      :type="type" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      spellcheck="false" 
    />
  </label> 
</template>

<script>
export default {
  name: "AInput",
  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    error: {
      type: String
    },
    modelValue: {
      type: [String, Number]
    }
  },
  emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>
$color-error:  #aa0000;

.AInput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fafafa;
  border-radius: 3rem;
  padding: 0.3rem 1.4rem;
  background-color: #c4c4c454;
  
  & input {
    border: none;
    outline: none;
    margin: 5px 0;
    background-color: transparent;
    color: rgb(83, 83, 83);
    font-family: Roboto;
    font-size: 1rem;
  }
 
}
.AInput--error {
  background-color: #f7b8b8;
  & input {
    color: $color-error
  }
  & .AInput__Labels span {
    color: $color-error
  }
}
.AInput__Labels {
  display: flex;
  & span {
    font-family: Montserrat;
    text-align: start;
    color: dimgray;
    font-size: 0.85rem;
  }
  & small {
    margin-left: auto;
    font-family: Montserrat;
    color: $color-error;
  }
}
</style>