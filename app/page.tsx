"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [hideElements, setHideElements] = useState(false);

  const handleClick = () => {
    setHideElements(!hideElements);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-700 ${
        hideElements
          ? "bg-white"
          : "bg-[radial-gradient(circle_at_center,#e84937_0%,#e2d1d6_40%)]"
      }`}
      onClick={handleClick}
    >
      {/* Judul di belakang gambar */}
      <h1
        className={`absolute top-14 text-[180px] font-bold font-Museo text-rose-900 z-0 transition-all duration-700 ${
          hideElements
            ? "opacity-0 -translate-y-[50px]"
            : "opacity-100 translate-y-0"
        }`}
      >
        meeve
      </h1>

      {/* Gambar Utama */}
      <div className="relative flex items-center justify-center mt-24 z-10">
        <Image
          src="/box.png"
          alt="Box"
          width={280}
          height={360}
          className={`z-10 rotate-[-10deg] transition-all duration-700 ${
            hideElements ? "animate-none" : "animate-boxFloat"
          }`}
        />
        <Image
          src="/sachet.png"
          alt="Sachet"
          width={200}
          height={380}
          className={`z-20 -ml-40 rotate-[5deg] transition-all duration-700 ${
            hideElements ? "animate-none" : "animate-sachetFloat"
          }`}
        />
      </div>

      {/* Subtitle */}
      <h3
        className={`mt-6 text-rose-800 text-xl transition-all duration-700 ${
          hideElements
            ? "opacity-0 translate-y-[50px]"
            : "opacity-100 translate-y-0"
        }`}
      >
        Your Wellness Journey
      </h3>

      {/* Ornamen Daun */}
      <Image
        src="/leaf1.png"
        alt="Leaf"
        width={100}
        height={100}
        className={`absolute top-24 left-16 animate-float-slow transition-all duration-700 ${
          hideElements
            ? "opacity-0 -translate-x-[200px]"
            : "opacity-100 translate-x-0"
        }`}
      />
      <Image
        src="/leaf2.png"
        alt="Leaf"
        width={90}
        height={90}
        className={`absolute top-40 right-20 animate-float-fast transition-all duration-700 ${
          hideElements
            ? "opacity-0 translate-x-[200px]"
            : "opacity-100 translate-x-0"
        }`}
      />
      <Image
        src="/leaf3.png"
        alt="Leaf"
        width={110}
        height={110}
        className={`absolute bottom-40 left-28 animate-float-slow transition-all duration-700 ${
          hideElements
            ? "opacity-0 -translate-x-[200px]"
            : "opacity-100 translate-x-0"
        }`}
      />
      <Image
        src="/leaf4.png"
        alt="Leaf"
        width={95}
        height={95}
        className={`absolute bottom-32 right-28 animate-float-medium transition-all duration-700 ${
          hideElements
            ? "opacity-0 translate-x-[200px]"
            : "opacity-100 translate-x-0"
        }`}
      />

      {/* Tambahan daun extra biar lebih rame */}
      <Image
        src="/leaf1.png"
        alt="Leaf"
        width={120}
        height={120}
        className={`absolute top-10 right-1/4 animate-float-medium transition-all duration-700 ${
          hideElements
            ? "opacity-0 -translate-y-[200px]"
            : "opacity-100 translate-y-0"
        }`}
      />
      <Image
        src="/leaf2.png"
        alt="Leaf"
        width={180}
        height={180}
        className={`absolute bottom-10 left-1/3 animate-float-fast transition-all duration-700 ${
          hideElements
            ? "opacity-0 translate-y-[200px]"
            : "opacity-100 translate-y-0"
        }`}
      />

      <Image
        src="/leaf4.png"
        alt="Leaf"
        width={180}
        height={180}
        className={`absolute bottom-20 right-1/4 animate-float-medium transition-all duration-700 ${
          hideElements
            ? "opacity-0 translate-x-[200px]"
            : "opacity-100 translate-x-0"
        }`}
      />
    </div>
  );
}
