"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon hamburger & close

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // tutup menu otomatis setelah klik di mobile
  };

  return (
    <header className="backdrop-blur-md bg-white/80 px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-9xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Presently</h1>

        <nav className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection("beranda")} className="text-lg text-gray-600 hover:text-gray-900 transition">
            Beranda
          </button>
          <button onClick={() => scrollToSection("fitur")} className="text-lg text-gray-600 hover:text-gray-900 transition">
            Fitur
          </button>
          <button onClick={() => scrollToSection("manfaat")} className="text-lg text-gray-600 hover:text-gray-900 transition">
            Manfaat
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="btn-primary text-lg text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition"
          >
            Kontak Kami
          </button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 text-2xl">
          <button onClick={() => scrollToSection("beranda")} className="text-gray-800 hover:text-gray-600">
            Beranda
          </button>
          <button onClick={() => scrollToSection("fitur")} className="text-gray-800 hover:text-gray-600">
            Fitur
          </button>
          <button onClick={() => scrollToSection("manfaat")} className="text-gray-800 hover:text-gray-600">
            Manfaat
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-xl shadow-lg"
          >
            Kontak Kami
          </button>
        </div>
      </div>
    </header>
  );
}