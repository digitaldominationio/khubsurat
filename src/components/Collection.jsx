// import React from "react";

// const products = [
//   {
//     id: 1,
//     category: "SKINCARE",
//     name: "Silk Radiance Serum",
//     price: "$45.00",
//     image: "/img1.png",
//     tag: "Premium",
//   },
//   {
//     id: 2,
//     category: "MAKEUP",
//     name: "Velvet Matte Lip Suite",
//     price: "$120.00",
//     image: "/img2.png",
//   },
//   {
//     id: 3,
//     category: "HAIRCARE",
//     name: "Oud Essence Hair Oil",
//     price: "$58.00",
//     image: "/img3.png",
//     tag: "Bestseller",
//   },
//   {
//     id: 4,
//     category: "SKINCARE",
//     name: "Botanical Cleansing Balm",
//     price: "$34.00",
//     image: "/img1.png",
//   },
//   {
//     id: 5,
//     category: "BEAUTY KITS",
//     name: "Ethereal Glow Travel Set",
//     price: "$210.00",
//     image: "/img2.png",
//   },
//   {
//     id: 6,
//     category: "MAKEUP",
//     name: "Artisan Brush Collection",
//     price: "$85.00",
//     image: "/img3.png",
//   },
// ];

// const Collection = () => {
//   return (
//     <section className="bg-[#f5f1ec] min-h-screen px-6 md:px-12 py-10">

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* 🔥 LEFT FILTER */}
//         <div className="space-y-8">

//           <h2 className="text-2xl font-serif text-[#7a4e57]">
//             Categories
//           </h2>

//           <div className="space-y-3 text-gray-700">
//             <p className="flex items-center gap-2">
//               <input type="radio" defaultChecked /> Skincare
//             </p>
//             <p className="flex items-center gap-2">
//               <input type="radio" /> Makeup
//             </p>
//             <p className="flex items-center gap-2">
//               <input type="radio" /> Haircare
//             </p>
//             <p className="flex items-center gap-2">
//               <input type="radio" /> Beauty Kits
//             </p>
//           </div>

//           {/* Range */}
//           <div>
//             <h3 className="text-lg font-medium mb-3">Wholesale Range</h3>
//             <input type="range" className="w-full accent-[#7a4e57]" />
//             <div className="flex justify-between text-sm mt-2">
//               <span>$50</span>
//               <span>$5,000+</span>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="bg-[#f3e7e4] p-6 rounded-2xl">
//             <h3 className="font-semibold text-lg mb-2">
//               Wholesale Benefits
//             </h3>
//             <p className="text-sm text-gray-600 mb-4">
//               Partner with us for exclusive b2b pricing and early access.
//             </p>
//             <button className="text-[#7a4e57] font-medium">
//               APPLY NOW
//             </button>
//           </div>
//         </div>

//         {/* 🔥 RIGHT PRODUCTS */}
//         <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
//             >

//               {/* IMAGE */}
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-[280px] object-cover"
//                 />

//                 {/* TAG */}
//                 {item.tag && (
//                   <span className="absolute top-4 left-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
//                     {item.tag}
//                   </span>
//                 )}
//               </div>

//               {/* CONTENT */}
//               <div className="p-5 space-y-2">
//                 <p className="text-xs tracking-wide text-gray-400">
//                   {item.category}
//                 </p>

//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.name}
//                 </h3>

//                 <div className="flex items-center justify-between mt-3">
//                   <p className="text-[#7a4e57] font-semibold">
//                     {item.price}
//                   </p>

//                   <button className="bg-gradient-to-r from-[#c48b9f] to-[#7a4e57] text-white text-sm px-4 py-2 rounded-full hover:scale-105 transition">
//                     BUY NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* 🔥 LOAD MORE */}
//       <div className="flex justify-center mt-16">
//         <button className="border border-gray-400 px-8 py-3 rounded-full text-gray-700 hover:bg-gray-200 transition">
//           LOAD MORE ARTISTRY ↓
//         </button>
//       </div>

//     </section>
//   );
// };

// export default Collection;