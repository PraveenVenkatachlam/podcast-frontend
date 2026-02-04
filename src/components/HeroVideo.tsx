"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroVideo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 absolute top-0 left-0 w-full z-20">
        
        {/* Left – Logo */}
        <Link href="/">
          <h1 className="text-white text-xl sm:text-2xl font-bold">Podcast Studio</h1>
        </Link>

        {/* Center menu - Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-white">
          <button className="rounded-full px-4 lg:px-5 py-2 bg-blue-500 text-white text-sm lg:text-base">
            Podcasting
          </button>
          <button className="hover:text-gray-300 transition-colors text-sm lg:text-base">
            Solution
          </button>
          <Link href="/price" className="hover:text-gray-300 transition-colors text-sm lg:text-base">
            Pricing
          </Link>
          <button className="hover:text-gray-300 transition-colors text-sm lg:text-base">
            Resources
          </button>
        </div>

        {/* Right side - Desktop */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full px-3 lg:px-4 py-1 text-black text-sm lg:text-base w-24 lg:w-auto"
          />
          <Link href="/login" className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base">
            Log in
          </Link>
          <Link href="/signup">
            <button className="bg-white text-black px-3 lg:px-4 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm lg:text-base">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? (
            // Close Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/95">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col items-center gap-6 pt-10">
            {/* Search */}
            <input
              type="text"
              placeholder="Search"
              className="rounded-full px-4 py-2 text-black w-64"
            />

            {/* Menu Links */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-full px-6 py-2 bg-blue-500 text-white text-lg"
            >
              Podcasting
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg hover:text-gray-300 transition-colors"
            >
              Solution
            </button>
            <Link 
              href="/price" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg hover:text-gray-300 transition-colors"
            >
              Pricing
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg hover:text-gray-300 transition-colors"
            >
              Resources
            </button>

            {/* Divider */}
            <div className="w-64 h-px bg-gray-700 my-4"></div>

            {/* Auth Buttons */}
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg hover:text-gray-300 transition-colors"
            >
              Log in
            </Link>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-lg">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* HERO VIDEO */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Create your best content yet.
          </h1>
        </div>
      </div>
    </>
  );
}