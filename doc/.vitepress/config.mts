import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  cleanUrls: true, //开启纯净链接 //
  title: "大学生科技创新实验室文档",
  description: "招新文档",
  lastUpdated: true,

  //fav图标
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '部门简介', items: [
          { text: '前言', link: '/department/preface' },
          { text: '软件部', link: '/department/software' },
          { text: '硬件部', link: '/department/hardware' },
          { text: '文案部', link: '/department/copywriting' },
          { text: '设计部', link: '/department/design' },
          { text: '创新创业部', link: '/department/innovation' },
        ] },
      { text: '招新流程', link: '/recruitment-process' },
      { text: '考核相关', 
        items: [
          { text: '前言', link: '/assessment/preface' },
          { text: '考核题', link: '/assessment/questions' },
          { text: '考核要求', link: '/assessment/requirements' },
          { text: '考核提交', link: '/assessment/submission' },
          { text: '考核时间及相关安排', link: '/assessment/time' },
        ]
       },
      { text: 'Q&A', link: '/qa' },
      { text: '实验室主要项目', 
        items: [
          { text: '前言', link: '/project/preface' },
          { text: '重点项目', 
            items: [
              { text: '临界拓池', link: '/project/ljtc' },
              { text: '智润田园', link: '/project/zhrt' },
            ]
           },
          { text: '竞赛项目', 
            items: [
              { text: '星海韵梦', link: '/project/xhym' },
              { text: '智能题站', link: '/project/zntz' },
              { text: '风花雪月', link: '/project/fhxy' },
            ]
           },
        ] },
      { text: '联系我们', link: '/contact' },
      { text: '友情链接', 
        items: [
          { text: '学校', 
            items: [
              { text: '济宁学院', link: 'https://www.jnxy.edu.cn/' },
              { text: '济宁学院计算机科学与工程学院', link: 'https://csae.jnxy.edu.cn/' },
            ]
          },
          { text: '实验室官网', link: 'https://laboratory.2119.online/' },
        ]
       },
    ],

    // 大纲
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },

    // 侧边栏
    // sidebar: [
    //   {
    //     text: '部门简介',
    //     items: [
    //       { text: '前言', link: '/preface' },
    //       { text: '软件部', link: '/getting-started' },
    //       { text: '硬件部', link: '/configuration' },
    //       { text: '文案部', link: '/deployments' },
    //       { text: '设计部', link: '/deployments' },
    //       { text: '创新创业部', link: '/deployments' },
    //     ]
    //   },
    //   {
    //     text: '招新流程',
    //     items: [
    //       { text: '前言', link: '/preface' },
    //       { text: '招新流程', link: '/getting-started' },
    //       { text: '考核要求', link: '/configuration' },
    //       { text: '考核提交', link: '/deployments' },
    //       { text: '考核时间及相关安排', link: '/deployments' },
    //     ]
    //   },
    //   {
    //     text: '考核相关',
    //     items: [
    //       { text: '前言', link: '/preface' },
    //       { text: '考核题', link: '/getting-started' },
    //       { text: '考核要求', link: '/configuration' },
    //       { text: '考核提交', link: '/deployments' },
    //       { text: '考核时间及相关安排', link: '/deployments' },
    //     ]
    //   },
    //   {
    //     text: 'Q&A',
    //     items: [
    //       { text: '前言', link: '/preface' },
    //       { text: 'Q&A', link: '/getting-started' },
    //     ]
    //   },
    //   {
    //     text: '实验室主要项目',
    //     items: [
    //       { text: '前言', link: '/preface' },
    //       { text: '重点项目', link: '/getting-started' },
    //       { text: '竞赛项目', link: '/configuration' },
    //       { text: '其它项目', link: '/deployments' },
    //     ]
    //   },
    //   {
    //     text: '联系我们',
    //     items: [
    //       { text: '联系我们', link: '/contact' },
    //     ]
    //   },
    // ],
    //侧边栏
    sidebar: {
      '/department/': [
        {
          text: '部门简介',
          items: [
            { text: '前言', link: '/department/preface' },
            { text: '软件部', link: '/department/software' },
            { text: '硬件部', link: '/department/hardware' },
            { text: '文案部', link: '/department/copywriting' },
            { text: '设计部', link: '/department/design' },
            { text: '创新创业部', link: '/department/innovation' },
          ]
        },
      ],
      // '/recruitment/': [
      //   {
      //     text: '招新流程',
      //     items: [
      //       { text: '前言', link: '/preface' },
      //       { text: '招新流程', link: '/getting-started' },
      //       { text: '考核要求', link: '/configuration' },
      //       { text: '考核提交', link: '/deployments' },
      //       { text: '考核时间及相关安排', link: '/deployments' },
      //     ]
      //   },
      // ],
      '/assessment/': [
        {
          text: '考核相关',
          items: [
            { text: '前言', link: '/assessment/preface' },
            { text: '考核题', link: '/assessment/questions' },
            { text: '考核要求', link: '/assessment/requirements' },
            { text: '考核提交', link: '/assessment/submission' },
            { text: '考核时间及相关安排', link: '/assessment/time' },
          ]
        },
      ],
      '/project/': [
        {
          text: '实验室主要项目',
          items: [
            { text: '前言', link: '/project/preface' },
            { text: '重点项目', 
            items: [
              { text: '临界拓池', link: '/project/ljtc' },
              { text: '智润田园', link: '/project/zhrt' },
            ]
           },
          { text: '竞赛项目', 
            items: [
              { text: '星海韵梦', link: '/project/xhym' },
              { text: '智能题站', link: '/project/zntz' },
              { text: '风花雪月', link: '/project/fhxy' },
            ]
           },
          ]
        },
      ],
    },

    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    //自定义上下页名
    docFooter: { 
      prev: '上一篇', 
      next: '下一篇', 
    }, 

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式', 

    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录', 

    //返回顶部文字修改
    returnToTopLabel:'返回顶部', 

    //本地搜索
    search: { 
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    }, 

    //编辑本页
    editLink: { 
      pattern: 'https://github.com/HanJiang-cn/Laboratory-doc/edit/main/doc/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },

    // 社交链接
    socialLinks: [
      // 官方图标
      { icon: 'github', link: 'https://github.com/HanJiang-cn/Laboratory-doc' },
      // 自定义图标
      // https://www.iconfont.cn/ 图标库
      {
        icon: {
          svg: '<svg t="1758118389594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8088" width="200" height="200"><path d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z" p-id="8089"></path></svg>'
        },
        link: 'https://qm.qq.com/q/ipFMEwUguW',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'qq'
      },
      {
        icon: {
          svg: '<svg t="1758118361052" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6016" width="200" height="200"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1" p-id="6017"></path></svg>'
        },
        link: 'https://v.douyin.com/NDZHgOmEb98/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'tiktok'
      }
    ],

     //页脚
    footer: {
      message: '未经允许，不得转载',
      copyright: '© 2025 济宁学院计算机科学与工程学院大学生科技创新实验室. All rights reserved. | <a target="_blank" href="https://beian.miit.gov.cn/"> 鲁ICP备2024114192号-1 </a>&nbsp;<a href="https://beian.mps.gov.cn/#/query/webSearch?code=37040302006058" rel="noreferrer" target="_blank">鲁公网安备37040302006058</a>', 
      // 自动更新时间
      // copyright: `Copyright © 2023-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>`, 
    },
  }
})
