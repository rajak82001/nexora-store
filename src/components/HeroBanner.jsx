import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroBanner = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }
    ).fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        
        <div ref={heroRef} className="space-y-6">
          <p className="text-primary font-semibold">
            Top Products Of The Month
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Micropack MHP Headphone Black
          </h1>

          <p className="text-gray-600">
            Premium stereo PC headset with volume control and adjustable headband.
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
            Shop Now
          </button>
        </div>

        <div ref={imageRef} className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop"
            alt="Headphone"
            className="rounded-xl"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/450';
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;