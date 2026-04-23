import React, { useState } from "react";
import { User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navlinkcLass = ({ isActive }) =>
    `block py-2 md:py-0 ${
      isActive
        ? "text-[#7a4e57] font-bold"
        : "text-gray-700 hover:text-[#7a4e57]"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f5f1ec] shadow z-50">
      <div className="flex items-center justify-between px-5 md:px-10 py-4">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-xl md:text-2xl font-serif text-[#7a4e57] cursor-pointer"
        >
          Khubsurat
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <NavLink to="/" className={navlinkcLass}>Home</NavLink>
          <NavLink to="/product2" className={navlinkcLass}>Product</NavLink>
          <NavLink to="/Services" className={navlinkcLass}>Services</NavLink>
          <NavLink to="/About" className={navlinkcLass}>About</NavLink>
          <NavLink to="/Contact" className={navlinkcLass}>Contact</NavLink>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Profile */}
          <User
            className="w-7 h-7 cursor-pointer"
            onClick={() => navigate("/Profile")}
          />

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white px-5 pb-4 shadow">
          <NavLink to="/" className={navlinkcLass}>Home</NavLink>
          <NavLink to="/Product2" className={navlinkcLass}>Product</NavLink>
          <NavLink to="/Services" className={navlinkcLass}>Services</NavLink>
          <NavLink to="/About" className={navlinkcLass}>About</NavLink>
          <NavLink to="/Contact" className={navlinkcLass}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;