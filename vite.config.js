import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true, 
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'), 
      name: 'HuispediaDesignSystem',
      fileName: (format) => `huispedia-design-system.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/sass/main.scss";`
  //     }
  //   }
  // },
  resolve: {
      alias: {
        fonts: resolve(__dirname, './public/fonts'),
        '@': resolve(__dirname, './src')
      },
  }
});
