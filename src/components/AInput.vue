<template>

  <label class="Ainput" :class="{ 'Ainput--error': error }">
    <div class="Ainput__Labels">
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

.Ainput {
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
.Ainput--error {
  background-color: #f7b8b8;
  & input {
    color: $color-error
  }
  & .Ainput__Labels span {
    color: $color-error
  }
}
.Ainput__Labels {
  display: flex;
  & span {
    font-family: Montserrat;
    text-align: start;
    color: dimgray;
    font-size: 0.85rem;
  }
  & small {
    margin-left: 0.9rem;
    font-family: Montserrat;
    color: $color-error;
  }
}
</style>