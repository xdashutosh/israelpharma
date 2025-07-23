"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

// --- PRODUCT DATA ---
// Data structure includes an array of images from Unsplash.
const allProducts = [
  { id: 1, name: "DIANABOL", category: "Oral", dosage: "15mg", images: ["https://images.unsplash.com/photo-1617886322207-6f504e7472c5?w=500&q=80", "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80", "https://images.unsplash.com/photo-1628771065518-5d8241419580?w=500&q=80"] },
  { id: 2, name: "STANAZOLE", category: "Oral", dosage: "10mg", images: ["https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80", "https://images.unsplash.com/photo-1630053919991-53228945f47a?w=500&q=80"], tag: "Old Packaging" },
  { id: 3, name: "T3", category: "Oral", dosage: "50mcg", images: ["https://images.unsplash.com/photo-1607619056574-7d8d3ee536b2?w=500&q=80", "https://images.unsplash.com/photo-1621452283995-5469837a7b97?w=500&q=80"] },
  { id: 4, name: "TESTOPROP", category: "Injectable", dosage: "100mg/ml", images: ["https://images.unsplash.com/photo-1631549916768-4110b2a4a7a8?w=500&q=80", "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&q=80"] },
  { id: 5, name: "ANAVAR", category: "Oral", dosage: "15mg", images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80", "https://images.unsplash.com/photo-1550572073-a5e24c4033fb?w=500&q=80"], tag: "New Packaging" },
  { id: 6, name: "MK-677", category: "SARMS/Other Oral", dosage: "25mg", images: ["https://images.unsplash.com/photo-1628926955938-51f61033235b?w=500&q=80", "https://images.unsplash.com/photo-1614301323389-9b2e4b47c132?w=500&q=80"] },
  { id: 7, name: "DECANATE", category: "Injectable", dosage: "300mg/ml", images: ["https://images.unsplash.com/photo-1618944913803-13f8988a8c17?w=500&q=80", "https://images.unsplash.com/photo-1583324113626-724ce19f4316?w=500&q=80", "https://images.unsplash.com/photo-1627843444991-7848655844a4?w=500&q=80"] },
  { id: 8, name: "ANDROLIC", category: "Oral", dosage: "50mg", images: ["https://images.unsplash.com/photo-1584308666744-8480404b63ae?w=500&q=80", "https://images.unsplash.com/photo-1603792228394-a7465386e828?w=500&q=80"] },
  { id: 9, name: "GHRP-6", category: "Peptides", dosage: "5mg", images: ["https://images.unsplash.com/photo-1579165466949-5736a5245131?w=500&q=80", "https://images.unsplash.com/photo-1599441315664-a77c39055e8a?w=500&q=80"] },
  { id: 10, name: "CARDARINE", category: "SARMS/Other Oral", dosage: "10mg", images: ["https://images.unsplash.com/photo-1622022832879-813b198a1a9e?w=500&q=80", "https://images.unsplash.com/photo-1622144324831-29471161a01c?w=500&q=80"] },
  { id: 11, name: "CJC-1295", category: "Peptides", dosage: "2mg", images: ["https://images.unsplash.com/photo-1614359837349-810a9a4b353f?w=500&q=80", "https://images.unsplash.com/photo-1605289984922-0498a1da4a03?w=500&q=80"], tag: "Best Seller" },
  { id: 12, name: "TRENACETATE", category: "Injectable", dosage: "100mg/ml", images: ["https://images.unsplash.com/photo-1631770268293-fd0893293883?w=500&q=80", "https://images.unsplash.com/photo-1631049354050-a887b2e3e67c?w=500&q=80"] },
];

const filters = ["Oral", "Injectable", "Peptides", "SARMS/Other Oral"];

// --- ProductCard Component ---
// The main 3D Card Component remains the same.
function ProductCard({ product }) {
  const ref = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product.images.length <= 1) return;
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 2000); 
    return () => clearTimeout(timer);
  }, [currentImageIndex, product.images.length]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 30, mass: 1 };
  const rotateXSpring = useSpring(0, springConfig);
  const rotateYSpring = useSpring(0, springConfig);

  const rotateX = useTransform(mouseY, [-150, 150], [15, -15]);
  const rotateY = useTransform(mouseX, [-150, 150], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    mouseX.set(x);
    mouseY.set(y);
    rotateXSpring.set(rotateX.get());
    rotateYSpring.set(rotateY.get());
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rotateXSpring.set(0);
    rotateYSpring.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-2xl"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        <Card
          className="group h-full w-full overflow-hidden rounded-2xl bg-white dark:bg-slate-950 shadow-2xl shadow-slate-400/20 dark:shadow-black/50 border border-slate-200 dark:border-slate-800"
          // --- FIX IS HERE ---
          // We removed the hardcoded '--card-background' and now just use the variable,
          // which is correctly set for light/dark mode in globals.css.
          style={{
            background: `radial-gradient(circle at ${mouseX.get() + 50}% ${mouseY.get() + 50}%, rgba(107, 114, 128, 0.15), transparent 50%), var(--card-background)`,
          }}
        >
          {/* --- FIX IS HERE --- We've removed the unnecessary <style> tag. */}
          
          <CardContent className="relative h-full w-full p-4 flex flex-col justify-between">
            <motion.div
              style={{
                transform: "translateZ(25px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-4"
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </AnimatePresence>
            </motion.div>

            <div 
              className="relative z-10 flex h-full flex-col justify-between"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="flex justify-end">
                {product.tag && (
                  <span className={`text-xs font-bold py-1 px-2.5 rounded-full backdrop-blur-sm ${
                      product.tag.includes('New') ? 'bg-emerald-500/20 text-emerald-300' : 
                      product.tag.includes('Old') ? 'bg-amber-500/20 text-amber-300' : 'bg-blue-500/20 text-blue-300'
                  }`}>
                      {product.tag}
                  </span>
                )}
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{product.name}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{product.dosage}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

// --- UPDATED MAIN SECTION COMPONENT ---
export default function ProductSection() {
    const [activeFilter, setActiveFilter] = useState("Oral");
    const filteredProducts = allProducts.filter(p => p.category === activeFilter);

    return (
        <section className="w-full  py-16 md:py-24 bg-slate-50 dark:bg-slate-900" id="products">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
                        Authenticity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Guaranteed</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Explore our range of high-quality pharmaceutical products, manufactured to the highest standards of safety and efficacy.
                    </p>
                </div>

                {/* --- NEW & IMPROVED FILTER TABS --- */}
                <div  className="flex justify-center  mb-10">
                  <div className="flex items-center space-x-1  sm:space-x-2 bg-slate-200/80 dark:bg-slate-800 p-2 rounded-full shadow-inner shadow-slate-300/50 dark:shadow-black/20">
                    {filters.map(filter => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`relative capitalize rounded-full px-4 sm:px-6 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 ${
                          activeFilter === filter
                            ? 'text-slate-900 dark:text-white' // Active text color
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200' // Inactive text color
                        }`}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                      >
                        {/* The animated pill background */}
                        {activeFilter === filter && (
                          <motion.span
                            layoutId="active-filter-pill"
                            className="absolute inset-0 z-0 bg-white dark:bg-slate-950 rounded-full shadow-md"
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                          />
                        )}
                        {/* The text content, sits on top of the pill */}
                        <span className="relative z-10">{filter.toLowerCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    <AnimatePresence>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}