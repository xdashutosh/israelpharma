import { Twitter, Linkedin, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto py-16 px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-4">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnj5_AAQUpx_XW_KnPQ3h1-n2RlE93vHTSCfuQ4D7d7k9-pwW_mtC7oivspaIoAtbWckQ&usqp=CAU" 
                alt="9 Meds Pharma Logo" 
                className="h-20 w-20 mr-2 object-contain rounded-full"
              />
              <span className="text-xl font-bold text-slate-800 dark:text-white">
                9 Meds <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Pharma</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mb-6">
              Committed to advancing health through cutting-edge pharmaceutical research and development.
            </p>
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Stay updated with our research</h4>
            <form className="flex w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
              <button 
                type="submit" 
                aria-label="Subscribe"
                className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Spacer Column for layout */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Home</a></li>
              <li><a href="#about-us" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 4: Social - can be used if needed or removed for a cleaner look */}
          <div className="lg:col-span-2">
             <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
              Connect
            </h3>
             <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Authenticity</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Lab Results</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-0">
            © {new Date().getFullYear()} 9 Meds Pharma. All Rights Reserved.
          </p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Twitter" className="group">
              <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </div>
            </a>
            <a href="#" aria-label="Facebook" className="group">
              <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </div>
            </a>
            <a href="#" aria-label="LinkedIn" className="group">
              <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}