import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'jiaokang的博客',
  description: '欢迎来到jiaokang的博客',
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      {
        text: '网络',
        link: '/network/',
      },
      {
        text: '设计模式',
        link: '/designPatterns/',
      },
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/network/': [
        {
          text: '网络',
          children: [
              {
                text: '一张图帮你看懂，在浏览器输入网址回车后，都发生了什么？',
                link: '/network/一张图帮你看懂，在浏览器输入网址回车后，都发生了什么？.md',
              }
            ],
        },
      ],
      '/designPatterns/': [
        {
          text: '设计模式',
          collapsible: true,
          children: [
              {
                text: '单例模式--我的机器人女友',
                link: '/designPatterns/单例模式--我的机器人女友.md',
              }
          ],
        },
      ],
    },    

  }),
})
