export const min = {
  error: "",
  $: function(value, tam) {
    if (value.length < tam) {
      this.error = "tamanho mínimo: " + tam;
      return this; 
    }
    this.error = "";
    return this;
  }
}