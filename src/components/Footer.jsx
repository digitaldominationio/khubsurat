import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-10 sm:pt-12 md:pt-14 pb-6 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf4ff] via-[#f5d0fe] to-[#e9d5ff]"></div>

      {/* Glow blobs */}
      <div className="absolute top-[-60px] left-[-60px] w-[180px] h-[180px] bg-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-purple-300/20 rounded-full blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">

          {/* LOGO */}
          <div>
            <Link to="/">
              <h1 className="text-xl sm:text-2xl font-serif text-[#7e22ce] mb-3">
                Khubsurat
              </h1>
            </Link>
            <p className="text-xs sm:text-sm text-[#4c1d95]/80 leading-relaxed">
              Elevate your beauty with premium skincare and makeup designed
              for confidence and glow.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 text-[#7e22ce]">
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4c1d95]/80">
              <li><Link to="/" className="hover:text-[#db2777]">Home</Link></li>
              <li><Link to="/About" className="hover:text-[#db2777]">About</Link></li>
              <li><Link to="/Product2" className="hover:text-[#db2777]">Products</Link></li>
              <li><Link to="/Contact" className="hover:text-[#db2777]">Contact</Link></li>
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 text-[#7e22ce]">
              Policies
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4c1d95]/80">
              <li><Link to="/">Returns</Link></li>
              <li><Link to="/">Privacy</Link></li>
              <li><Link to="/">Terms</Link></li>
              <li><Link to="/Profile">Login</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 text-[#7e22ce]">
              Contact
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4c1d95]/80">
              <li className="flex items-center gap-2">
                <Phone size={14}/> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14}/> support@khubsurat.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16}/> Bhubaneswar, Odisha
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 text-[#7e22ce]">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-pink-300">
                <Facebook size={16}/>
              </a>
              <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-pink-300">
                <Instagram size={16}/>
              </a>
              <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-pink-300">
                <Linkedin size={16}/>
              </a>
            </div>
          </div>

        </div>

        {/* QUOTE */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-[#7e22ce] italic">
            ✨ Beauty begins the moment you decide to be yourself ✨
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 border-t border-[#7e22ce]/20 pt-3 text-center text-[10px] sm:text-xs text-[#4c1d95]/70">
          © {new Date().getFullYear()} KHUBSURAT — All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;