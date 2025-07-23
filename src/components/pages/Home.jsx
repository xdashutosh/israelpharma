import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import Aboutus from "./Aboutus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100 dark:bg-gray-900">
      <HeroSection />
      <ProductSection />
      <Aboutus/>
      
    </main>
  );
}