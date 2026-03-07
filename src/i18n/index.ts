import { SITE, type Lang } from "../config";

// Language display names (shown in language switcher)
export const langNames: Record<Lang, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  ja: "日本語",
  ko: "한국어",
};

// UI 翻译文本
const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.about": "About",
    "blog.title": "Blog",
    "blog.readMore": "Read more",
    "blog.minRead": "min read",
    "blog.allPosts": "All Posts",
    "blog.taggedWith": "Tagged with",
    "blog.backToBlog": "Back to blog",
    "tags.title": "Tags",
    "about.title": "About",
    "home.latestPosts": "Latest Posts",
    "home.viewAll": "View all posts",
    "footer.rights": "All rights reserved.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.about": "Acerca de",
    "blog.title": "Blog",
    "blog.readMore": "Leer más",
    "blog.minRead": "min de lectura",
    "blog.allPosts": "Todos los artículos",
    "blog.taggedWith": "Etiquetado con",
    "blog.backToBlog": "Volver al blog",
    "tags.title": "Etiquetas",
    "about.title": "Acerca de",
    "home.latestPosts": "Últimos artículos",
    "home.viewAll": "Ver todos",
    "footer.rights": "Todos los derechos reservados.",
  },
  de: {
    "nav.home": "Startseite",
    "nav.blog": "Blog",
    "nav.about": "Über uns",
    "blog.title": "Blog",
    "blog.readMore": "Weiterlesen",
    "blog.minRead": "Min. Lesezeit",
    "blog.allPosts": "Alle Beiträge",
    "blog.taggedWith": "Markiert mit",
    "blog.backToBlog": "Zurück zum Blog",
    "tags.title": "Tags",
    "about.title": "Über uns",
    "home.latestPosts": "Neueste Beiträge",
    "home.viewAll": "Alle anzeigen",
    "footer.rights": "Alle Rechte vorbehalten.",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.blog": "Blog",
    "nav.about": "À propos",
    "blog.title": "Blog",
    "blog.readMore": "Lire la suite",
    "blog.minRead": "min de lecture",
    "blog.allPosts": "Tous les articles",
    "blog.taggedWith": "Tagué avec",
    "blog.backToBlog": "Retour au blog",
    "tags.title": "Tags",
    "about.title": "À propos",
    "home.latestPosts": "Derniers articles",
    "home.viewAll": "Voir tout",
    "footer.rights": "Tous droits réservés.",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.blog": "ブログ",
    "nav.about": "について",
    "blog.title": "ブログ",
    "blog.readMore": "続きを読む",
    "blog.minRead": "分で読めます",
    "blog.allPosts": "すべての記事",
    "blog.taggedWith": "タグ",
    "blog.backToBlog": "ブログに戻る",
    "tags.title": "タグ",
    "about.title": "について",
    "home.latestPosts": "最新の記事",
    "home.viewAll": "すべて見る",
    "footer.rights": "All rights reserved.",
  },
  ko: {
    "nav.home": "홈",
    "nav.blog": "블로그",
    "nav.about": "소개",
    "blog.title": "블로그",
    "blog.readMore": "더 읽기",
    "blog.minRead": "분 소요",
    "blog.allPosts": "모든 글",
    "blog.taggedWith": "태그",
    "blog.backToBlog": "블로그로 돌아가기",
    "tags.title": "태그",
    "about.title": "소개",
    "home.latestPosts": "최신 글",
    "home.viewAll": "모두 보기",
    "footer.rights": "All rights reserved.",
  },
};

export function getLangFromUrl(url: URL): Lang {
  const pathLang = url.pathname.split("/")[1];
  if (SITE.supportedLangs.includes(pathLang as Lang)) {
    return pathLang as Lang;
  }
  return SITE.defaultLang;
}

export function t(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

const base = SITE.base || "";

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === SITE.defaultLang) {
    return `${base}${path}`;
  }
  return `${base}/${lang}${path}`;
}

// 获取当前页面对应的指定语言路径
export function getLangPath(currentPath: string, currentLang: Lang, targetLang: Lang): string {
  // Strip base prefix first
  const pathWithoutBase = currentPath.startsWith(base) ? currentPath.slice(base.length) : currentPath;

  // Remove current lang prefix from path if not default
  let cleanPath = pathWithoutBase;
  if (currentLang !== SITE.defaultLang) {
    cleanPath = pathWithoutBase.replace(`/${currentLang}`, "") || "/";
  }

  // Replace language prefix in blog/tag slugs (e.g., en-xxx -> ja-xxx)
  const slugLangPattern = new RegExp(`/(blog|tags)/${currentLang}-`);
  if (slugLangPattern.test(cleanPath)) {
    cleanPath = cleanPath.replace(slugLangPattern, `/$1/${targetLang}-`);
  }

  // Add target lang prefix if not default
  if (targetLang === SITE.defaultLang) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${targetLang}${cleanPath}`;
}
