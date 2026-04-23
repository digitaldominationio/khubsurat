import React, { useState } from "react"; // Added useState here

const products = [
    {
        id: 1,
        tag: "BESTSELLER",
        name: "Velvet Silk Foundation",
        desc: "40 Shades • Full Coverage",
        price: "$42.00",
        image: "/img1.png",
        bg: "bg-[#f3dfcf]",
    },
    {
        id: 2,
        tag: "",
        name: "Midnight Rose Palette",
        desc: "18 High-Pigment Shades",
        price: "$68.00",
        image: "/img2.png",
        bg: "bg-[#f6b1a8]",
    },
    {
        id: 3,
        tag: "LIMITED",
        name: "Satin Matte Lip Colour",
        desc: "12 Long-Wear Shades",
        price: "$34.00",
        image: "/img3.png",
        bg: "bg-[#e07c73]",
    },
    {
        id: 4,
        tag: "",
        name: "Gilded Glow Bronzer",
        desc: "Dual Texture Sculpting",
        price: "$45.00",
        image: "/makeup.jpg",
        bg: "bg-[#f3dfcf]",
    },
    {
        id: 5,
        tag: "",
        name: "Gilded Glow Bronzer",
        desc: "Dual Texture Sculpting",
        price: "$45.00",
        image: "/makeup.jpg",
        bg: "bg-[#f3dfcf]",
    },
    {
        id: 6,
        tag: "",
        name: "Gilded Glow Bronzer",
        desc: "Dual Texture Sculpting",
        price: "$45.00",
        image: "/glow.jpg",
        bg: "bg-[#e07c73]",
    },
];

const Essentials = () => {
    // 🔥 State for the Business Email input
    const [email, setEmail] = useState('');

    // 🔥 Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Applying for account with:", email);
        alert(`Request sent for: ${email}`);
        setEmail(''); // Clear input after submit
    };

    return (
        <section className="bg-[#f5f1ec] py-24 px-6 md:px-12">

            {/* 🔥 Heading */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                <div>
                    <h2 className="text-4xl font-serif text-[#3e2b2b]">
                        Curated Professional Essentials
                    </h2>
                    <div className="w-20 h-[3px] bg-pink-400 mt-4 rounded-full"></div>
                </div>

                <div className="flex gap-4 mt-6 md:mt-0">
                    <button className="px-6 py-2 rounded-full bg-[#ece7e2] text-[#5c4b4b] text-sm">
                        Filters
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#ece7e2] text-[#5c4b4b] text-sm">
                        Sort By: Featured
                    </button>
                </div>
            </div>

            {/* 🔥 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-32"> {/* Added mb-32 for spacing */}

                {products.map((item) => (
                    <div key={item.id} className="group">

                        {/* 🔥 Taller Card */}
                        <div
                            className={`relative ${item.bg} rounded-[45px] h-[550px] w-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-2`}
                        >
                            {/* Elegant Float Tag */}
                            {item.tag && (
                                <span
                                    className={`absolute top-8 left-8 text-[11px] tracking-[0.2em] px-5 py-2 rounded-full font-semibold uppercase backdrop-blur-md shadow-sm transition-all duration-300
                                    ${item.tag === "BESTSELLER"
                                        ? "bg-yellow-400/90 text-black"
                                        : "bg-white/80 text-[#5a3232]"
                                    }`}
                                >
                                    {item.tag}
                                </span>
                            )}

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-[75%] w-auto object-contain drop-shadow-2xl transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-2"
                            />

                            {/* Soft Bottom Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Subtle Shine Reflection */}
                            <div className="absolute top-[-100%] left-[-100%] w-full h-full bg-white/20 rotate-45 transition-all duration-1000 group-hover:top-[100%] group-hover:left-[100%]" />
                        </div>

                        {/* 🔥 Content */}
                        <div className="mt-7">
                            <h3 className="text-xl font-serif text-[#3e2b2b]">
                                {item.name}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {item.desc}
                            </p>

                            <div className="flex items-center justify-between mt-5">
                                <span className="text-[#3e2b2b] font-medium text-lg">
                                    {item.price}
                                </span>

                                <button className="px-6 py-2 text-sm rounded-full bg-gradient-to-r from-[#a67c87] to-[#d6a5b3] text-white hover:scale-105 transition active:scale-95 shadow-md">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔥 Partner Section */}
            <div className="relative flex flex-col md:flex-row bg-[#f8f5f2] rounded-[60px] overflow-hidden min-h-[500px] shadow-sm mt-20">
                
                {/* Left Content Area */}
                <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center rounded-br-[80px] md:rounded-br-[120px] z-10">
                    <h2 className="font-serif italic text-3xl md:text-4xl text-[#6b3c3c] mb-6">
                        Partner with Khubsurat
                    </h2>
                    
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                        Access wholesale pricing and early previews of our luxury 
                        collections. Ideal for salons, boutiques, and professional 
                        makeup artists.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
                        <input
                            type="email"
                            placeholder="Business Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-[#f3f4f6] border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-[#6b3c3c]/20 outline-none transition-all"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#7d5e67] hover:bg-[#6b3c3c] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-all duration-300 shadow-lg active:scale-95 whitespace-nowrap"
                        >
                            Apply for Account
                        </button>
                    </form>
                </div>

                {/* Right Image Area */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
                    <img
                        src="/Banner3.jpg" // Replace with your actual lifestyle image path
                        alt="Beauty Products"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>

        </section>
    );
};

export default Essentials;