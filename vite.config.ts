import { fileURLToPath, URL } from 'node:url'
// 配置mockjs
import { viteMockServe } from 'vite-plugin-mock'

import { defineConfig } from 'vite'
// element-plus 的自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// icon自动注册
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './src/mock',
      supportTs: true,
      watchFiles: true
    }),
    AutoImport({
      // 配置自动导入所用到的vue3,vue-router的api
      imports: ['vue', 'vue-router'],
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      eslintrc: { enabled: true }
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        additionalData: '@import "@/styles/mixin.scss";'
      }
    }
  },
  server: {
    host: true,
    port: 8888,
    proxy: {
      '/api': 'http://localhost:8888'
    }
  }
})
