import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert("Inquiry Submitted Successfully 🚀");
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const text = `Hello, I am ${formData.name}. ${formData.message}`;
    window.open(
      `https://wa.me/916742345678?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-gradient-to-br from-[#fdfbfb] to-[#ece7e6] min-h-screen px-6 md:px-16 py-12">

      {/* 🔥 HERO */}
      <div className="mb-16 text-center flex flex-col items-center">

        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4b2e35] leading-tight mb-4">
          Get in Touch for <br />
          <span className="bg-gradient-to-r from-[#a67c87] via-[#d6a5b0] to-[#a67c87] bg-clip-text text-transparent">
            Wholesale Inquiries
          </span>
        </h2>

        {/* DESIGN LINE */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#a67c87]"></div>
          <div className="w-3 h-3 rounded-full bg-[#a67c87]"></div>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#a67c87]"></div>
        </div>

        <p className="text-gray-700 text-lg max-w-2xl leading-relaxed">
          Partner with{" "}
          <span className="font-semibold text-[#4b2e35]">
            Khubsurat
          </span>{" "}
          to bring premium beauty to your store.
        </p>

      </div>

      {/* 🔥 TOP SECTION */}
      <div className="grid md:grid-cols-3 gap-10 mb-14">

        {/* FORM (FIXED HEIGHT) */}
        <div className="md:col-span-2 h-[450px] md:h-[500px] p-[2px] rounded-3xl bg-gradient-to-r from-[#a67c87] to-[#d6a5b0]">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-xl h-full flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-[#4b2e35] mb-5">
              Send Inquiry
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-xl p-3 focus:ring-2 focus:ring-[#a67c87] outline-none"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-xl p-3 focus:ring-2 focus:ring-[#a67c87] outline-none"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business..."
              className="border rounded-xl p-3 w-full h-32 mb-4 focus:ring-2 focus:ring-[#a67c87] outline-none"
            />

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#a67c87] to-[#d6a5b0] text-white px-6 py-3 rounded-full hover:scale-105 transition"
              >
                SUBMIT →
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
              >
                WHATSAPP 💬
              </button>
            </div>
          </form>
        </div>

        {/* IMAGE (FIXED HEIGHT SAME AS FORM) */}
        <div className="md:col-span-1 h-[450px] md:h-[500px] p-[2px] rounded-3xl bg-gradient-to-r from-[#a67c87] to-[#d6a5b0]">
          <div className="relative rounded-3xl overflow-hidden group h-full">

            <img
              src="/studio.jpg"
              alt="Parlour"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white bg-white/10 backdrop-blur-md p-4 rounded-xl">
              <h3 className="text-xl font-semibold mb-1">
                Beauty Studio
              </h3>
              <p className="text-sm opacity-90">
                Luxury • Elegance
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* 🔥 MAP */}
      <div className="relative rounded-3xl overflow-hidden group mb-10">

        <div className="absolute inset-0 p-[3px] bg-gradient-to-r from-[#a67c87] to-[#d6a5b0] rounded-3xl"></div>

        <div className="relative rounded-3xl overflow-hidden">

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Bhubaneswar&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[500px] md:h-[600px] brightness-95 contrast-105"
          />

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
            <h4 className="font-semibold text-[#4b2e35]">
              📍 Our Location
            </h4>
            <p className="text-sm text-gray-600">
              Bhubaneswar, Odisha
            </p>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/7PXtzSTGC7pHRi1E7",
                "_blank"
              )
            }
            className="absolute top-6 right-6 bg-gradient-to-r from-[#a67c87] to-[#d6a5b0] text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition"
          >
            Open Map →
          </button>

        </div>
      </div>
    </div>
  );
};

export default Contact;