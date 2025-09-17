/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'

// 引入自定义组件
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import update from "./components/update.vue"

import MyLayout from './components/MyLayout.vue'

import { watch } from 'vue'
import './style/index.css'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: MyLayout,

  enhanceApp({app , router }) {
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    app.component('HomeUnderline' , HomeUnderline)
    // 使用<Linkcard url="你的网址" title="标题" description="描述" logo="logo图片路径"/>
    app.component('Update' , update)
    // 使用<Update />

    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }

  },
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}