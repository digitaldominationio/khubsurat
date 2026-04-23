import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.date) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert("Appointment Booked Successfully ✅");

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#fdfbfb] to-[#ece7e6] min-h-screen px-6 md:px-16 py-20">

      {/* 🔥 HERO TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4b2e35] mb-4">
          Book Your{" "}
          <span className="bg-gradient-to-r from-[#8b2c2c] to-[#c97b7b] bg-clip-text text-transparent">
            Appointment
          </span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-[#8b2c2c] to-[#c97b7b] mx-auto rounded-full"></div>
      </div>

      {/* 🔥 MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* 🔥 FORM */}
        <div className="p-[2px] rounded-3xl bg-gradient-to-r from-[#8b2c2c] to-[#c97b7b]">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-semibold text-[#4b2e35] mb-5">
              Fill Your Details
            </h3>

            <label className="block mb-2 font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-[#8b2c2c] outline-none"
            />

            <label className="block mb-2 font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-[#8b2c2c] outline-none"
            />

            <label className="block mb-2 font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-[#8b2c2c] outline-none"
            />

            <label className="block mb-2 font-medium text-gray-700">
              When do you want an appointment?
            </label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-[#8b2c2c] outline-none"
              placeholder="Preferred date/time"
            />

            {error && <p className="text-red-500 mb-3">{error}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8b2c2c] to-[#c97b7b] text-white py-3 rounded-full hover:scale-105 transition"
            >
              Submit Now →
            </button>
          </form>
        </div>

        {/* 🔥 RIGHT SIDE CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#8b2c2c] mb-2">📍 Address</h3>
            <p className="text-gray-700">
              Crystal Mall, 211-213, New Link Rd Andheri West, Mumbai
            </p>
            <p className="mt-4 font-semibold text-[#4b2e35]">📞 Andheri West Branch</p>
            <p>+91 93260 62958</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#8b2c2c] mb-2">📍 Address</h3>
            <p className="text-gray-700">
              81 Crest, Linking Rd, Santacruz (West), Mumbai
            </p>
            <p className="mt-4 font-semibold text-[#4b2e35]">📞 Bandra Branch</p>
            <p>+91 85914 17068</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#8b2c2c] mb-2">⏰ Opening Hours</h3>
            <p className="text-gray-700">Tue - Sun: 11:30 AM – 8:30 PM</p>
            <p className="text-gray-700">Monday: Closed</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#8b2c2c] mb-2">✉️ Mail</h3>
            <p className="text-gray-700">
              queensbydrumaira@gmail.com
            </p>
          </div>

        </div>
      </div>

      {/* 🔥 FOOTER LOGO SECTION */}
      <div className="mt-16 pt-10 border-t border-[#e5dcdc] text-center">

        <div className="flex justify-center mb-4">
        </div>

        <h3 className="text-2xl font-serif font-semibold text-[#4b2e35] mb-2 tracking-wide">
          Khubsurat
        </h3>

        <p className="text-gray-600 text-sm md:text-base">
          Enhancing Beauty with Elegance ✨
        </p>

        <div className="flex justify-center mt-4">
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#8b2c2c] to-[#c97b7b] rounded-full"></div>
        </div>

      </div>

    </div>
  );
};

export default Appointment;