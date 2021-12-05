module.exports = {
  css: {
    loaderOptions: {
      scss:{
        prependData: () => {
          let __fonts = `@import "@/styles/__fonts.scss";`;
          let __design = `@import "@/styles/__design.scss";`;
          return __fonts + __design;
        }
      }
    }
  }
}