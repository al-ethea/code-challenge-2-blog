"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-5 bg-white text-black border-b border-gray-200 h-16 fixed top-0 left-0 right-0 z-50">
        {/* Navigation Links (Left) - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden md:flex space-x-3">
          <Link href="/blogs-page">
            <h1 className="hover:bg-bl-hover hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
              Blog Posts
            </h1>
          </Link>
          <Link href="/categories">
            <h1 className="hover:bg-bl-hover hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
              Categories
            </h1>
          </Link>
          <Link href="/about-us">
            <h1 className="hover:bg-bl-hover hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
              About Us
            </h1>
          </Link>
        </div>

        {/* Logo (Center) */}
        <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <div className="rounded-full relative h-12 w-12">
              <Image src="/logo.jpg" alt="" fill className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Search Icon (Right) */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:block">
            <IoSearch className="text-2xl hover:text-bl-hover" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              <BsList className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Displayed when Hamburger is clicked */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white z-40 p-4 border-b border-gray-200 md:hidden">
          <div className="flex flex-col space-y-4 text-black">
            <Link href="/blogs-page">
              <h1 className="hover:bg-bl-hover hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
                Blog Posts
              </h1>
            </Link>
            <Link href="/categories">
              <h1 className="hover:bg-bl-hover hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
                Categories
              </h1>
            </Link>
            <Link href="/about-us">
              <h1 className="hover:bg-bl-hover hover:text-white rounded-lg px-4 py-2 transition-all duration-300">
                About Us
              </h1>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
