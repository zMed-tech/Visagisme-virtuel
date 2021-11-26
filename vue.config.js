module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/variables.scss";
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');`,
      },
    },
  },
};
