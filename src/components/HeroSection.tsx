
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Wine, Sparkles, Star, Award, Crown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Enhanced hero entrance animation with morphing
    tl.fromTo(
      iconRef.current,
      { 
        scale: 0, 
        rotation: -360, 
        opacity: 0,
        filter: "blur(20px)",
        y: -100
      },
      { 
        scale: 1, 
        rotation: 0, 
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)" 
      }
    )
    .fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        y: 150, 
        scale: 0.3,
        rotateX: -90,
        filter: "blur(30px)"
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "power4.out" 
      },
      "-=1.5"
    )
    .fromTo(
      subtitleRef.current,
      { 
        opacity: 0, 
        y: 80,
        scale: 0.8,
        filter: "blur(10px)"
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5, 
        ease: "power3.out" 
      },
      "-=1"
    );

    // Continuous floating animation for icon
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none"
    });

    // Pulsing glow effect - warmer colors
    gsap.to(iconRef.current, {
      boxShadow: "0 0 60px rgba(180, 83, 9, 0.8), 0 0 120px rgba(180, 83, 9, 0.4)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Moderate floating animation for sparkles (reduced intensity)
    gsap.to(".hero-sparkle", {
      y: "random(-15, 15)",
      x: "random(-10, 10)",
      rotation: "random(-15, 15)",
      scale: "random(0.9, 1.2)",
      duration: "random(5, 10)",
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    });

    // Particle system animation (reduced intensity)
    gsap.to(".hero-particle", {
      y: "random(-50, 50)",
      x: "random(-25, 25)",
      rotation: "random(-90, 90)",
      scale: "random(0.7, 1.3)",
      opacity: "random(0.3, 0.6)",
      duration: "random(8, 15)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2
    });

    // Text shimmer effect
    gsap.to(".shimmer-text", {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "power2.inOut"
    });

  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with warm bar ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(180,83,9,0.25)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_rgba(139,69,19,0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(217,119,6,0.15)_0%,_transparent_50%)]" />
        {/* Wood grain texture overlay */}
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,_rgba(101,67,33,0.1)_50%,_transparent_50%),_linear-gradient(rgba(139,69,19,0.05)_50%,_transparent_50%)] bg-[length:4px_4px,20px_20px]"></div>
      </div>

      {/* Animated particle system - warmer colors */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="hero-particle absolute w-1 h-1 bg-amber-500 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced floating sparkles - bar themed */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="hero-sparkle absolute top-20 left-20 w-8 h-8 text-amber-500 opacity-50" />
        <Star className="hero-sparkle absolute top-32 right-24 w-6 h-6 text-orange-500 opacity-60" />
        <Award className="hero-sparkle absolute top-40 left-40 w-7 h-7 text-yellow-600 opacity-55" />
        <Crown className="hero-sparkle absolute bottom-40 left-32 w-6 h-6 text-amber-600 opacity-50" />
        <Sparkles className="hero-sparkle absolute bottom-32 right-28 w-8 h-8 text-orange-600 opacity-45" />
        <Star className="hero-sparkle absolute bottom-20 right-20 w-7 h-7 text-red-600 opacity-50" />
        <Award className="hero-sparkle absolute top-60 right-60 w-5 h-5 text-yellow-500 opacity-55" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div ref={iconRef} className="mb-12">
          <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 shadow-2xl shadow-amber-600/50 relative border-4 border-amber-400/30">
            <Wine className="w-18 h-18 text-white drop-shadow-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/30 to-transparent animate-pulse"></div>
            {/* Wood grain effect on icon */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-700/20 via-transparent to-amber-800/20"></div>
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-8xl md:text-[12rem] font-black mb-8 leading-none tracking-tight"
        >
          <span className="shimmer-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-2xl">
            OAK &
          </span>
          <br />
          <span className="shimmer-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-2xl">
            EMBER
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl text-amber-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Your cozy neighborhood spirits & wine store featuring <span className="text-amber-400 font-bold">150+</span> premium beverages from around the world
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <span className="flex items-center gap-3 bg-gradient-to-r from-amber-800/40 to-amber-700/40 px-8 py-4 rounded-full border-2 border-amber-600/40 backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            Authentic Collection
          </span>
          <span className="flex items-center gap-3 bg-gradient-to-r from-orange-800/40 to-orange-700/40 px-8 py-4 rounded-full border-2 border-orange-600/40 backdrop-blur-sm">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-lg shadow-amber-500/50"></div>
            Local Store Feel
          </span>
          <span className="flex items-center gap-3 bg-gradient-to-r from-yellow-800/40 to-yellow-700/40 px-8 py-4 rounded-full border-2 border-yellow-600/40 backdrop-blur-sm">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
            Premium Quality
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
