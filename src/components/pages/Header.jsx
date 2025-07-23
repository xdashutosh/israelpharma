"use client";
import React, { useState, useEffect } from "react";
import { Home, Info, Microscope, Package, Phone, ChevronDown, X } from "lucide-react";

const components = [
  {
    title: "Oral Solutions",
    href: "/products",
    description: "Easy-to-administer tablets and capsules for various treatments.",
    icon: "💊",
  },
  {
    title: "Injectable Steriles",
    href: "/products",
    description: "High-purity sterile solutions for direct administration.",
    icon: "💉",
  },
  {
    title: "SARMS / Others",
    href: "/products",
    description: "Selective Androgen Receptor Modulators and other specialized oral compounds.",
    icon: "🧬",
  },
  {
    title: "Peptides",
    href: "/products",
    description: "Targeted peptide therapies for recovery, wellness, and research.",
    icon: "🔬",
  },
];

export default function Header() {
  // State for desktop products dropdown
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for mobile products accordion
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);


  // --- Desktop Hover Logic ---
  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileProductsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-lg border-b border-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-indigo-800/90 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-none transition-all duration-300"></div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnj5_AAQUpx_XW_KnPQ3h1-n2RlE93vHTSCfuQ4D7d7k9-pwW_mtC7oivspaIoAtbWckQ&usqp=CAU"
                alt="Israel Pharma Logo"
                className="relative h-14 w-14 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300 rounded-full bg-transparent"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white tracking-wide">Israel Pharma</span>
              <span className="text-xs text-blue-100 font-medium">Advanced Healthcare Solutions</span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem href="/" icon={Home}>Home</NavItem>
            <NavItem href="/about" icon={Info}>About</NavItem>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group">
                <Package className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                 <div
                   className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-96 origin-top animate-fade-in-down"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                 >
                    <div className="absolute -top-1 left-0 right-0 h-2 bg-transparent"></div>
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">Our Product Range</h3>
                        <p className="text-sm text-gray-600">Discover our comprehensive pharmaceutical solutions</p>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-2">
                        {components.map((component) => (
                            <ProductItem key={component.title} component={component} />
                        ))}
                        </div>
                    </div>
                 </div>
              )}
            </div>

            <NavItem href="/checker" icon={Microscope}>Check Product</NavItem>
            <NavItem href="/contact" icon={Phone}>Contact</NavItem>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-5 relative">
                <span className={`block absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-1'}`}></span>
                <span className={`block absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-1'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* --- Mobile Navigation Panel --- */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-blue-700 to-indigo-900 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 flex flex-col space-y-2">
            <MobileNavItem href="/" icon={Home}>Home</MobileNavItem>
            <MobileNavItem href="/about" icon={Info}>About</MobileNavItem>
            
            {/* Mobile Products Accordion */}
            <div>
                <button 
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className="w-full flex items-center justify-between p-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                >
                    <div className="flex items-center space-x-3">
                        <Package className="h-5 w-5" />
                        <span className="font-medium text-lg">Products</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileProductsOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                    <div className="pl-6 pt-2 pb-2 flex flex-col space-y-1">
                        {components.map(component => (
                            <a key={component.title} href={component.href} className="flex items-center space-x-3 p-2 rounded-md hover:bg-white/10">
                                <span className="text-xl">{component.icon}</span>
                                <span className="text-white/90">{component.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <MobileNavItem href="/checker" icon={Microscope}>Check Product</MobileNavItem>
            <MobileNavItem href="/contact" icon={Phone}>Contact</MobileNavItem>
        </div>
      </div>
    </header>
  );
}

// Reusable component for Desktop Nav Items
const NavItem = ({ href, icon: Icon, children }) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <Icon className="relative h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
      <span className="relative font-medium">{children}</span>
    </a>
  );
};

// Reusable component for Mobile Nav Items
const MobileNavItem = ({ href, icon: Icon, children }) => (
    <a 
      href={href} 
      className="flex items-center space-x-3 p-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
    >
        <Icon className="h-5 w-5" />
        <span className="font-medium text-lg">{children}</span>
    </a>
);

const ProductItem = ({ component }) => {
    return (
      <a
        href={component.href}
        className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group border border-transparent hover:border-blue-200"
      >
        <div className="flex items-start space-x-3">
          <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
            {component.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
              {component.title}
            </div>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
              {component.description}
            </p>
          </div>
        </div>
      </a>
    );
};