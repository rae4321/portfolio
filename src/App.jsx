import { useState, useEffect } from 'react';
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";
import Lanyard from './components/Lanyard.jsx';
import SplashCursor from './components/SplashCursor.jsx';
import LogoLoop from './components/LogoLoop.jsx';
import TechText from './components/TechText.jsx';
import { SiReact, SiTailwindcss, SiLaravel, SiFigma, SiPython, SiVercel, SiSupabase, SiMysql, SiPostgresql, SiJavascript, SiPhp, SiPostman, SiFlask, SiGithub, SiNodedotjs, SiGooglegemini, SiClaudecode, SiCloudflare, SiCloudflarepages,} from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
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
  { node: <SiGooglegemini />, title: "Google Gemini", href: "https://gemini.google.com", hoverColor: "#4285f4" },
  { node: <SiClaudecode />, title: "Claude", href: "https://claude.ai", hoverColor: "#fb923c" },
  { node: <SiCloudflare />, title: "Cloudflare", href: "https://www.cloudflare.com", hoverColor: "#f59e0b" },
  { node: <SiCloudflarepages />, title: "Cloudflare Pages", href: "https://pages.cloudflare.com", hoverColor: "#f59e0b" },
];

function Home() {
  const roles = ["Web Developer", "Frontend Developer", "Backend Developer",];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative flex w-full flex-col justify-between overflow-hidden"
        style={{ height: "calc(100svh - 80px)", minHeight: "540px" }}
      >
        
        {/* LAYER 1 (Belakang): Teks Solid */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center select-none pb-8">
          <div className="w-full text-center animate__animated animate__fadeIn">
            <span
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(4.2rem, 19vw, 19.5rem)",
                lineHeight: 0.86,
                letterSpacing: "-0.01em",
                color: "greenyellow"
              }}
              className="inline-block whitespace-nowrap uppercase"
            >
              DEVELOPER
            </span>
          </div>
        </div>

        {/* LAYER 2 (Tengah): Foto Profil menempel di bawah */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-center select-none">
          <img
            src="/no-bg-hero2.png"
            alt="Rae Triadi"
            draggable="false"
            style={{
              height: "clamp(360px, 76svh, 760px)",
              filter: "contrast(1.03) brightness(0.96)",
            }}
            className="block w-auto max-w-none object-contain object-bottom animate__animated animate__fadeInUp"
          />
        </div>

        {/* LAYER 3 (Depan): Subjudul + Teks Outline (Hanya bagian tengah RTFOL yang bergaris) */}
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center select-none pb-8">
          <div className="w-full text-center animate__animated animate__fadeIn">
            <span
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(4.2rem, 19vw, 19.5rem)",
                lineHeight: 0.86,
                letterSpacing: "-0.01em",
              }}
              className="relative inline-block whitespace-nowrap uppercase"
            >
              {/* Subjudul sejajar kiri tepat di atas huruf P */}
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(11px, 1.15vw, 15px)",
                  lineHeight: 1.2,
                }}
                className="pointer-events-none absolute bottom-full left-0 mb-2 flex items-center gap-1.5 text-left font-normal tracking-normal normal-case whitespace-nowrap sm:mb-3"
              >
                <span className="">Focusing on</span>
                <span className="font-semibold text-lime-400">
                  {roles[roleIndex]}
                </span>
              </div>

              {/* Huruf pinggir transparan total, bagian tengah (RTFOL) ber-outline */}
              <span style={{ color: "transparent", WebkitTextFillColor: "transparent" }}>DE</span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "clamp(1.5px, 0.16vw, 2.2px) #EADCC0 ",
                }}
              >
                VELOP
              </span>
              <span style={{ color: "transparent", WebkitTextFillColor: "transparent" }}>ER</span>
            </span>
          </div>
        </div>

        {/* BOTTOM BAR: Nama (Kiri) & Download CV + Explore Projects (Kanan) */}
        <div 
          className="z-40 mt-auto flex w-full items-end justify-between"
          style={{ padding: "clamp(16px, 2vw, 26px) clamp(18px, 3.5vw, 52px)" }}
        >
          <div className="flex items-center gap-4">
            <p 
              style={{ fontSize: "clamp(10px, 1.1vw, 13px)", letterSpacing: "0.12em" }}
              className="font-medium uppercase whitespace-nowrap"
            >
              RAE TRIADI
            </p>
            <div className="hidden sm:flex items-center gap-3 text-sm">
              <a href="https://github.com/rae4321" target="_blank" rel="noreferrer" className="hover:opacity-100 hover:text-lime-400 transition">
                <SiGithub />
              </a>
              <a href="mailto:jkotriady@gmail.com" className="hover:opacity-100 hover:text-lime-400 transition">
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>

          <div 
            style={{ fontSize: "clamp(10px, 1.1vw, 13px)", letterSpacing: "0.12em" }}
            className="flex items-center gap-6 font-medium uppercase"
          >
            <a
              href="CV_RAE TRIADI.pdf"
              download
              className="inline-flex items-center gap-1.5 transition hover:opacity-100 hover:text-lime-400"
            >
              <span>DOWNLOAD CV</span>
              <i className="ri-download-line"></i>
            </a>
            <a
              href="#proyek"
              className="group inline-flex items-center gap-1.5 transition hover:opacity-100 hover:text-lime-400"
            >
              <span>LIHAT PROYEK</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"><i className="ri-arrow-down-line"></i></span>
            </a>
          </div>
        </div>

        {/* Garis tipis pembatas bawah */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-px bg-current opacity-10" />

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
                <h1 className='text-4xl mb-1'>4<span className='text-amber-400'>+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className='text-4xl mb-1'>2<span className='text-amber-400'>+</span></h1>
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
              <img 
                src={proyek.gambar} 
                alt={proyek.nama} 
                loading='lazy' 
                className='w-full h-48 object-cover rounded-md' 
              />

              <div className='flex flex-col flex-1'>
                <h1 className='text-2xl text-center my-4 line-clamp-2 min-h-16 flex items-center justify-center'>
                  {proyek.nama}
                </h1>

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
              <img 
                src={sertifikat.gambar} 
                alt={sertifikat.nama} 
                loading='lazy' 
                className='w-full h-48 object-cover rounded-md' 
              />

              <div className='flex flex-col flex-1'>
                <h1 className='text-2xl text-center my-4 line-clamp-2 min-h-16 flex items-center justify-center'>
                  {sertifikat.nama}
                </h1>
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
              <UiverseButton type="submit" variant="yellow" className="w-full">
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