<template>
  <div class="Ainput">
    <label class="Ainput__Label">
      <span>{{ label }}</span>
      <input :type="type" />
    </label> 
  </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.Ainput__Label {
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
    margin-top: 5px;
    background-color: transparent;
    color: rgb(83, 83, 83);
    font-size: 1rem;
  }
  & span {
    text-align: start;
    color: dimgray
  }
}
</style>