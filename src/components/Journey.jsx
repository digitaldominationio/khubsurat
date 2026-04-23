import React from "react";

const Journey = () => {
  return (
    <section className="w-full px-6 md:px-16 py-24 bg-[#f5f1ec]">

      {/* MAIN CONTAINER */}
      <div className="relative rounded-[40px] overflow-hidden shadow-sm">

        {/* 🔥 BACKGROUND IMAGE */}
        <img
          src="/Banner1.jpeg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🔥 OVERLAY (GLASS EFFECT) */}
        <div className="absolute inset-0 bg-[#ede9e6]/80 backdrop-blur-md"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-16 py-28 flex items-center justify-center">

          <div className="text-center max-w-2xl">

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-serif text-[#6b4a4a] mb-6">
              Start Your Journey With Us
            </h2>

            {/* TEXT */}
            <p className="text-[#6d5c57] text-lg leading-relaxed mb-10">
              Discover how our wholesale solutions can elevate your retail portfolio.
              We provide more than products—we provide a vision.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">

              {/* INQUIRE */}
              <button className="relative px-10 py-4 rounded-full text-white font-medium overflow-hidden group
                bg-gradient-to-r from-[#b07a7a] to-[#d6a4a4] 
                shadow-md hover:scale-105 hover:shadow-xl transition duration-300">

                <span className="absolute top-0 left-[-100%] w-full h-full 
                  bg-gradient-to-r from-transparent via-white/40 to-transparent 
                  group-hover:left-[100%] transition-all duration-700"></span>

                <span className="relative z-10">
                  INQUIRE NOW
                </span>
              </button>

              {/* DOWNLOAD */}
              <button className="relative px-10 py-4 rounded-full font-medium overflow-hidden group
                border border-[#6b4a4a] text-[#6b4a4a] 
                hover:text-white transition duration-300">

                <span className="absolute inset-0 bg-[#6b4a4a] scale-x-0 origin-left 
                  group-hover:scale-x-100 transition duration-500"></span>

                <span className="absolute top-0 left-[-100%] w-full h-full 
                  bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  group-hover:left-[100%] transition-all duration-700"></span>

                <span className="relative z-10">
                  DOWNLOAD CATALOG
                </span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Journey;