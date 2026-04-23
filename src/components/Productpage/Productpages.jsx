import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // ✅ ADD

// PRODUCTS (same as tera)
const products = [
  { id: 1, category: "SKINCARE", name: "Radiance Serum", price: "$45.00", image: "/skin1.jpg" },
  { id: 2, category: "MAKEUP", name: "Velvet Lip Kit", price: "$120.00", image: "/makeup.jpg" },
  { id: 3, category: "HAIRCARE", name: "Hair Growth Oil", price: "$58.00", image: "/hair1.jpg" },
  { id: 4, category: "SKINCARE", name: "Face Cleanser", price: "$34.00", image: "/skin.jpg" },
  { id: 5, category: "BEAUTY KITS", name: "Glow Kit", price: "$210.00", image: "/makup1.jpg" },
  { id: 6, category: "MAKEUP", name: "Brush Set", price: "$85.00", image: "/makeup2.jpg" },
  { id: 7, category: "HAIRCARE", name: "Shampoo Pro", price: "$40.00", image: "/shampoo.jpg" },
  { id: 8, category: "SKINCARE", name: "Hydra Cream", price: "$60.00", image: "/skin2.jpg" },
  { id: 9, category: "MAKEUP", name: "Matte Foundation", price: "$95.00", image: "/makeup3.jpg" },
  { id: 10, category: "HAIRCARE", name: "Hair Serum Pro", price: "$50.00", image: "/hair2.jpg" },
  { id: 11, category: "BEAUTY KITS", name: "Bridal Kit", price: "$250.00", image: "/kit2.jpg" },
  { id: 12, category: "SKINCARE", name: "Night Repair Cream", price: "$70.00", image: "/skin3.jpg" },
];

const categories = ["ALL", "SKINCARE", "MAKEUP", "HAIRCARE", "BEAUTY KITS"];

const Productpages = () => {
  const [searchParams] = useSearchParams(); // ✅ ADD
  const categoryFromURL = searchParams.get("category"); // ✅ ADD

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(5);

  // 🔥 AUTO SELECT
  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className="bg-[#f5f1ec] min-h-screen px-6 md:px-16 py-20">

      <div className="grid md:grid-cols-4 gap-16">

        {/* CATEGORY */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
          <h2 className="text-lg font-serif mb-6 text-[#7a4e57]">
            Categories
          </h2>

          <div className="space-y-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(5);
                }}
                className="cursor-pointer"
              >
                <span className={selectedCategory === cat ? "text-[#7a4e57] font-bold" : ""}>
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-[300px] object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500">{item.category}</p>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-[#7a4e57]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Productpages; // ⚠️ NAME FIX