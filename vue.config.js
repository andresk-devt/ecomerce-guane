module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
                        @import "./src/assets/css/styles.scss";
                    `
        }
      }
    }
  };