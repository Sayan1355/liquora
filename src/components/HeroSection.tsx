
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Wine, Sparkles, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Hero entrance animation
    tl.fromTo(
      iconRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // Continuous rotation for icon
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Floating animation for sparkles
    gsap.to(".hero-sparkle", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-15, 15)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5
    });

  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.1)_0%,_transparent_70%)]" />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="hero-sparkle absolute top-20 left-20 w-6 h-6 text-amber-400 opacity-30" />
        <Star className="hero-sparkle absolute top-40 right-32 w-4 h-4 text-purple-400 opacity-40" />
        <Sparkles className="hero-sparkle absolute bottom-40 left-32 w-5 h-5 text-cyan-400 opacity-35" />
        <Star className="hero-sparkle absolute bottom-20 right-20 w-6 h-6 text-pink-400 opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div ref={iconRef} className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-2xl shadow-amber-500/30">
            <Wine className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-black mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
            SPIRITS
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            CATALOG
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our premium collection of over 100+ finest alcoholic beverages from around the world
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Authentic Pricing
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Real Images
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Detailed Info
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
