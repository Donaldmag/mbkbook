module.exports = {
    plugins: {
      'postcss-preset-mantine': {},
      'postcss-simple-vars': {
        variables: {
          'mantine-breakpoint-xs': '30em', //576px
          'mantine-breakpoint-sm': '48em', //768px
          'mantine-breakpoint-md': '62em', //992px
          'mantine-breakpoint-lg': '75em', //1200px
          'mantine-breakpoint-xl': '88em', //1408px
          'mantine-breakpoint-2xl': '90em', //1440px
        },
      },
    },
  };