import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "صفحه اصلی", href: "/" },
  { label: "خدمات", href: "/services" },
  // { label: " Pricing", href: "/pricing" },
  {
    label: "بلاگ",
    href: "#",
    submenu: [
      { label: " مجله", href: "/blog" },
      // { label: "Blog Details", href: "/blog/blog_1" },
    ],
  },
  { label: "تماس باما", href: "/contact" },
  { label: "درباره ما", href: "/documentation#version" },
];
