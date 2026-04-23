import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/Banner1.jpeg",
    title: "Enhance Your Beauty",
    subtitle: "Glow with confidence every day",
    position: "center",
  },
  {
    image: "/Banner2.jpg",
    title: "Luxury Skincare",
    subtitle: "Feel the natural elegance",
    position: "top",
  },
  {
    image: "/Banner3.jpg",
    title: "Try to Be Your Best",
    subtitle: "Because you deserve perfection",
    position: "center",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="
      relative w-full 
      h-[50vh] 
      sm:h-[60vh] 
      md:h-[75vh] 
      lg:h-[85vh] 
      xl:h-[90vh] 
      pt-16 
      overflow-hidden
    ">

      {/* 🔥 SLIDER */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative overflow-hidden">

            {/* ✅ RESPONSIVE COVER IMAGE */}
            <img
              src={slide.image}
              alt="hero"
              className={`w-full h-full object-cover ${
                slide.position === "top"
                  ? "object-top"
                  : slide.position === "bottom"
                  ? "object-bottom"
                  : "object-center"
              }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* 🔥 TEXT */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 max-w-2xl">

          <div className="w-10 sm:w-14 h-2 sm:h-3 bg-yellow-400 mb-3 sm:mb-5"></div>

          <h1 className="
            text-2xl 
            sm:text-3xl 
            md:text-5xl 
            lg:text-7xl 
            font-serif 
            text-white 
            leading-tight
          ">
            {slides[current].title}
          </h1>

          <p className="
            mt-2 sm:mt-4 
            text-sm 
            sm:text-base 
            md:text-xl 
            text-white/90
          ">
            {slides[current].subtitle}
          </p>

        </div>
      </div>

      {/* 🔥 CONTROLS */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white px-2 sm:px-3 py-1 sm:py-2 rounded-full z-20"
      >
        ❮
      </button>

      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white px-2 sm:px-3 py-1 sm:py-2 rounded-full z-20"
      >
        ❯
      </button>

      {/* 🔥 DOTS */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all ${
              current === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;