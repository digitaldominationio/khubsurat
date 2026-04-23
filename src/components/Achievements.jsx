import React from "react";
import { Users, Activity, HeartPulse, Star, UserCheck } from "lucide-react";

const data = [
  {
    icon: <Users size={28} />,
    number: "4 lakh+",
    text: "Delighted Clients & Counting",
  },
  {
    icon: <Activity size={28} />,
    number: "400+",
    text: "Procedures Everyday",
  },
  {
    icon: <HeartPulse size={28} />,
    number: "96+",
    text: "Team of Therapist",
  },
  {
    icon: <Star size={28} />,
    number: "100+",
    text: "Satisfaction",
  },
  {
    icon: <UserCheck size={28} />,
    number: "25+",
    text: "Team Of Doctors",
  },
];

const Achievemengt = () => {
  return (
    <section className="bg-[#f6f2ee] py-24 px-6 md:px-12">

      {/* TITLE */}
      <div className="text-center mb-16">
        <p className="tracking-[5px] text-sm text-gray-500">
          ACHIEVEMENTS
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#1f3d3d] mt-4">
          Why Choose Us?
        </h2>
      </div>

      {/* ITEMS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center relative">

        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group cursor-pointer transition duration-500 hover:-translate-y-2"
          >

            {/* ICON */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#fbeaea] text-[#c47a7a] shadow-md mb-4 transition duration-500 group-hover:bg-[#c47a7a] group-hover:text-white group-hover:shadow-xl group-hover:scale-110">
              {item.icon}
            </div>

            {/* NUMBER */}
            <h3 className="text-2xl font-bold text-[#1f3d3d] transition duration-300 group-hover:scale-110 group-hover:text-[#c47a7a]">
              {item.number}
            </h3>

            {/* TEXT */}
            <p className="text-gray-600 text-sm mt-2 max-w-[150px] transition duration-300 group-hover:text-[#7a4e57]">
              {item.text}
            </p>

            {/* DOTTED LINE */}
            {index !== data.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 border-r-2 border-dashed border-[#e2bcbc] group-hover:border-[#c47a7a] transition"></div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
};

export default Achievemengt;