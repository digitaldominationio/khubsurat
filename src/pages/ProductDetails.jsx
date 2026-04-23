import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    // State for image gallery
    const [selectedImage, setSelectedImage] = useState(product?.image);

    if (!product) return <h1 className="p-10 text-center">Product not found</h1>;

    // Company Contact Details
    const phoneNumber = "+919876543210";
    const whatsappMessage = `Hi, I am interested in purchasing: ${product.name}`;

    return (
        <>
            <Navbar />



            {/* Main Container */}
            <div className="max-w-7xl mx-auto bg-white mt-14 shadow-sm pb-20">

                {/* Breadcrumbs */}
                <div className="p-4 text-xs text-gray-500">
                    Home &gt; {product.category || "Products"} &gt; {product.name}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 py-4">

                    {/* LEFT: Thumbnails */}
                    <div className="md:col-span-1 flex flex-col gap-2">
                        {[product.image, product.image, product.image].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                onClick={() => setSelectedImage(img)}
                                className={`w-full border p-1 cursor-pointer hover:border-pink-500 transition ${selectedImage === img ? "border-pink-500" : "border-gray-200"
                                    }`}
                                alt="product thumbnail"
                            />
                        ))}
                    </div>

                    {/* MIDDLE: Main Product Display */}
                    <div className="md:col-span-5 flex justify-center items-start border-r border-gray-100">
                        <div className="sticky top-24">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="max-h-[500px] object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Contact & Info */}
                    <div className="md:col-span-6 space-y-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 uppercase">
                                {product.name}
                            </h1>
                            <p className="text-gray-400 text-sm mt-1">Product ID: #00{product.id}</p>

                            <div className="flex items-center mt-3 text-yellow-500 text-sm">
                                {"★".repeat(5)}
                                <span className="text-gray-400 ml-2 text-xs">(Verified Quality)</span>
                            </div>
                        </div>

                        {/* <div className="text-3xl font-bold text-gray-900">
                            ₹{product.price}
                            <p className="text-xs font-normal text-gray-400 mt-1 uppercase tracking-widest">Premium Collection</p>
                        </div> */}

                        <hr className="border-gray-100" />

                        {/* CALL TO ACTION BUTTONS */}
                        <div className="flex flex-col gap-3 pt-2">
                            <a
                                href={`tel:${phoneNumber.replace('+91 98765 43210 ', '')}`}
                                className="w-full bg-pink-600 text-white py-4 rounded-sm font-bold text-center text-lg hover:bg-pink-700 transition flex items-center justify-center gap-3"
                            >
                                📞 Call Company Now
                            </a>

                            <a
                                href={`https://wa.me/${phoneNumber.replace('+91 98765 43210', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full border-2 border-green-500 text-green-600 py-4 rounded-sm font-bold text-center text-lg hover:bg-green-50 transition flex items-center justify-center gap-3"
                            >
                                💬 Enquire on WhatsApp
                            </a>
                        </div>

                        {/* QUICK FEATURES */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded">
                                ✅ 100% Authentic
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded">
                                🚚 Fast Supply
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded">
                                🏭 Direct Factory Price
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded">
                                📞 24/7 Support
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESCRIPTION SECTION */}
                <div className="mt-12 px-6 max-w-4xl border-t pt-10">
                    <h2 className="text-lg font-bold border-b-2 border-pink-500 inline-block mb-6 uppercase tracking-wider">Product Details</h2>
                    <div className="text-gray-600 text-base leading-relaxed space-y-4">
                        <p>{product.desc}</p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-500">
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