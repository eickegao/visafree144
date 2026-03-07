// 站点配置 - 修改这里的值来自定义你的博客
export const SITE = {
  title: {
    en: "Visafree144",
    es: "Visafree144",
    de: "Visafree144",
    fr: "Visafree144",
    ja: "Visafree144",
    ko: "Visafree144",
  },
  description: {
    en: "Your guide to China's 144-hour visa-free transit policy",
    es: "Tu guía sobre la política de tránsito sin visa de 144 horas en China",
    de: "Ihr Leitfaden zur 144-Stunden-visafreien Transitpolitik Chinas",
    fr: "Votre guide sur la politique de transit sans visa de 144 heures en Chine",
    ja: "中国の144時間ビザなしトランジット政策ガイド",
    ko: "중국 144시간 무비자 환승 정책 가이드",
  },
  url: "https://visafree144.com",
  base: "",
  defaultLang: "en" as const,
  supportedLangs: ["en", "es", "de", "fr", "ja", "ko"] as const,

  // 个人信息
  author: {
    name: {
      en: "Visafree144",
      es: "Visafree144",
      de: "Visafree144",
      fr: "Visafree144",
      ja: "Visafree144",
      ko: "Visafree144",
    },
    avatar: "/avatar.jpg",
    bio: {
      en: "Everything you need to know about China's 144-hour visa-free transit.",
      es: "Todo lo que necesitas saber sobre el tránsito sin visa de 144 horas en China.",
      de: "Alles, was Sie über den 144-Stunden-visafreien Transit in China wissen müssen.",
      fr: "Tout ce que vous devez savoir sur le transit sans visa de 144 heures en Chine.",
      ja: "中国の144時間ビザなしトランジットについて知っておくべきことすべて。",
      ko: "중국 144시간 무비자 환승에 대해 알아야 할 모든 것.",
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
    en: [
      { text: "Home", href: "/" },
      { text: "Blog", href: "/blog/" },
      { text: "About", href: "/about/" },
    ],
    es: [
      { text: "Inicio", href: "/" },
      { text: "Blog", href: "/blog/" },
      { text: "Acerca de", href: "/about/" },
    ],
    de: [
      { text: "Startseite", href: "/" },
      { text: "Blog", href: "/blog/" },
      { text: "Über uns", href: "/about/" },
    ],
    fr: [
      { text: "Accueil", href: "/" },
      { text: "Blog", href: "/blog/" },
      { text: "À propos", href: "/about/" },
    ],
    ja: [
      { text: "ホーム", href: "/" },
      { text: "ブログ", href: "/blog/" },
      { text: "について", href: "/about/" },
    ],
    ko: [
      { text: "홈", href: "/" },
      { text: "블로그", href: "/blog/" },
      { text: "소개", href: "/about/" },
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
