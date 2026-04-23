import React from "react";
import { Plus, BadgeCheck, Truck, Banknote } from "lucide-react";

const products = [
    {
        id: 1,
        category: "MAKEUP",
        name: "Silk Matte Lipstick",
        price: 45,
        image:
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800",
    },
    {
        id: 2,
        category: "SKINCARE",
        name: "Radiance Elixir",
        price: 82,
        image: "/product2.jpg",
    },
    {
        id: 3,
        category: "SKINCARE",
        name: "Velvet Night Balm",
        price: 68,
        image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800",
        tag: "PREMIUM",
    },
    {
        id: 4,
        category: "MAKEUP",
        name: "Desert Rose Palette",
        price: 54,
        image:
            "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800",
    },
];

const features = [
    {
        icon: <Banknote size={28} />,
        title: "Wholesale Pricing",
        desc: "Direct access to premium formulations at unmatched industry rates.",
    },
    {
        icon: <BadgeCheck size={28} />,
        title: "Trusted Quality",
        desc: "Each batch is rigorously tested for potency, purity, and aesthetic perfection.",
    },
    {
        icon: <Truck size={28} />,
        title: "Fast Shipping",
        desc: "Global logistics ensuring your products arrive in pristine condition, rapidly.",
    },
];

const Product = () => {
    return (
        <>
         
            {/* 🔥 PRODUCT SECTION */}
            <section className="bg-[#f4efeb] py-20">

                {/* HEADER */}
                <div className="flex justify-between items-end px-12 mb-16">
                    <div>
                        <h2 className="text-[44px] font-serif text-[#6d4c53]">
                            Featured Selection
                        </h2>
                        <p className="text-gray-500 mt-2 text-[15px]">
                            Curated masterpieces for your vanity.
                        </p>
                    </div>

                    <button className="text-[#6d4c53] border-b border-[#6d4c53] pb-1">
                        View All Products
                    </button>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-12">

                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#f7f3ef] rounded-[32px] p-4"
                        >

                            {/* IMAGE FRAME */}
                            <div className="bg-[#efe6df] rounded-[28px] p-4">
                                <div className="rounded-[24px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-[320px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* TEXT */}
                            <div className="mt-5 px-2">

                                <p className="text-[11px] tracking-[2px] text-gray-400 uppercase">
                                    {item.category}
                                </p>

                                <h3 className="text-[18px] font-medium text-[#3b1f24] mt-1">
                                    {item.name}
                                </h3>

                                <div className="flex items-center justify-between mt-4">

                                    <div className="flex items-center gap-2">
                                        <p className="text-[16px] font-semibold">
                                            ${item.price}.00
                                        </p>

                                        {item.tag && (
                                            <span className="text-[10px] bg-yellow-400 px-2 py-[3px] rounded-full">
                                                {item.tag}
                                            </span>
                                        )}
                                    </div>

                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e7d3c8] hover:bg-[#d9bfb2] transition">
                                        <Plus size={16} />
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </section>


            {/* 🔥 PREMIUM FEATURES SECTION */}
            <section className="bg-[#f4efeb] py-28 px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                        >

                            {/* 🔥 GLOW EFFECT */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                            {/* 🔥 ICON */}
                            <div className="relative z-10 w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#e8c3d0] to-[#d6a9b8] text-[#6d4c53] mb-6 group-hover:scale-110 transition duration-500 shadow-lg">

                                {/* inner ring */}
                                <div className="absolute inset-0 rounded-full border border-white/40"></div>

                                {item.icon}
                            </div>

                            {/* 🔥 TITLE */}
                            <h3 className="relative z-10 text-xl font-semibold text-[#5a3d42] mb-3 group-hover:text-black transition">
                                {item.title}
                            </h3>

                            {/* 🔥 DESC */}
                            <p className="relative z-10 text-gray-500 text-[15px] leading-relaxed">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

            {/* 🔥 TESTIMONIAL SECTION */}
<section className="bg-[#f4efeb] py-28 px-12">

{/* TITLE */}
<div className="text-center mb-16">
  <p className="text-[12px] tracking-[4px] text-gray-400 uppercase mb-2">
    Testimonials
  </p>
  <h2 className="text-[44px] font-serif text-[#6d4c53]">
    What Our Clients Say
  </h2>
</div>

{/* CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

  {/* CARD 1 */}
  <div className="bg-[#f7f3ef] rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

    {/* STARS */}
    <div className="flex gap-1 mb-4 text-yellow-400">
      ⭐ ⭐ ⭐ ⭐ ⭐
    </div>

    {/* TEXT */}
    <p className="text-[#4a2c32] italic leading-relaxed mb-6">
      "The quality of the Radiance Elixir is superior to any boutique brand I've stocked. My clients are absolutely obsessed with the immediate results."
    </p>

    {/* USER */}
    <div className="flex items-center gap-4">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="text-sm font-semibold text-[#3b1f24]">
          Elena Rodriguez
        </h4>
        <p className="text-xs text-gray-500">Spa Director, NY</p>
      </div>
    </div>

  </div>

  {/* CARD 2 */}
  <div className="bg-[#f7f3ef] rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

    {/* STARS */}
    <div className="flex gap-1 mb-4 text-yellow-400">
      ⭐ ⭐ ⭐ ⭐ ⭐
    </div>

    {/* TEXT */}
    <p className="text-[#4a2c32] italic leading-relaxed mb-6">
      "Khubsurat has transformed our inventory. The packaging is as exquisite as the formulations themselves. A true wholesale partner."
    </p>

    {/* USER */}
    <div className="flex items-center gap-4">
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="text-sm font-semibold text-[#3b1f24]">
          Sarah Chen
        </h4>
        <p className="text-xs text-gray-500">Beauty Retailer</p>
      </div>
    </div>

  </div>

</div>

</section>

        </>
    );
};

export default Product;