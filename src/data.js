import HeroImage from "/assets/hero-img.webp";


const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/php.png";
import Tools3 from "/assets/tools/python.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/laravel.png";
import Tools7 from "/assets/tools/Flask.png";
import Tools8 from "/assets/tools/reactjs.png";
import Tools9 from "/assets/tools/tailwind.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/github.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "PHP",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Python",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Laravel",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Flask",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "ReactJS",
    ket: "Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "TailwindCSS",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "MySQL",
    ket: "Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "GitHub",
    ket: "Repository",
    dad: "1300",
  },  
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";
import Proyek7 from "/assets/proyek/proyek7.png";
import Proyek8 from "/assets/proyek/proyek8.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Sistem Palang Pintu Otomatis dengan Face Recognition",
    desk: "Sistem palang pintu otomatis berbasis IoT dengan face recognition menggunakan Python dan OpenCV. Sistem mampu mengidentifikasi wajah pengguna secara real-time dan mengontrol akses pintu secara otomatis melalui integrasi web.",
    tools: ["Javascript", "OpenCV", "Python", "TailwindCSS", "Flask", "MySQL", "ArduinoIDE", "CMake", "SwetAlert2"],
    role: "Fullstack Developer",
    github: "https://github.com/rae4321/sistem-palang-pintu-otomatis-face-recognition",
    link: "",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Undangan Pernikahan",
    desk: "Aplikasi web undangan pernikahan yang menampilkan informasi acara, galeri foto, dan fitur RSVP. Aplikasi ini dirancang dengan antarmuka yang responsif dan menarik menggunakan ReactJS dan TailwindCSS.",
    role: "Frontend Developer",
    tools: ["ReactJS", "TailwindCSS", "Javascript", "supabase", "vite","vercel"],
    github: "https://github.com/rae4321/wedding-hani-andri",
    link: "https://wedding-hani-andri.vercel.app/",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Iuran Pemeliharaan Lingkungan",
    desk: "Aplikasi web untuk mengelola iuran pemeliharaan lingkungan di sebuah komplek perumahan, dengan fitur manajemen anggota, pencatatan iuran, dan laporan keuangan.",
    tools: ["PHP", "MySQL", "Bootstrap", "AdminLTE"],
    role: "Backend Developer",
    github: "https://github.com/rae4321/project-kelompok-ipl",
    link: "",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Tugas Kelompok SPK",
    desk: "Proyek tugas kelompok untuk membuat aplikasi web yang dapat membantu pengguna dalam memilih laptop yang sesuai dengan kebutuhan menggunakan metode Weighted Product (WP).",
    role: "Fullstack Developer",
    tools: ["PHP", "MySQL"],
    github: "https://github.com/rae4321/spk_pemilihan_laptop",
    link: "",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek8,
    nama: "Bridge Page",
    desk: "Aplikasi web yang berfungsi sebagai jembatan antara pengguna dan layanan yang tersedia.",
    role: "Fullstack Developer",
    tools: ["React", "TailwindCSS", "vite", "cloudflare pages"],
    github: "https://github.com/rae4321/bridge-page",
    link: "https://kurasipilihan.my.id/",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek7,
    nama: "Dapur Mamaza",
    desk: "Aplikasi web untuk mengelola pesanan makanan dan minuman di Dapur Mamaza, dengan fitur manajemen menu, pemesanan online, dan laporan penjualan.",
    tools: ["TypeScript", "JavaScript", "React", "TailwindCSS", "vite", "vercel"],
    role: "Frontend Developer",
    github: "https://github.com/rae4321/dapur-mamaza",
    link: "https://dapurmamaza.vercel.app/",
    dad: "700",
  }
];

import Sertifikat1 from "/assets/sertifikat/sertifikat1.webp";
import Sertifikat2 from "/assets/sertifikat/sertifikat2.jpg";
import Sertifikat3 from "/assets/sertifikat/sertifikat3.jpg";
import Sertifikat4 from "/assets/sertifikat/sertifikat4.jpeg";
import Sertifikat5 from "/assets/sertifikat/sertifikat5.jpg";
import Sertifikat6 from "/assets/sertifikat/sertifikat6.jpg";
import { g, label, li, link } from "framer-motion/client";

export const listSertifikat = [
  {
    id: 1,
    gambar: Sertifikat1,
    nama: "Sertifikat Pemrograman",
    ket: "Sertifikat yang menunjukkan keahlian dalam pemrograman.",
    link: "SKILL_PASSPORT_250205070128.pdf",
    dad: "200",
  },
  {
    id: 2,
    gambar: Sertifikat2,
    nama: "Sertifikat Javascript",
    ket: "Sertifikat yang menunjukkan keahlian dalam pengembangan aplikasi web menggunakan Javascript.",
    link: "js.pdf",
    dad: "300",
  },
  {
    id: 3,
    gambar: Sertifikat3,
    nama: "Sertifikat CSS",
    ket: "Sertifikat yang menunjukkan keahlian dalam pengembangan tampilan aplikasi web menggunakan CSS.",
    link: "css.pdf",
    dad: "400",
  },
  {
      id: 4,
      gambar: Sertifikat4,
      nama: "Sertifikat SQL",
      ket: "Sertifikat yang menunjukkan keahlian dalam pengembangan database menggunakan SQL.",
      link: "SQL.pdf",
      dad: "500",
  },
  {
    id: 5,
    gambar: Sertifikat5,
    nama: "Sertifikat MikroTik",
    ket: "Sertifikat yang menunjukkan keahlian dalam konfigurasi dan pengelolaan jaringan menggunakan MikroTik.",
    link: "MikroTik.pdf",
    dad: "600",
  },
  {
    id: 6,
    gambar: Sertifikat6,
    nama: "Sertifikat Pemrograman Web",
    ket: "Sertifikat yang menunjukkan keahlian dalam pemrograman web.",
    link: "sertifikat_course_123_2257138_180426052104.pdf",
    dad: "700",
  },
];