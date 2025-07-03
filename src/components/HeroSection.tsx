
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

    // Pulsing glow effect
    gsap.to(iconRef.current, {
      boxShadow: "0 0 60px rgba(245, 158, 11, 0.8), 0 0 120px rgba(245, 158, 11, 0.4)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Enhanced floating animation for sparkles
    gsap.to(".hero-sparkle", {
      y: "random(-30, 30)",
      x: "random(-20, 20)",
      rotation: "random(-30, 30)",
      scale: "random(0.8, 1.5)",
      duration: "random(4, 8)",
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    });

    // Particle system animation
    gsap.to(".hero-particle", {
      y: "random(-100, 100)",
      x: "random(-50, 50)",
      rotation: "random(-180, 180)",
      scale: "random(0.5, 2)",
      opacity: "random(0.3, 0.8)",
      duration: "random(6, 12)",
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
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(245,158,11,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_rgba(168,85,247,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(236,72,153,0.08)_0%,_transparent_50%)]" />
      </div>

      {/* Animated particle system */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero-particle absolute w-1 h-1 bg-amber-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="hero-sparkle absolute top-20 left-20 w-8 h-8 text-amber-400 opacity-40" />
        <Star className="hero-sparkle absolute top-32 right-24 w-6 h-6 text-purple-400 opacity-50" />
        <Award className="hero-sparkle absolute top-40 left-40 w-7 h-7 text-cyan-400 opacity-45" />
        <Crown className="hero-sparkle absolute bottom-40 left-32 w-6 h-6 text-pink-400 opacity-40" />
        <Sparkles className="hero-sparkle absolute bottom-32 right-28 w-8 h-8 text-orange-400 opacity-35" />
        <Star className="hero-sparkle absolute bottom-20 right-20 w-7 h-7 text-green-400 opacity-40" />
        <Award className="hero-sparkle absolute top-60 right-60 w-5 h-5 text-yellow-400 opacity-45" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div ref={iconRef} className="mb-12">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 shadow-2xl shadow-amber-500/40 relative">
            <Wine className="w-16 h-16 text-white drop-shadow-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-8xl md:text-[12rem] font-black mb-8 leading-none tracking-tight"
        >
          <span className="shimmer-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-2xl">
            SPIRITS
          </span>
          <br />
          <span className="shimmer-text bg-gradient-to-r from-white via-gray-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-2xl">
            CATALOG
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Explore our premium collection of over <span className="text-amber-400 font-bold">150+</span> finest alcoholic beverages from around the world
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <span className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/20 px-6 py-3 rounded-full border border-green-500/30">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Authentic Pricing
          </span>
          <span className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-6 py-3 rounded-full border border-blue-500/30">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            Real Images
          </span>
          <span className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 px-6 py-3 rounded-full border border-purple-500/30">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            150+ Varieties
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
