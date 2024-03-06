// vite.config.js
export default {
    // 配置选项

    esbuild: {
        supported: {
          'top-level-await': true, //browsers can handle top-level-await features
        },
      }

  }