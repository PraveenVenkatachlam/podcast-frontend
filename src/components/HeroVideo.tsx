"use client";

export default function HeroVideo() {
  return (
  <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-4 absolute top-0 left-0 w-full z-20">
        
        {/* Left – Logo */}
        <h1 className="text-white text-2xl font-bold">Stream Studio</h1>

        {/* Center menu */}
        <div className="flex items-center gap-6 text-white">
          <button className="rounded-full h-40px px-5 bg-blue-500 text-white">
            Podcasting
          </button>
          <button>Solution</button>
          <button>Pricing</button>
          <button>Resources</button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full px-4 py-1 text-black"
          />
          <button className="text-white">Log in</button>
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </nav>

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
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
          <h1 className="text-white text-5xl font-bold">
            Create your best content yet.
          </h1>
        </div>
      </div>
  </>

  );
}