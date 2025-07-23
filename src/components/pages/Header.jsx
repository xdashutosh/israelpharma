"use client";
import React from "react";
import { Home, Info, Microscope, Package, Phone, ChevronDown } from "lucide-react";

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
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);
  const [hoverTimeout, setHoverTimeout] = React.useState(null);

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
    }, 150); // Small delay before closing
    setHoverTimeout(timeout);
  };

  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-lg border-b border-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-indigo-800/90 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
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
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem href="/" icon={Home}>Home</NavItem>
            <NavItem href="/about" icon={Info}>About</NavItem>
            
            {/* Products Dropdown */}
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
              
              {/* Dropdown Content */}
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Bridge area to prevent gap */}
                  <div className="absolute -top-1 left-0 right-0 h-1 bg-transparent"></div>
                  
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
              )}
            </div>
            
            <NavItem href="/checker" icon={Microscope}>Check Product</NavItem>
            <NavItem href="/contact" icon={Phone}>Contact</NavItem>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200">
            <div className="w-5 h-4 flex flex-col justify-between">
              <div className="w-full h-0.5 bg-white rounded"></div>
              <div className="w-full h-0.5 bg-white rounded"></div>
              <div className="w-full h-0.5 bg-white rounded"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

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