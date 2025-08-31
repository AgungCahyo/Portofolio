import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import nextjs from "./nextjs.png";
import tailwind from "./tailwind.png";
import react from "./react.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import Notion from "./notion.png";
import Canva from "./canva.png";
import Development_dark from "./development-dark.png";
import Visual_dark from "./visual-dark.png";
import Costing_dark from "./costing-dark.png";
import Copywriting_dark from "./copywriting-dark.png";
import Development_light from "./development-light.png";
import Visual_light from "./visual-light.png";
import Costing_light from "./costing-light.png";
import Copywriting_light from "./copywriting-light.png";

export const assets = {
  Copywriting_dark,
  Costing_dark,
  Development_dark,
  Visual_dark,
  Copywriting_light,
  Costing_light,
  Development_light,
  Visual_light,
  Notion,
  Canva,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  react,
  tailwind,
  nextjs,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Brand Kaos: Concept Visual",
    description: "Desain logo, spanduk, dan landing page via Vercel.",
    bgImage: "/work7.png",
    link: "./project/brand-kaos-concept-visual",
  },
  {
    title: "Konten & Visual Produk",
    description: "Styling produk, fotografi, dan copy untuk F&B lokal.",
    bgImage: "/work11.jpg",
    link: "./project/konten-dan-visual-produk",
  },
  {
    title: "Tulisan di Medium",
    description: "Catatan ringan seputar kerja kreatif dan sistem.",
    bgImage: "/wok8.png",
    link: "./project/menjaga-identitas-di-era-seragam",
  },
  {
    title: "Sistem Menu Resto",
    description: "Strukturisasi menu, sistem HPP, dan dokumentasi visual.",
    bgImage: "/work4.png",
    link: "./project/sistem-menu-resto",
  },
  {
    title: "Recipe Book App",
    description:
      "Aplikasi mobile untuk kelola bahan, resep, dan hitung HPP.",
    bgImage: "/work12.png",
    link: "./project/recipe-book-app",
  },
];

export const serviceData = [
  {
    icon: assets.Development_dark,
    title: "Menu & Beverage Development",
    description:
      "Pengembangan menu minuman yang efisien, menarik, dan sesuai target pasar.",
    link: "/servicesPage/menu-beverage-development",
  },
  {
    icon: assets.Costing_dark,
    title: "HPP & Menu Costing System",
    description:
      "Perhitungan ulang HPP untuk efisiensi dan profitabilitas bisnis F&B.",
    link: "/servicesPage/hpp-menu-costing-system",
  },
  {
    icon: assets.Copywriting_dark,
    title: "Menu Structuring & Copywriting",
    description:
      "Menyusun ulang struktur menu agar mudah dipesan, menarik secara visual, dan selaras dengan branding.",
    link: "/servicesPage/menu-structuring-copywriting",
  },
  {
    icon: assets.Visual_dark,
    title: "Product Styling & Visual Content",
    description:
      "Visualisasi produk yang menggugah selera dan cocok untuk keperluan marketing.",
    link: "/servicesPage/product-styling-visual-content",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Skill Teknis",
    description:
      "Menguasai HTML, CSS, JavaScript, React.js, Tailwind CSS, dan Next.js. Terbiasa membangun UI responsif, animasi interaktif, hingga deployment via Vercel. Juga paham dasar backend (API, Firebase, MongoDB).",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Pendidikan",
    description:
      "Belajar secara otodidak lewat proyek nyata dan eksperimen mandiri. Fokus pada front-end modern stack, UI/UX, dan integrasi dengan backend ringan.",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description:
      "Mengerjakan sistem menu restoran, aplikasi resep, brand visual untuk UMKM, serta portfolio digital. Juga aktif membuat konsep brand dan dokumentasi proses.",
  },
];

export const toolsData = [
  { name: "React", icon: assets.react },
  { name: "Next.js", icon: assets.nextjs },
  { name: "Tailwind CSS", icon: assets.tailwind },
  { name: "VS Code", icon: assets.vscode },
  { name: "Git", icon: assets.git },
  { name: "Figma", icon: assets.figma },
  { name: "Canva", icon: assets.Canva },
  { name: "Notion", icon: assets.Notion },
  { name: "Firebase", icon: assets.firebase },
  { name: "MongoDB", icon: assets.mongodb },
];
