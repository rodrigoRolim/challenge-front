<template>
  <label class="ASelect">
    <div class="ASelect__Labels">
      <span>{{ label }}</span>
      <small v-if="error">*{{error}}</small>
    </div>
    <select class="ASelect__Select">
      <option
        v-for="option of options"
        :key="option.id"
      >
        <span>{{ option.value }}</span>
      </option>

    </select>
  </label>
</template>

<script>
export default {
  name: "ASelect",
  props: {
    error: {
      type: String
    },
    label: {
      type: String
    },
    options: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
$color-error:  #aa0000;

.ASelect {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fafafa;
  border-radius: 3rem;
  padding: 0.2rem 1.4rem;
  background-color: #c4c4c454;

  & select {
    border: none;
    outline: none;
    margin: 5px 0;
    background-color: transparent;
    color: rgb(83, 83, 83);
    font-family: Roboto;
    font-size: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    & option {
      padding: 30px;
      line-height: 30px;
      min-height: 2rem;
    }
  }
}
.ASelect--error {
  background-color: #f7b8b8;
  & select {
    color: $color-error
  }
  & .ASelect__Labels span {
    color: $color-error
  }
}
.ASelect__Labels {
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