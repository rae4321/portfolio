import { useState } from 'react';
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";
import Lanyard from './components/Lanyard.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import SplashCursor from './components/SplashCursor.jsx';
import LogoLoop from './components/LogoLoop.jsx';
import TechText from './components/TechText.jsx';
import { SiReact, SiTailwindcss, SiLaravel, SiFigma, SiPython, SiVercel, SiSupabase, SiMysql, SiPostgresql, SiJavascript, SiPhp, SiPostman, SiFlask, SiGithub, SiNodedotjs } from 'react-icons/si';
import { Routes, Route, Link } from 'react-router-dom'; 
import DetailProyek from './components/pages/DetailProyek.jsx';
import NotFound from './components/pages/NotFound.jsx';
import UiverseButton from './components/UiverseButton.jsx';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev", hoverColor: "#61dafb" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", hoverColor: "#38bdf8" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com", hoverColor: "#f05340" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com", hoverColor: "#f24e1e" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org", hoverColor: "#3776ab" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com", hoverColor: "#000000" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com", hoverColor: "#3ecf8e" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com", hoverColor: "#4479a1" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org", hoverColor: "#336791" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com", hoverColor: "#f7df1e" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net", hoverColor: "#777bb4" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com", hoverColor: "#ff6c37" },  
  { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com", hoverColor: "#000000" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com", hoverColor: "#181717" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org", hoverColor: "#339933" },
];

// BAGIAN INI YANG SEBELUMNYA BELUM ADA:
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='hero min-h-[90vh] flex flex-col md:grid md:grid-cols-2 items-center justify-center pt-10 gap-12 md:gap-0'>
        <div className='order-first md:order-last w-full flex justify-center items-center animate__animated animate__fadeInRight animate__delay-1s'>
          <div className='relative flex justify-center items-center w-full'>
            <div className='w-[85%] max-w-95 md:max-w-112.5'>
              <ProfileCard 
                name="Rae Triadi"
                title="Web Developer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/hero2.jpeg"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl="/iconpattern.png"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)" 
              />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center md:items-start text-center md:text-left animate__animated animate__fadeInLeft animate__delay-1s px-6 md:px-0'>
          <h1 className='text-5xl/tight mb-4 flex flex-wrap items-center justify-center md:justify-start'>
            <span>Hi, Saya</span>
            <span className='inline-block text-amber-600 w-75 h-15'>
              <TechText
                text="Rae Triadi"
                fontWeight={600}
                fontSize={40}
                reveal="letter"
                dashLength={4}
                dashGap={0}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily=""
                letterSpacing={-0.05}
                accentColor="currentColor"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={1.5}
                speed={1}
                bounce={0.4}
                selection
                labels
                color="currentColor"
                align="center"
                draggable
                sweep
              />
            </span>
          </h1>
          <p className='text-base md:text-lg leading-relaxed mb-8 opacity-60 max-w-md'>
            Web Developer berpengalaman dalam mengembangkan aplikasi web yang responsif, interaktif, dan user-friendly. Memiliki keahlian solid dalam menggunakan teknologi modern seperti React, Vite, Tailwind CSS, dan Node.js Terbiasa mengelola version control dengan Git dan siap menghadirkan solusi digital yang efisien.
          </p>

          <div className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
            <a 
              href="CV_RAE TRIADI.pdf" 
              className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20' download>
              Download CV <i className="ri-download-line"></i>
            </a>
            <a href="#proyek" 
              className='border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition-all'
            >
              Lihat Proyek <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <div className='tentang mt-10 py-10' id='tentang'>
        <div className='xl:w-2/3 lg:w-full mx-auto p-7 adaptive-card border border-zinc-600 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
          <h1 className='text-4xl/snug mb-4'>Tentang Saya</h1>
          <p className='text-base/loose mb-10'>
            Hi, perkenalkan saya Rae Triadi, Lulusan Teknik Informatika yang memiliki pengalaman berharga dalam menyeimbangkan dunia kerja dan akademik. Memiliki minat yang tinggi serta pemahaman mendalam di bidang Teknologi Informasi, khususnya dalam Pengembangan Website, Desain Antarmuka, dan Pengujian Aplikasi. Berorientasi pada detail, adaptif, dan siap berkontribusi secara profesional serta bersaing di industri teknologi yang dinamis.
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <div>
                <h1 className='text-4xl mb-1'>4<span className='text-amber-600'>+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className='text-4xl mb-1'>2<span className='text-amber-600'>+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* tools Section */}
        <div className='tools mt-32'>
          <h1 className='text-center text-4xl/snug mb-4' data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
          <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Berikut adalah beberapa tools yang saya gunakan dalam pengembangan aplikasi web.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }} className="py-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
        />
      </div>

      {/* Proyek */}
