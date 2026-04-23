import React, { useState } from "react";

const faqs = [
  {
    question: "What makes Khubsurat Clinic unique in skincare treatments?",
    answer:
      "Khubsurat Clinic stands out due to our combination of advanced technology and personalized care. Our team uses cutting-edge techniques tailored to individual needs, ensuring effective and lasting results.",
  },
  {
    question: "What is the vision of Khubsurat Clinic?",
    answer:
      "Our vision is to provide world-class skincare and beauty treatments with a focus on safety, innovation, and customer satisfaction.",
  },
  {
    question: "What services does Khubsurat Clinic offer?",
    answer:
      "We offer skin treatments, hair care, laser treatments, anti-aging solutions, and body contouring services.",
  },
  {
    question: "How does Khubsurat Clinic ensure quality?",
    answer:
      "We maintain strict hygiene standards, use advanced machines, and have certified professionals to ensure top-quality treatments.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can easily book an appointment online or contact us via phone or WhatsApp.",
  },
];

const Askus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f6f2ee] py-24 px-6 md:px-12">
      
      {/* TITLE */}
      <div className="text-center mb-16">
        <p className="tracking-[5px] text-sm text-gray-500">ASK US</p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#1f3d3d] mt-4">
          Frequently Asked Questions
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* IMAGE */}
        <div>
          <img
            src="/ask.jpg"
            alt="faq"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-5">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border transition-all duration-300 shadow-sm"
            >
              {/* QUESTION */}
              <div
                onClick={() => toggleFAQ(index)}
                className={`p-5 flex justify-between items-center cursor-pointer transition ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#fce7ea] to-[#f9dfe5]"
                    : "bg-[#f8eded] hover:bg-[#f9dfe5]"
                }`}
              >
                <p className="text-[#1f3d3d] font-semibold text-[16px]">
                  {item.question}
                </p>

                <span className="text-2xl font-bold text-[#2d2d2d]">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="bg-white px-6 py-5 border-t">
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Askus;