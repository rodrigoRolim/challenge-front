export const required = {
  error: "",
  $: function(value) {
    if (!value) {
      this.error = "campo obrigatório";
      return this;
    }
    this.error = "";
    return this;
  }
}