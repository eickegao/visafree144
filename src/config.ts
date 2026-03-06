// 站点配置 - 修改这里的值来自定义你的博客
export const SITE = {
  title: {
    en: "Visafree144",
    zh: "Visafree144",
  },
  description: {
    en: "Your site description here",
    zh: "在这里填写网站描述",
  },
  url: "https://eickegao.github.io/visafree144",
  base: "/visafree144",
  defaultLang: "zh" as const,
  supportedLangs: ["en", "zh"] as const,

  // 个人信息
  author: {
    name: {
      en: "Your Name",
      zh: "你的名字",
    },
    avatar: "/avatar.jpg",
    bio: {
      en: "Your bio here.",
      zh: "在这里填写个人简介。",
    },
  },

  // 社交链接 - 留空则不显示
  socials: {
    github: "",
    twitter: "",
    linkedin: "",
    email: "",
  },

  // 导航菜单
  nav: {
    zh: [
      { text: "首页", href: "/" },
      { text: "博客", href: "/blog/" },
      { text: "关于", href: "/about/" },
    ],
    en: [
      { text: "Home", href: "/en/" },
      { text: "Blog", href: "/en/blog/" },
      { text: "About", href: "/en/about/" },
    ],
  },

  // Google Analytics - 填入 ID 即可启用
  analytics: {
    googleAnalyticsId: "",
  },

  // Google AdSense - 填入 ID 即可启用
  ads: {
    googleAdsenseId: "",
    // 广告位 slot ID
    articleTopSlot: "",
    articleBottomSlot: "",
  },

  // 外观主题
  theme: {
    primaryColor: "#2563eb",
    accentColor: "#f59e0b",
    bgColor: "#ffffff",
    textColor: "#1a1a2e",
    cardBgColor: "#f8fafc",
    footerBgColor: "#1a1a2e",
  },

  // 每页文章数
  postsPerPage: 10,
};

export type Lang = (typeof SITE.supportedLangs)[number];
