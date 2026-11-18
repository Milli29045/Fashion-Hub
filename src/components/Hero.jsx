
import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1800",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1800",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-[450px] md:h-[500px] flex items-center overflow-hidden bg-gray-900"
    >
      <img
        key={currentImage}
        src={images[currentImage]}
        alt="Fashion Collection"
        className="absolute inset-0 w-full h-full object-cover animate-fade-in"
      />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-white tracking-[5px] text-sm font-semibold mb-6">
            THE NEW FASHION EXPERIENCE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.15]">
            Fashion Is
            <span className="block text-amber-300">
              Your Identity.
            </span>
          </h1>

          <p className="text-gray-100 text-lg leading-8 mt-7 max-w-lg">
            Elevate your everyday style with timeless designs,
            premium quality and the latest fashion trends.
            Discover clothing that makes every moment special.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#women"
              className="bg-white text-gray-900 px-9 py-4 text-sm font-semibold tracking-widest hover:bg-amber-700 hover:text-white transition duration-300"
            >
              SHOP NOW
            </a>

            <a
              href="#collections"
              className="border border-white text-white px-9 py-4 text-sm font-semibold tracking-widest hover:bg-white hover:text-gray-900 transition duration-300"
            >
              DISCOVER MORE
            </a>
          </div>

          <div className="mt-14 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-amber-300"></div>
            <p className="text-white text-sm tracking-[3px]">
              STYLE • QUALITY • COMFORT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
