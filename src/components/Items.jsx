import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products.js";

const Product = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f4efeb] py-20 px-12">

      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-[44px] font-serif text-[#6d4c53]">
          Featured Selection
        </h2>
        <p className="text-gray-500 mt-2 text-[15px]">
          Premium products available for enquiry
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#f7f3ef] rounded-[32px] p-4 shadow-sm hover:shadow-lg transition"
          >

            {/* IMAGE */}
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              className="bg-[#efe6df] rounded-[28px] p-4 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[320px] object-cover rounded-[20px] hover:scale-105 transition"
              />
            </div>

            {/* TEXT */}
            <div className="mt-5 px-2">
              <p className="text-[11px] tracking-[2px] text-gray-400 uppercase">
                {item.category}
              </p>

              <h3 className="text-[18px] font-medium text-[#3b1f24] mt-1">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Enquiry only • Premium Quality
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Product;