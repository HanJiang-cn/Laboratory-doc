/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'

// 引入自定义组件
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import update from "./components/update.vue"

import MyLayout from './components/MyLayout.vue'

import './style/index.css'

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

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

  // 使用中等放大镜插件
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
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