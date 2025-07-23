import { useState } from "react";
import { FlaskConical, ShieldCheck, HeartHandshake, AlertCircle } from "lucide-react";

// A reusable component for each section
const ContentSection = ({ icon: Icon, title, subtitle1, content1, subtitle2, content2, imageUrl, imageSide = "right" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const imageContent = (
    <div className="w-full lg:w-5/12">
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/20 dark:shadow-black/30 bg-slate-200 dark:bg-slate-700">
        {imageError ? (
          <div className="w-full aspect-[4/3] flex items-center justify-center bg-slate-100 dark:bg-slate-800">
            <div className="text-center p-8">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Image failed to load
              </p>
              <p className="text-xs text-slate-400 mt-2 break-all">
                {imageUrl}
              </p>
            </div>
          </div>
        ) : (
          <>
            {!imageLoaded && (
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            )}
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover aspect-[4/3] transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
          </>
        )}
      </div>
    </div>
  );

  const textContent = (
    <div className="w-full lg:w-6/12">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">{title}</h2>
      </div>
      
      <div className="space-y-6 pl-4 border-l-2 border-slate-200 dark:border-slate-700 ml-[22px]">
        <div>
          <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-200 mb-1">{subtitle1}</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content1}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-200 mb-1">{subtitle2}</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content2}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 ${
      imageSide === "left" ? "lg:flex-row-reverse" : ""
    }`}>
      {imageContent}
      {textContent}
    </div>
  );
};

export default function Aboutus() {
  // Alternative image URLs that are more likely to work
  const imageUrls = {
    genesis: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    science: "https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg", 
    wellness: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  };

  return (
    <section className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white">
            Driven by Science, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Dedicated to You.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Learn about our unwavering commitment to advancing health through innovation, rigorous quality control, and a deep-seated passion for wellness.
          </p>
        </div>

        {/* Sections Container */}
        <div className="space-y-20 md:space-y-28">
          {/* Section 1: Our Genesis */}
          <ContentSection
            icon={FlaskConical}
            title="Our Genesis & Mission"
            subtitle1="From a Vision to a Reality"
            content1="Founded by a team of passionate biochemists and medical professionals, our journey began with a single, powerful idea: to make high-purity, effective compounds accessible to the global research and wellness community."
            subtitle2="An Unwavering Mission"
            content2="Our mission is to empower health and performance by providing products that are backed by scientific evidence, manufactured with integrity, and delivered with a commitment to absolute quality and transparency."
            imageUrl={imageUrls.genesis}
            imageSide="right"
          />

          {/* Section 2: Quality & Innovation */}
          <ContentSection
            icon={ShieldCheck}
            title="The Science of Quality"
            subtitle1="Rigorous Purity Standards"
            content1="Every batch undergoes stringent third-party testing to ensure it meets and exceeds pharmaceutical-grade standards. We utilize advanced techniques like HPLC to verify identity, purity, and concentration."
            subtitle2="Innovation at Our Core"
            content2="We continuously invest in research and development, exploring novel delivery systems and synergistic compound formulations to stay at the cutting edge of efficacy and safety in the industry."
            imageUrl={imageUrls.science}
            imageSide="left"
          />

          {/* Section 3: Our Commitment */}
          <ContentSection
            icon={HeartHandshake}
            title="Your Partner in Wellness"
            subtitle1="Beyond the Product"
            content1="We believe in building lasting relationships. Our expert support team is dedicated to providing education, guidance, and transparent information to ensure you can make informed decisions for your goals."
            subtitle2="A Vision for Tomorrow"
            content2="Our goal is to be a global leader in health innovation. We are expanding our research into new therapeutic areas and forging partnerships to bring the next generation of wellness solutions to the world."
            imageUrl={imageUrls.wellness}
            imageSide="right"
          />
        </div>

      </div>
    </section>
  );
}