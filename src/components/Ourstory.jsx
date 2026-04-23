import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#f9f6f2]">

      {/* 🔥 OUR STORY SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center mt-10 mb-20 px-6 md:px-16 gap-16">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2">

          <h2 className="text-6xl md:text-7xl font-serif mb-6 leading-tight bg-gradient-to-r from-[#3e2723] via-[#6b4a4a] to-[#a1887f] text-transparent bg-clip-text">
            Our Story
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#d6a4a4] to-[#8d6e63] mb-10 rounded-full"></div>

          <p className="text-[#4e3b36] mb-6 text-lg leading-relaxed tracking-wide font-medium">
            Founded on the principle that beauty is a universal language of confidence,
            <span className="text-[#2e1f1b] font-semibold"> Khubsurat </span>
            began as a boutique atelier — blending artistry with authenticity to redefine elegance.
          </p>

          <p className="text-[#5d4a45] mb-10 text-lg leading-relaxed tracking-wide">
            Today, we stand as a trusted partner for retailers who seek
            <span className="font-semibold text-[#3e2723]"> uncompromised luxury </span>
            and timeless quality in every product.
          </p>

          <button className="relative px-10 py-4 text-lg rounded-full text-white font-semibold overflow-hidden group shadow-lg">
            <span className="absolute inset-0 bg-gradient-to-r from-[#c48b8b] via-[#a47171] to-[#7b4f4f] transition duration-500 group-hover:scale-110"></span>
            <span className="relative z-10 tracking-wide">
              Partner With Us →
            </span>
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 relative group">

          {/* 🔥 GOLDEN PLATE BACKGROUND */}
          <div className="absolute inset-0 rounded-3xl 
            bg-gradient-to-br from-[#d4af37] via-[#ffd700] to-[#b8962e] 
            shadow-2xl"></div>

          {/* 🔥 IMAGE CARD */}
          <div className="relative m-4 rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="/story.jpg"
              alt="Our Story"
              className="w-full h-[75vh] object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000040] via-transparent to-transparent"></div>

            {/* Floating Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm tracking-widest opacity-80">SINCE 2020</p>
              <h3 className="text-2xl font-serif">Crafting Beauty</h3>
            </div>

          </div>

        </div>

      </section>


      {/* 🔥 WHY CHOOSE SECTION */}
      <section className="bg-[#f5f1ec] py-24 px-6 md:px-16">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#6b4a4a] mb-4">
            Why Choose Khubsurat
          </h2>
          <p className="text-[#6d5c57] text-lg max-w-2xl mx-auto">
            The preferred wholesale destination for premium beauty brands and discerning retailers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#f0ebe7] p-10 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-3 group">
            <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition">
              🛡️
            </div>
            <h3 className="text-2xl font-serif text-[#6b4a4a] mb-4">
              Unwavering Trust
            </h3>
            <p className="text-[#6d5c57] leading-relaxed">
              We maintain transparent supply chains and long-term partnerships built on mutual growth and ethical practices.
            </p>
          </div>

          <div className="bg-[#f0ebe7] p-10 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-3 group">
            <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition">
              💎
            </div>
            <h3 className="text-2xl font-serif text-[#6b4a4a] mb-4">
              Superior Quality
            </h3>
            <p className="text-[#6d5c57] leading-relaxed">
              Every product undergoes rigorous quality checks to meet the highest luxury standards.
            </p>
          </div>

          <div className="bg-[#f0ebe7] p-10 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-3 group">
            <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition">
              🚚
            </div>
            <h3 className="text-2xl font-serif text-[#6b4a4a] mb-4">
              Bespoke Reliability
            </h3>
            <p className="text-[#6d5c57] leading-relaxed">
              Our logistics ensure speed, precision, and consistent availability for your shelves.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;