module.exports = {
  css: {
    loaderOptions: {
      scss:{
        prependData: () => {
          let __fonts = `@import "@/styles/__fonts.scss";`;
          return __fonts;
        }
      }
    }
  }
}