import React from "react";

const OurMission = () => {
  return (
    <section className="bg-[#f5f1ec] py-24 px-6 md:px-16 min-h-[80vh] flex items-center">

      {/* 🔥 MAIN CONTAINER */}
      <div className="grid md:grid-cols-2 gap-10 w-full">

        {/* 🔥 LEFT BOX (MISSION) */}
        <div className="bg-[#f0ebe7] rounded-[30px] p-12 min-h-[350px] flex flex-col justify-between shadow-sm">

          <div>
            <h2 className="text-4xl font-serif text-[#6b4a4a] mb-6">
              Our Mission
            </h2>

            <p className="text-[#6d5c57] text-lg leading-relaxed max-w-xl">
              To empower global retailers by providing a curated collection
              of high-efficacy beauty solutions that prioritize integrity,
              inclusivity, and impeccable quality.
            </p>
          </div>

          {/* 🔥 BOTTOM LINE */}
          <div className="flex items-center gap-4 mt-12">
            <div className="w-12 h-[1px] bg-[#cbbfb9]"></div>
            <p className="text-xs tracking-widest text-[#6d5c57] uppercase">
              Committed to Excellence
            </p>
          </div>

        </div>

        {/* 🔥 RIGHT BOX (VISION) */}
        <div className="bg-[#7b5963] rounded-[30px] p-12 text-white min-h-[350px] flex flex-col justify-between shadow-md">

          <div>
            <h2 className="text-4xl font-serif mb-6">
              Our Vision
            </h2>

            <p className="text-lg leading-relaxed max-w-md text-white/90">
              Setting the gold standard for beauty distribution, where every
              product tells a story of heritage and innovation.
            </p>
          </div>

          {/* 🔥 ICON */}
          <div className="text-2xl opacity-70 mt-12">
            ✨
          </div>

        </div>

        

      </div>

    </section>

  );
};

export default OurMission;