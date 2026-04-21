import { useState } from 'react'
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data"
import Lanyard from './components/Lanyard.jsx'
import ScrollVelocity from './components/ScrollVelocity.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Wrapper Utama Beranda */}
<section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 pb-10">
  
  {/*  SCROLL VELOCITY  */}
  <div className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none select-none opacity-[0.03] dark:opacity-[0.2]">
    <ScrollVelocity
      texts={['FULLSTACK DEVELOPER']} 
      velocity={100} 
      className="text-[15vw] font-black leading-none tracking-tighter" 
      numCopies={4}
    />
  </div>

  {/*  CONTENT LAYER (FOREGROUND) */}
  <div className="container mx-auto px-6 relative z-10">
    <div className='grid md:grid-cols-2 items-center xl:gap-16 gap-10'>
      
      {/* SISI KIRI: TEKS HERO */}
      <div className='animate__animated animate__fadeInUp animate__delay-1s'>
        {/* Badge Sapaan */}
        <div className='flex flex-wrap items-center gap-4 sm justify-center md:justify-start mb-8 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-2 pr-5 rounded-full'>
          <div className='w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center'>
            <i className="ri-code-s-slash-line text-blue-500 text-xl"></i>
          </div>
          <p className='text-xs md:text-sm font-medium tracking-wide'>
            Available for New Projects
          </p>
        </div>

        <h1 className='text-4xl lg:text-7xl font-bold text-center mb-6 tracking-tight leading-[1.1]'>
          Hi, Saya <span className="text-blue-500">Rae Triadi</span>
        </h1>
        
        <p className='text-md lg:text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed'>
          Saya <span className="font-bold text-blue-500">Fullstack Web Developer</span> yang tinggal di Indonesia. Saya memiliki pengalaman dalam membangun aplikasi web yang ramah pengguna presisi hingga tingkat piksel dan kinerja yang optimal menggunakan berbagai teknologi modern.
        </p>

        <div className='flex flex-wrap items-center gap-4 justify-center md:justify-start'>
          <a href="CV_Rae_Triadi.pdf" target="_blank" rel="noopener noreferrer"
             className='group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20' 
             download>
            Download CV 
            <i className="ri-download-2-line transition-transform group-hover:translate-y-1"></i>
          </a>
          <a href="#proyek" 
             className='px-8 py-4 rounded-xl font-semibold border border-zinc-700 hover:bg-zinc-800 transition-all flex items-center gap-2'>
            Lihat Proyek 
            <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </div>

      {/* SISI KANAN: LANYARD 3D */}
      <div className='w-full h-450px md:h-650px relative animate__animated animate__fadeIn lg:scale-110'>
        {/* Glow Effect di belakang Lanyard */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[120px] rounded-full"></div>
        
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} transparent={true} />
      </div>

    </div>
  </div>
</section>
      {/* Tentang */}
      <div className='tentang mt-10 py-10' id='tentang'>
        <div className='xl:w-2/3 lg:w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
          <h1 className='text-4xl/snug font-bold mb-4'>Tentang Saya</h1>
          <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden' />
          <p className='text-base/loose mb-10'>
            Fullstack Developer dengan fokus pada pengembangan aplikasi berbasis web menggunakan Laravel, MySQL, dan JavaScript. Memiliki pengalaman dalam membangun sistem end-to-end mulai dari perancangan database, pengembangan backend, hingga implementasi antarmuka pengguna yang responsif.
            Terbiasa mengembangkan berbagai proyek seperti sistem pendukung keputusan, sistem informasi berbasis web, serta integrasi teknologi IoT menggunakan Python dan computer vision. Memiliki pemahaman yang baik tentang REST API, manajemen database, serta pengembangan aplikasi yang terstruktur dan efisien.
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

        {/* Tools Section */}
        <div className='tools mt-32'>
          <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Berikut adalah beberapa tools yang saya gunakan dalam pengembangan aplikasi web.
          </p>
          <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {listTools.map(tool => (
              <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' />
                <div>
                  <h4 className='font-bold'>{tool.nama}</h4>
                  <p className='opacity-50'>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id='proyek'>
        <h1 className='text-center text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 :grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000">
          {listProyek.map(proyek => (
            <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image" loading='lazy' />
              <div>
                <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                <p className='text-base/loose mb-4'>{proyek.desk}</p>
                <div className='flex flex-wrap gap-2'>
                  {proyek.tools.map((tool, index) => (
                    <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold' key={index}>{tool}</p>
                  ))}
                  {proyek.fitur && (
                    <div className='flex flex-wrap gap-2 mt-4'>
                      {proyek.fitur.map((fitur, index) => (
                        <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold' key={index}>{fitur}</p>
                      ))}
                    </div>
                  )}
                  {proyek.role && (
                    <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold mt-4'>{proyek.role}</p>
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

      {/* Sertifikat */}
      <div className="proyek mt-32 py-10" id='sertifikat'>
        <h1 className='text-center text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Sertifikat</h1>
        <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut adalah beberapa sertifikat yang telah saya peroleh.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 :grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000">
          {listSertifikat.map(sertifikat   => (
            <div key={sertifikat.id} className='p-4 bg-zinc-800 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sertifikat.dad}>
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

        <form action="https://formsubmit.co/jkotriady@gmail.com" method='POST' className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
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

    </>
  )
}

export default App