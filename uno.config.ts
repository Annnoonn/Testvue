import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      // primary: {
      //   400: '#6378ff',
      //   DEFAULT: '#5468FF',
      //   600: '#475fff',
      // },

      // white: {
      //   300: '#7C7A85',
      //   400: '#B5B2BC',
      //   DEFAULT: '#EEEEF0',
      // },
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        title: { name: 'PolySans', provider: 'none' },
        mono: { name: 'JetBrains Mono', provider: 'google' },
        content: { name: 'Graphik', provider: 'none' },
        sans: {
          name: 'Poppins',
          weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    }),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
})