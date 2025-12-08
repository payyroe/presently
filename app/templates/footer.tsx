import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-16">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4  bottom-0 left-0 right-0">
        <div className="py-4 px-6 grid grid-row-1 md:grid-rows-4">
          <h2 className="text-3xl font-bold text-white mb-4">Presently</h2>
          <p className="text-gray-400">
            Aplikasi Presensi Online untuk Guru dan Siswa
          </p>
        </div>
        <div className="py-4 px-6 grid-row-1 md:grid-rows-4">
          <h3 className="text-xl font-semibold text-white mb-4">Navigasi</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Beranda
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Fitur
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Manfaat
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Kontak Kami
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4 px-6 grid-row-1 md:grid-rows-4">
          <h3 className="text-xl font-semibold text-white mb-4">Bantuan</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Dukungan
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Panduan Pengguna
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4 px-6 grid-row-1 md:grid-rows-4">
          <h3 className="text-xl font-semibold text-white mb-4">Kontak</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              Email:{" "}
              <a href="/" className="hover:text-white">
                fairuzdzakiyya20@gmail.com
              </a>
            </li>
            <li className="flex flex-cols gap-3 mt-3">
              <a href="https://www.instagram.com/payyroe/">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.linkedin.com/in/fairuz-dzakiyya-akmal/">
                <FaLinkedin size={25} />
              </a>
              <a href="https://github.com/payyroe">
                <FaGithub size={25} />
              </a>
            </li> 
          </ul>
        </div>
      </div>
    </footer>
  );
}
