"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className="backdrop-blur-md bg-white/70 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0">
                <h1 className="text-2xl font-semibold text-gray-700">
                  Presently
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
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
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <X
                    className="block h-6 w-6 text-gray-700"
                    aria-hidden="true"
                  />
                ) : (
                  <Menu
                    className="block h-6 w-6 text-gray-700"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pb-4 space-y-4 sm:px-8">
              <Link
                href="#beranda"
                className="block text-lg text-gray-600 hover:text-gray-800"
              >
                Beranda
              </Link>
              <Link
                href="#fitur"
                className="block text-lg text-gray-600 hover:text-gray-800"
              >
                Fitur
              </Link>
              <Link
                href="#manfaat"
                className="block text-lg text-gray-600 hover:text-gray-800"
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
                className="block btn-primary text-xl font-semibold text-white px-4 py-2 rounded-full"
              >
                Kontak Kami
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