<div className="proyek mt-32 py-10" id='proyek'>
  <h1 className='text-center text-4xl/snug mb-4' data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
  <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    Berikut adalah beberapa proyek yang telah saya kerjakan.
  </p>

  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000">
    {listProyek.map(proyek => (
      <div 
        key={proyek.id} 
        className='p-4 adaptive-card border border-zinc-500 rounded-md flex flex-col' 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-delay={proyek.dad}
      >
        {/* 1. Tinggi gambar diseragamkan agar sejajar */}
        <img 
          src={proyek.gambar} 
          alt={proyek.nama} 
          loading='lazy' 
          className='w-full h-48 object-cover rounded-md' 
        />

        {/* 2. Kontainer konten dibuat flex-1 agar mengisi sisa ruang card */}
        <div className='flex flex-col flex-1'>
          {/* 3. Judul diberi tinggi minimum (min-h) agar posisi di bawahnya tetap rata */}
          <h1 className='text-2xl text-center my-4 line-clamp-2 min-h-16 flex items-center justify-center'>
            {proyek.nama}
          </h1>

          {/* 4. mt-auto mendorong tombol agar selalu menempel sejajar di bagian paling bawah card */}
          <div className='mt-auto pt-4 px-1 pb-1 text-center flex gap-2'>
  <UiverseButton 
    to={`/proyek/${proyek.id}`} 
    variant="yellow" 
    className="w-full"
  >
    Detail Proyek
  </UiverseButton>
</div>

        </div>
      </div>
    ))}
  </div>
</div>
      {/* Sertifikat */}
<div className="proyek mt-32 py-10" id='sertifikat'>
  <h1 className='text-center text-4xl/snug mb-4' data-aos="fade-up" data-aos-duration="1000">Sertifikat</h1>
  <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    Berikut adalah beberapa sertifikat yang telah saya peroleh.
  </p>

  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000">
    {listSertifikat.map(sertifikat => (
      <div 
        key={sertifikat.id} 
        className='p-4 adaptive-card border border-zinc-500 rounded-md flex flex-col' 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-delay={sertifikat.dad}
      >
        {/* 1. Tinggi gambar diseragamkan agar sejajar */}
        <img 
          src={sertifikat.gambar} 
          alt={sertifikat.nama} 
          loading='lazy' 
          className='w-full h-48 object-cover rounded-md' 
        />

        {/* 2. Kontainer konten mengisi sisa ruang card */}
        <div className='flex flex-col flex-1'>
          {/* 3. Nama sertifikat rata tengah dengan tinggi minimum 2 baris */}
          <h1 className='text-2xl text-center my-4 line-clamp-2 min-h-16 flex items-center justify-center'>
            {sertifikat.nama}
          </h1>

          {/* 4. Keterangan (opsional: hapus baris <p> ini jika ingin tampilan minimalis persis seperti card proyek) */}
          <p className='text-base/loose text-center opacity-80 mb-4'>
            {sertifikat.ket}
          </p>

          {/* 5. mt-auto mendorong tombol selalu sejajar di bagian bawah card */}
          <div className='mt-auto pt-4 px-1 pb-1 text-center flex gap-2'>
  <UiverseButton 
    href={sertifikat.link && sertifikat.link.trim() !== "" ? sertifikat.link : undefined}
    to={!sertifikat.link || sertifikat.link.trim() === "" ? "/404" : undefined}
    variant="yellow" 
    className="w-full"
  >
    Lihat Detail
  </UiverseButton>
</div>

        </div>
      </div>
    ))}
  </div>
</div>

      {/* Contact */}
      <div className="contact mt-32 sm:p-10 p-0" id='kontak'>
        <h1 className="text-4xl mb-2 text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya.
        </p>

        <form action="https://formsubmit.co/jkotriady@gmail.com" method='POST' className="adaptive-card p-10 sm:w-fit w-full mx-auto border border-zinc-500 rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>

            <div className="text-center px-1 pb-1">
  <UiverseButton type="submit" variant="blue" className="w-full">
    Kirim Pesan
  </UiverseButton>
</div>

          </div>
        </form>
      </div>
    </>
  );
}

// ROUTING UTAMA
function App() {
  return (
    <>
    <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#6bbcff"
      />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyek/:id" element={<DetailProyek />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;