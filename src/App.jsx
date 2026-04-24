import { useState } from 'react'
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data"
import Lanyard from './components/Lanyard.jsx'
import ProfileCard from './components/ProfileCard.jsx';
import SplashCursor from './components/SplashCursor.jsx';

function App() {
  const [count, setCount] = useState(0)

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
  COLOR="#A855F7"
/>

{/* Hero Section */}
<section className='hero min-h-[90vh] flex flex-col md:grid md:grid-cols-2 items-center justify-center pt-10 gap-12 md:gap-6'>
  <div className='order-first md:order-last w-full flex justify-center items-center animate__animated animate__fadeInRight animate__delay-1s'>
    <div className='relative flex justify-center items-center w-full'>
      <div className='w-[85%] max-w-[380px md:max-w-[450px'>
        <ProfileCard 
          name="Rae Triadi"
          title="Web Developer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/assets/hero.jpeg"
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
    <h1 className='text-5xl/tight mb-6'>Hi, Saya <span className='text-blue-500'>Rae Triadi</span></h1> 
    <p className='text-base md:text-lg leading-relaxed mb-8 opacity-60 max-w-md'>
      Saya Web Developer dengan pengalaman mengembangkan aplikasi web yang responsif dan user-friendly. Saya memiliki keahlian dalam berbagai teknologi modern.
    </p>

    <div className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
      <a 
        href="CV_Rae_Triadi.pdf" 
        className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20' 
        download
      >
        Download CV <i className="ri-download-line"></i>
      </a>
      <a 
        href="#proyek" 
        className='border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition-all'
      >
        Lihat Proyek <i className="ri-arrow-down-line"></i>
      </a>
    </div>
  </div>
</section>
{/* Hero Section */}

      {/* Tentang */}
      <div className='tentang mt-10 py-10' id='tentang'>
        <div className='xl:w-2/3 lg:w-full mx-auto p-7 adaptive-card border border-zinc-600 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
          <h1 className='text-4xl/snug font-bold mb-4'>Tentang Saya</h1>
          <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden' />
          <p className='text-base/loose mb-10'>
            Hi, perkenalkan saya Rae Triadi, seorang Web Developer. Saya percaya bahwa fungsionalitas harus berjalan beriringan, sehingga
            setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md sm:block hidden' loading='lazy' />
            <div className='flex items-center gap-6'>
              <div>
                <h1 className='text-4xl mb-1'>4<span className='text-blue-500'>+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className='text-4xl mb-1'>2<span className='text-blue-500'>+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* tools Section */}
        <div className='tools mt-32'>
          <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Berikut adalah beberapa tools yang saya gunakan dalam pengembangan aplikasi web.
          </p>
          <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {listTools.map(tool => (
              <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md ' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tools Image" className='w-14 adaptive-card p-1 group-hover:bg-zinc-900' />
                <div>
                  <h4 className='font-bold'>{tool.nama}</h4>
                  <p className='opacity-50'>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tools section */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id='proyek'>
        <h1 className='text-center text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 :grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000">
          {listProyek.map(proyek => (
            <div key={proyek.id} className='p-4 adaptive-card border border-zinc-500 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image" loading='lazy' />
              <div>
                <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                <p className='text-base/loose mb-4'>{proyek.desk}</p>
                <div className='flex flex-wrap gap-2'>
                  {proyek.tools.map((tool, index) => (
                    <p className='py-1 px-3 border border-zinc-500 adaptive-card rounded-md font-semibold' key={index}>{tool}</p>
                  ))}
                  {proyek.fitur && proyek.fitur.map((fitur, index) => (
                    <p className='py-1 px-3 border border-zinc-500 adaptive-card rounded-md font-semibold' key={index}>{fitur}</p>
                  ))}
                  {proyek.role && (
                    <p className='py-1 px-3 border border-zinc-500 adaptive-card  rounded-md font-semibold'>{proyek.role}</p>
                  )}
                </div>
                <div className='mt-8 text-center'>
                  <a href={proyek.link} className='bg-blue-500 p-3 rounded-lg block border border-zinc-600' target="_blank" rel="noopener noreferrer">Lihat Kode</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek  */}

      {/* Sertifikat */}
      <div className="proyek mt-32 py-10" id='sertifikat'>
        <h1 className='text-center text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Sertifikat</h1>
        <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut adalah beberapa sertifikat yang telah saya peroleh.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 :grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000">
          {listSertifikat.map(sertifikat   => (
            <div key={sertifikat.id} className='p-4 adaptive-card border border-zinc-500 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sertifikat.dad}>
              <img src={sertifikat.gambar} alt="Sertifikat Image" loading='lazy' />
              <div>
                <h1 className='text-2xl font-bold my-4'>{sertifikat.nama}</h1>
                <p className='text-base/loose mb-4'>{sertifikat.ket}</p>
                <div className='flex flex-wrap gap-2'>
                </div>
                <div className='mt-8 text-center'>
                  <a href={sertifikat.link} target="_blank" rel="noopener noreferrer" className='bg-blue-500 p-3 rounded-lg block border border-zinc-600'>Lihat Detail</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sertifikat */}

      {/* Contact */}
      <div className="contact mt-32 sm:p-10 p-0" id='kontak'>
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
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

            <div className="text-center">
              <button type="submit" className="bg-blue-500 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}

    </>
  )
}

export default App