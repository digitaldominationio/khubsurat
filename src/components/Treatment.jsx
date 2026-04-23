import React, { useState } from "react";

const treatments = [
  {
    title: "Skin Treatments",
    desc: "Pamper your skin with luxurious facials, deep cleansing, and rejuvenation therapies designed to give you a natural glow.",
    image: "/skin.jpg",
    details:
      "Our skin treatments include hydrafacial, chemical peels, acne treatment, and advanced skin rejuvenation to improve texture and glow.",
  },
  {
    title: "Hair Treatments",
    desc: "Strengthen and nourish your hair with advanced treatments for hair fall, dandruff, and scalp health.",
    image: "/hair.jpg",
    details:
      "We offer PRP therapy, hair spa, dandruff control, and hair fall treatments that improve scalp health and promote growth.",
  },
  {
    title: "Anti-Aging Treatments",
    desc: "Reduce wrinkles and restore youthful skin with Botox, fillers, and skin tightening solutions.",
    image: "/anti.jpg",
    details:
      "Includes Botox, dermal fillers, anti-aging facials, and skin tightening procedures for youthful skin.",
  },
  {
    title: "Laser Treatments",
    desc: "Safe and effective laser solutions for hair removal, pigmentation, and skin resurfacing.",
    image: "/laser.jpg",
    details:
      "Advanced laser technology for permanent hair reduction, acne scars, pigmentation, and skin glow.",
  },
  {
    title: "Body Contouring",
    desc: "Shape your body with non-invasive fat reduction and skin tightening treatments.",
    image: "/body.jpg",
    details:
      "Body contouring includes fat reduction, skin tightening, and body sculpting treatments.",
  },
];

const Treatment = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#f6f2ee] py-24 px-6 md:px-12">

      {/* 🔥 TITLE */}
      <div className="text-center mb-20">
        <p className="tracking-[5px] text-sm text-gray-500">
          OUR SERVICES
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#1f3d3d] mt-4">
          We Provide The Best Treatments For You
        </h2>
      </div>

      {/* 🔥 LIST */}
      <div className="flex flex-col gap-24">

        {treatments.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-16 items-center"
          >

            {/* IMAGE */}
            <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-h-[420px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
              <h3 className="text-3xl md:text-4xl font-serif text-[#1f3d3d] mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelected(item)}
                  className="bg-[#c47a7a] text-white px-7 py-3 rounded-full hover:scale-105 transition"
                >
                  Know More »
                </button>

                <button className="border border-[#c47a7a] text-[#c47a7a] px-7 py-3 rounded-full hover:bg-[#c47a7a] hover:text-white transition">
                  Get Appointment »
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              {selected.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {selected.details}
            </p>
          </div>

        </div>
      )}
    </section>
  );
};

export default Treatment;