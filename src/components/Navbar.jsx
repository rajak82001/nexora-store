import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import useUIStore from "../store/useUIStore";

const Navbar = () => {
  const navRef = useRef(null);
  const { isMenuOpen, toggleMenu } = useUIStore();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-white sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">
          ELECTRO
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer">Category</li>
          <li className="hover:text-primary cursor-pointer">About</li>
          <li className="hover:text-primary cursor-pointer">FAQ</li>
          <li className="hover:text-primary cursor-pointer">Blog</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600">
          <Search className="w-5 h-5 cursor-pointer hover:text-primary" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-primary" />
          <User className="w-5 h-5 cursor-pointer hover:text-primary" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 shadow-md">
          <p className="hover:text-primary cursor-pointer">Home</p>
          <p className="hover:text-primary cursor-pointer">Category</p>
          <p className="hover:text-primary cursor-pointer">About</p>
          <p className="hover:text-primary cursor-pointer">FAQ</p>
          <p className="hover:text-primary cursor-pointer">Blog</p>
          <p className="hover:text-primary cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;