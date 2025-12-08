"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-white/70 px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700">Presently</h1>
        <nav className="flex items-center gap-8">
          <Link
            href="#beranda"
            className="text-lg text-gray-600 hover:text-gray-800"
          >
            Beranda
          </Link>
          <Link
            href="#fitur"
            className="text-lg text-gray-600 hover:text-gray-800"
          >
            Fitur
          </Link>
          <Link
            href="#manfaat"
            className="text-lg text-gray-600 hover:text-gray-800"
          >
            Manfaat
          </Link>
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("kontak")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary text-xl font-semibold text-white px-4 py-2 rounded-full"
          >
            Kontak Kami
          </button>
        </nav>
      </div>
    </header>
  );
}
