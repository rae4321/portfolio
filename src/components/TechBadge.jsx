import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiLaravel,
  SiPhp,
  SiPython,
  SiFlask,
  SiFlutter,
  SiDart,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiNodedotjs,
  SiEspressif,
  SiOpencv,
  SiFigma,
  SiVercel,
  SiCloudflare,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaCode, FaMicrochip, FaCss3Alt } from 'react-icons/fa6';

// Pemetaan nama tool (huruf kecil) ke ikon & warna resminya
const techIconMap = {
  react: { icon: SiReact, color: 'text-sky-400' },
  reactjs: { icon: SiReact, color: 'text-sky-400' },
  'react.js': { icon: SiReact, color: 'text-sky-400' },
  'next.js': { icon: SiNextdotjs, color: 'text-current' },
  nextjs: { icon: SiNextdotjs, color: 'text-current' },
  vite: { icon: SiVite, color: 'text-purple-400' },
  tailwind: { icon: SiTailwindcss, color: 'text-cyan-400' },
  tailwindcss: { icon: SiTailwindcss, color: 'text-cyan-400' },
  'tailwind css': { icon: SiTailwindcss, color: 'text-cyan-400' },
  bootstrap: { icon: SiBootstrap, color: 'text-violet-500' },
  javascript: { icon: SiJavascript, color: 'text-yellow-400' },
  js: { icon: SiJavascript, color: 'text-yellow-400' },
  typescript: { icon: SiTypescript, color: 'text-blue-500' },
  html: { icon: SiHtml5, color: 'text-orange-500' },
  html5: { icon: SiHtml5, color: 'text-orange-500' },
  css: { icon: FaCss3Alt, color: 'text-blue-400' },
  css3: { icon: FaCss3Alt, color: 'text-blue-400' },
  laravel: { icon: SiLaravel, color: 'text-red-500' },
  php: { icon: SiPhp, color: 'text-indigo-400' },
  python: { icon: SiPython, color: 'text-yellow-300' },
  flask: { icon: SiFlask, color: 'text-current' },
  flutter: { icon: SiFlutter, color: 'text-sky-400' },
  dart: { icon: SiDart, color: 'text-blue-400' },
  mysql: { icon: SiMysql, color: 'text-blue-500' },
  postgresql: { icon: SiPostgresql, color: 'text-sky-500' },
  postgres: { icon: SiPostgresql, color: 'text-sky-500' },
  supabase: { icon: SiSupabase, color: 'text-emerald-400' },
  firebase: { icon: SiFirebase, color: 'text-amber-400' },
  'node.js': { icon: SiNodedotjs, color: 'text-green-500' },
  nodejs: { icon: SiNodedotjs, color: 'text-green-500' },
  esp32: { icon: SiEspressif, color: 'text-red-400' },
  iot: { icon: FaMicrochip, color: 'text-emerald-400' },
  opencv: { icon: SiOpencv, color: 'text-green-400' },
  figma: { icon: SiFigma, color: 'text-pink-400' },
  vercel: { icon: SiVercel, color: 'text-current' },
  cloudflare: { icon: SiCloudflare, color: 'text-orange-400' },
  git: { icon: SiGit, color: 'text-orange-500' },
  github: { icon: SiGithub, color: 'text-current' },
};

const TechBadge = ({ name }) => {
  const key = name.toLowerCase().trim();
  const matched = techIconMap[key];

  // Fallback otomatis ke ikon kode (<FaCode />) jika nama tool belum ada di daftar
  const IconComponent = matched ? matched.icon : FaCode;
  const iconColor = matched ? matched.color : 'text-blue-400';

  return (
    <span className="inline-flex items-center gap-2 py-1.5 px-3.5 text-sm font-medium border border-zinc-500 rounded-md adaptive-card hover:border-blue-400 hover:-translate-y-0.5 transition-all cursor-default">
      <IconComponent className={`text-base shrink-0 ${iconColor}`} />
      <span>{name}</span>
    </span>
  );
};

export default TechBadge;