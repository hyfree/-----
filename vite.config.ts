// vite.config.js
export default {
    // 配置选项
    optimizeDeps:{
      exclude:['@marktext/muya']
    },
    esbuild: {
        supported: {
          'top-level-await': true, //browsers can handle top-level-await features
        },
      }

  }