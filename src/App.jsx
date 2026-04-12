import { useState } from 'react'
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data"
import Lanyard from './components/Lanyard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero Section */}
      <div className='hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1'>
        <div className='animate__animated animate__fadeInUp animate__delay-2s'>
          <div className='flex items-center gap-3 mb-6 bg-zinc-800 rounded-2xl'>
            <img src={DataImage.HeroImage} alt="Hero Image" className='w-10 rounded-md' loading='lazy' />
            <p className='p-2 text-sm'>Kode yang indah terlahir dari pikiran yang jernih, Iziinn 🙏</p>
          </div>
          <h1 className='text-5xl/tight mb-6'>Hi, Saya Rae Triadi</h1>
          <p className='text-base/loose mb-6 opacity-50'>
            Saya mempunyai ketertarikan dalam bidang programming yang berfokus pada pembuatan aplikasi web yang menarik dan fungsional.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>
          <a href="CV_Rae_Triadi .pdf" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' download>
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className='border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white'>
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        {/* --- AREA LANYARD (MENGGANTIKAN IMAGE HERO) --- */}
        <div className='w-full h-500px md:h-600px relative animate__animated animate__fadeInUp animate__delay-3s'>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} transparent={true} />
        </div>
      </div>

      {/* Tentang */}
      <div className='tentang mt-10 py-10' id='tentang'>
        <div className='xl:w-2/3 lg:w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
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
                </div>
                <div className='mt-8 text-center'>
                  <a href={proyek.link} className='bg-blue-500 p-3 rounded-lg block border border-zinc-600' target="_blank" rel="noopener noreferrer">Lihat Detail</a>
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