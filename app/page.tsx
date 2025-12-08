import Image from "next/image";
import {
  CalendarDays,
  ScanQrCode,
  BookText,
  UsersRound,
  ClipboardCheck,
  BellRing,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div
        className="h-screen flex items-center px-4 sm:px-8 lg:px-20"
        id="beranda"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="bg-secondary rounded-full w-70 h-70 absolute bottom-0 left-0 blur-3xl -z-10"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 lg:mb-6">
              Semua Fitur dalam Satu Aplikasi
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Aplikasi Absensi Siswa
              <br className="hidden sm:block" /> dan Guru
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600">
              Absen mudah Menggunakan QR Code
            </p>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="btn-secondary rounded-full w-120 h-120 absolute hidden lg:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
              <Image
                src="/page-1.png"
                alt="Aplikasi absensi sekolah"
                width={450}
                height={450}
                priority
                className="mt-25 hidden lg:block drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24" id="fitur">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
              Fitur Presently
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-500">
              Fitur unggulan yang memudahkan proses absensi di sekolah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-blue-50 rounded-3xl p-10 shadow-sm shadow-blue-200/50
                  hover:shadow-lg
                  transition-all duration-500 hover:-translate-y-4 
                  border border-gray-100 hover:border-transparent
                  hover:bg-linear-to-br hover:from-blue-50 hover:via-transparent hover:to-transparent"
            >
              <div className="btn-fitur rounded-full w-17 h-17 mb-4 flex flex-row items-center justify-center shadow-lg shadow-blue-400/50">
                <CalendarDays color="white" size={30} />
              </div>
              <div className="text-start">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Kalender Kehadiran
                  <br /> Siswa
                </h3>
                <p className="text-lg text-gray-600">
                  Menampilkan riwayat kehadiran siswa dalam bentuk kalender
                </p>
              </div>
            </div>
            <div
              className="bg-blue-50 rounded-3xl p-10 shadow-sm shadow-blue-200/50
                  hover:shadow-lg 
                  transition-all duration-500 hover:-translate-y-4 
                  border border-gray-100 hover:border-transparent
                  hover:bg-linear-to-br hover:from-blue-50 hover:via-transparent hover:to-transparent"
            >
              <div className="btn-fitur rounded-full w-17 h-17 mb-4 flex flex-row items-center justify-center shadow-lg shadow-blue-400/50">
                <ScanQrCode color="white" size={30} />
              </div>
              <div className="text-start">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Scan Qr Kehadiran
                </h3>
                <p className="text-lg text-gray-600">
                  Memudahkan proses absensi dengan teknologi QR Code
                </p>
              </div>
            </div>
            <div
              className="bg-blue-50 rounded-3xl p-10 shadow-sm shadow-blue-200/50
                  hover:shadow-lg 
                  transition-all duration-500 hover:-translate-y-4 
                  border border-gray-100 hover:border-transparent
                  hover:bg-linear-to-br hover:from-blue-50 hover:via-transparent hover:to-transparent"
            >
              <div className="btn-fitur rounded-full w-17 h-17 mb-4 flex flex-row items-center justify-center shadow-lg shadow-blue-400/50">
                <BookText color="white" size={30} />
              </div>
              <div className="text-start">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Jadwal Pelajaran
                  <br /> Harian
                </h3>
                <p className="text-lg text-gray-600">
                  Menampilkan jadwal pelajaran harian secara terstruktur
                </p>
              </div>
            </div>
            <div
              className="bg-blue-50 rounded-3xl p-10 shadow-sm shadow-blue-200/50
                  hover:shadow-lg 
                  transition-all duration-500 hover:-translate-y-4 
                  border border-gray-100 hover:border-transparent
                  hover:bg-linear-to-br hover:from-blue-50 hover:via-transparent hover:to-transparent"
            >
              <div className="btn-fitur rounded-full w-17 h-17 mb-4 flex flex-row items-center justify-center shadow-lg shadow-blue-400/50">
                <UsersRound color="white" size={30} />
              </div>
              <div className="text-start">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Daftar Absensi Siswa
                </h3>
                <p className="text-lg text-gray-600">
                  Menampilkan daftar absensi siswa berdasarkan kelas
                </p>
              </div>
            </div>
            <div
              className="bg-blue-50 rounded-3xl p-10 shadow-sm shadow-blue-200/50
                  hover:shadow-lg 
                  transition-all duration-500 hover:-translate-y-4 
                  border border-gray-100 hover:border-transparent
                  hover:bg-linear-to-br hover:from-blue-50 hover:via-transparent hover:to-transparent"
            >
              <div className="btn-fitur rounded-full w-17 h-17 mb-4 flex flex-row items-center justify-center shadow-lg shadow-blue-400/50">
                <ClipboardCheck color="white" size={30} />
              </div>
              <div className="text-start">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Pengajuan Izin <br /> dan Sakit
                </h3>
                <p className="text-lg text-gray-600">
                  Memudahkan siswa mengajukan izin atau sakit secara online
                </p>
              </div>
            </div>
            <div
              className="bg-blue-50 rounded-3xl p-10 shadow-sm shadow-blue-200/50
                  hover:shadow-lg 
                  transition-all duration-500 hover:-translate-y-4 
                  border border-gray-100 hover:border-transparent
                  hover:bg-linear-to-br hover:from-blue-50 hover:via-transparent hover:to-transparent"
            >
              <div className="btn-fitur rounded-full w-17 h-17 mb-4 flex flex-row items-center justify-center shadow-lg shadow-blue-400/50">
                <BellRing color="white" size={30} />
              </div>
              <div className="text-start">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Notifikasi Otomatis
                </h3>
                <p className="text-lg text-gray-600">
                  Mengirim notifikasi otomatis kepada guru dan siswa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-16 lg:py-24 mb-16"
        id="manfaat"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="absolute top-[-10%] right-0 lg:left-0 lg:top-0 w-50 h-50 lg:w-100 lg:h-100 btn-secondary rounded-full -z-10 blur-xl"></div>
          <div className="relative hidden lg:block">
            <Image
              src="/page-2.png"
              alt="page 2"
              width={700}
              height={700}
              className="relative z-10"
            />
          </div>
          <div className="">
            <p className="mb-2 text-xl text-gray-500">Manfaat</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Kenapa Harus Presently?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 text-start">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 btn-primary rounded-full shrink-0"></div>
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                  Mempercepat proses absensi siswa
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 btn-primary rounded-full shrink-0"></div>
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                  Mempermudah pendataan kehadiran siswa
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 btn-primary rounded-full shrink-0"></div>
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                  Meningkatkan kedisiplinan masuk kelas tepat waktu
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 btn-primary rounded-full shrink-0"></div>
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                  Memudahkan pengajuan izin dan sakit secara online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full" id="kontak">
        <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-8">
          <div className="bg-primary p-12 mb-20 text-start shadow-lg shadow-gray-400 border border-gray-50 rounded-4xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-50">
                  Tertarik dengan Presently?
                </h2>
                <p className="text-xl text-gray-950 md:text-2xl font-semibold">
                  Hubungi kami untuk mendapatkan info lebih lanjut
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <button className="bg-secondary text-xl font-bold text-white px-8 py-4 rounded-xl mt-4">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
