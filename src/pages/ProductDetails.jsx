import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    const [selectedImage, setSelectedImage] = useState(product?.image);

    if (!product) return <h1 className="p-10 text-center">Product not found</h1>;

    const phoneNumber = "+919876543210";
    const whatsappMessage = `Hi, I am interested in purchasing: ${product.name}`;

    return (
        <>
            <Navbar />

            {/* Main Container: Added responsive margin-top and padding */}
            <div className="max-w-7xl mx-auto bg-white mt-20 md:mt-14 shadow-sm pb-10 md:pb-20">

                {/* Breadcrumbs: Visible on all, but text-wrap on mobile */}
                <div className="p-4 text-[10px] md:text-xs text-gray-500 truncate md:text-clip">
                    <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
                    &gt;
                    <Link to={`/product2?category=${product.category}`} className="hover:text-pink-600 transition-colors mx-1">
                        {product.category || "Products"}
                    </Link>
                    &gt;
                    <span className="text-gray-400 font-medium">{product.name}</span>
                </div>

                {/* Main Grid: stack on mobile (default), 12 cols on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 px-4 md:px-6 py-4">

                    {/* LEFT: Thumbnails - Horizontal on mobile, Vertical on desktop */}
                    <div className="order-2 md:order-1 md:col-span-1 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                        {[product.image, product.image, product.image].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                onClick={() => setSelectedImage(img)}
                                className={`w-20 h-20 md:w-full md:h-auto border p-1 cursor-pointer hover:border-pink-500 transition object-cover ${selectedImage === img ? "border-pink-500" : "border-gray-200"
                                    }`}
                                alt="product thumbnail"
                            />
                        ))}
                    </div>

                    {/* MIDDLE: Main Product Display */}
                    <div className="order-1 md:order-2 md:col-span-5 flex justify-center items-start border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0">
                        <div className="md:sticky md:top-24 w-full flex justify-center">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="w-full max-h-[350px] md:max-h-[500px] object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Contact & Info */}
                    <div className="order-3 md:col-span-6 space-y-6">
                        <div className="text-center md:text-left">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">
                                {product.name}
                            </h1>
                            <p className="text-gray-400 text-sm mt-1">Product ID: #00{product.id}</p>

                            <div className="flex items-center justify-center md:justify-start mt-3 text-yellow-500 text-sm">
                                {"★".repeat(5)}
                                <span className="text-gray-400 ml-2 text-xs">(Verified Quality)</span>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* CALL TO ACTION BUTTONS: Sticky on bottom for mobile? No, keeping flow but making them large */}
                        <div className="flex flex-col gap-3 pt-2">
                            <a
                                href={`tel:${phoneNumber}`}
                                className="w-full bg-pink-600 text-white py-4 rounded-sm font-bold text-center text-base md:text-lg hover:bg-pink-700 transition flex items-center justify-center gap-3 active:scale-95"
                            >
                                📞 Call Company Now
                            </a>

                            <a
                                href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full border-2 border-green-500 text-green-600 py-4 rounded-sm font-bold text-center text-base md:text-lg hover:bg-green-50 transition flex items-center justify-center gap-3 active:scale-95"
                            >
                                💬 Enquire on WhatsApp
                            </a>
                        </div>

                        {/* QUICK FEATURES: 2 columns on all screens */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6">
                            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 bg-gray-50 p-2 md:p-3 rounded">
                                ✅ 100% Authentic
                            </div>
                            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 bg-gray-50 p-2 md:p-3 rounded">
                                🚚 Fast Supply
                            </div>
                            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 bg-gray-50 p-2 md:p-3 rounded">
                                🏭 Factory Price
                            </div>
                            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 bg-gray-50 p-2 md:p-3 rounded">
                                📞 24/7 Support
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESCRIPTION SECTION */}
                <div className="mt-8 md:mt-12 px-4 md:px-6 max-w-4xl border-t pt-10">
                    <h2 className="text-lg font-bold border-b-2 border-pink-500 inline-block mb-6 uppercase tracking-wider">Product Details</h2>
                    <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                        <p>{product.desc}</p>
                        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-500">
                            <li>High-performance quality standards.</li>
                            <li>Available for bulk and retail enquiries.</li>
                            <li>Contact our sales team for custom pricing.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetails;