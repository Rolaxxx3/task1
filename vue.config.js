module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/styles/_variables.scss";
          @import "~@/assets/styles/_mixins.scss";
          @import "~@/assets/styles/_element-overwrite.scss";
        `,
      },
    },
  },
}
