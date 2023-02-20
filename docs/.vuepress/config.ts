import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "en-US",
      title: "LLX-CLI",
      description: "Quickly create vue.js template project scaffolding",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "LLX-CLI",
      description: "快速创建vue.js模板项目",
    },
  },

  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: "liuxing997/llx-cli-starter",
    docsDir: "docs",

    // theme-level locales config
    locales: {
      "/": {
        // navbar
        // navbar: navbarEn,
        // 默认主题配置
        navbar: [
          {
            text: "Home",
            link: "/",
          },
        ],
        // sidebar
        // sidebar: sidebarEn,
        // page meta
        editLinkText: "Edit this page on GitHub",
      },
      "/zh/": {
        // navbar
        // navbar: navbarZh,
        // 默认主题配置
        navbar: [
          {
            text: "首页",
            link: "/",
          },
        ],
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        // sidebar
        // sidebar: sidebarZh,
        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleColorMode: "切换颜色模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  }),
});
