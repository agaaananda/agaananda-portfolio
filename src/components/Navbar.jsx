import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center h-16">
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8 font-bold">
            <a
              href="#home"
              className="text-[#4A628A] hover:text-[#7AB2D3] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#4A628A] hover:text-[#7AB2D3] transition-colors"
            >
              About
            </a>
            <a
              href="#project"
              className="text-[#4A628A] hover:text-[#7AB2D3] transition-colors"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-[#4A628A] hover:text-[#7AB2D3] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
