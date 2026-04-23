import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "SKINCARE", image: "/img1.png" },
  { name: "MAKEUP", image: "/img2.png" },
  { name: "HAIRCARE", image: "/img3.png" },
  { name: "BEAUTY KITS", image: "/img2.png" },
];

const Section = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f5f1ec] py-20">
      <h2 className="text-center text-3xl md:text-4xl font-serif text-[#7a4e57] mb-16">
        The Collections
        <div className="w-12 h-[2px] bg-[#7a4e57] mx-auto mt-3"></div>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-24 gap-y-12 px-6 justify-items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="text-center group cursor-pointer"
            // 🔥 CRITICAL: Must match path="/product2" in App.jsx exactly
            onClick={() => navigate(`/product2?category=${encodeURIComponent(item.name)}`)}
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
            </div>
            <p className="mt-6 text-base tracking-[4px] text-[#3b1f24] font-bold uppercase">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;