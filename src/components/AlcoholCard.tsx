
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AlcoholItem } from '../data/alcoholData';
import { Sparkles, Star, Award } from 'lucide-react';

interface AlcoholCardProps {
  item: AlcoholItem;
  index: number;
  categoryIndex: number;
}

const AlcoholCard: React.FC<AlcoholCardProps> = ({ item, index, categoryIndex }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Enhanced initial card animation with morphing
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 150,
        scale: 0.6,
        rotateX: -60,
        rotateY: 30,
        filter: "blur(15px)",
        transformOrigin: "center bottom"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        filter: "blur(0px)",
        duration: 1.2,
        delay: (index * 0.08) + (categoryIndex * 0.1),
        ease: "power4.out",
      }
    );

    // Moderate floating animation (reduced intensity)
    gsap.to(cardRef.current, {
      y: "random(-2, 2)",
      rotation: "random(-0.5, 0.5)",
      duration: "random(4, 6)",
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: index * 0.2
    });

  }, [index, categoryIndex]);

  const handleMouseEnter = () => {
    if (!cardRef.current || !imageRef.current || !priceRef.current || !contentRef.current || !glowRef.current) return;

    const tl = gsap.timeline();
    
    // Enhanced hover animation with 3D transform
    tl.to(cardRef.current, {
      scale: 1.08,
      rotateY: 8,
      rotateX: 5,
      z: 100,
      boxShadow: "0 50px 100px rgba(180, 83, 9, 0.6), 0 0 50px rgba(180, 83, 9, 0.3)",
      duration: 0.5,
      ease: "power3.out",
    })
    .to(imageRef.current, {
      scale: 1.15,
      rotateZ: 3,
      filter: "brightness(1.2) contrast(1.1)",
      duration: 0.5,
      ease: "power2.out",
    }, 0)
    .to(priceRef.current, {
      scale: 1.2,
      color: "#f59e0b",
      textShadow: "0 0 30px rgba(245, 158, 11, 1), 0 0 60px rgba(245, 158, 11, 0.5)",
      duration: 0.4,
      ease: "power2.out",
    }, 0.1)
    .to(contentRef.current, {
      y: -10,
      duration: 0.4,
      ease: "power2.out"
    }, 0.1)
    .to(glowRef.current, {
      opacity: 1,
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out"
    }, 0);

    // Sparkle animation
    gsap.to(".card-sparkle", {
      scale: "random(0.8, 1.2)",
      rotation: "random(-30, 30)",
      opacity: "random(0.6, 1)",
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !imageRef.current || !priceRef.current || !contentRef.current || !glowRef.current) return;

    const tl = gsap.timeline();
    
    tl.to(cardRef.current, {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      duration: 0.4,
      ease: "power2.out",
    })
    .to(imageRef.current, {
      scale: 1,
      rotateZ: 0,
      filter: "brightness(1) contrast(1)",
      duration: 0.4,
      ease: "power2.out",
    }, 0)
    .to(priceRef.current, {
      scale: 1,
      color: "#f59e0b",
      textShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    }, 0)
    .to(contentRef.current, {
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    }, 0)
    .to(glowRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    }, 0);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock':
        return 'text-green-400 bg-green-400/20 border-green-400/40';
      case 'Limited':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/40';
      case 'Out of Stock':
        return 'text-red-400 bg-red-400/20 border-red-400/40';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/40';
    }
  };

  const getPriceColor = (price: number) => {
    if (price > 5000) return 'text-yellow-400';
    if (price > 2000) return 'text-amber-400';
    return 'text-green-400';
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-br from-amber-900/80 via-stone-900/80 to-amber-900/80 backdrop-blur-lg rounded-3xl p-6 border-2 border-amber-600/40 shadow-2xl transition-all duration-500 cursor-pointer perspective-1000 group overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Wood texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(101,67,33,0.1)_25%,_transparent_25%,_transparent_75%,_rgba(101,67,33,0.1)_75%,_rgba(101,67,33,0.1)),_linear-gradient(45deg,_rgba(101,67,33,0.1)_25%,_transparent_25%,_transparent_75%,_rgba(101,67,33,0.1)_75%,_rgba(101,67,33,0.1))] bg-[length:8px_8px] bg-[position:0_0,4px_4px] rounded-3xl opacity-20"></div>

      {/* Glow effect */}
      <div 
        ref={glowRef}
        className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-3xl opacity-0 -z-10"
      ></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,83,9,0.08)_0%,_transparent_70%)] rounded-3xl"></div>

      {/* Sparkle effects */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="card-sparkle w-5 h-5 text-amber-400 animate-pulse" />
      </div>
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Star className="card-sparkle w-3 h-3 text-orange-400" />
      </div>
      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <Award className="card-sparkle w-4 h-4 text-yellow-500" />
      </div>

      {/* Image Container */}
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-800/50 to-stone-800/50 shadow-inner border border-amber-700/30">
        <img
          ref={imageRef}
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-all duration-500"
        />
        
        {/* Image overlays */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getAvailabilityColor(item.availability)}`}>
            {item.availability}
          </span>
        </div>
        
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white border border-amber-500">
            {item.category}
          </span>
        </div>

        {/* Premium indicator for expensive items */}
        {item.price > 5000 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 rounded-full text-xs font-black bg-gradient-to-r from-yellow-600 to-orange-600 text-white border border-yellow-500">
              PREMIUM
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="space-y-4 relative z-10">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-amber-100 group-hover:text-amber-200 transition-colors duration-300 leading-tight flex-1">
            {item.name}
          </h3>
          {item.brand && (
            <span className="text-xs text-amber-400 font-medium ml-2 bg-amber-500/20 px-2 py-1 rounded-full border border-amber-500/30">
              {item.brand}
            </span>
          )}
        </div>
        
        <p className="text-amber-300/80 text-sm line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Price and ABV */}
        <div className="flex justify-between items-center">
          <div 
            ref={priceRef}
            className={`text-2xl font-black ${getPriceColor(item.price)}`}
          >
            ₹{item.price.toLocaleString()}
          </div>
          <div className="text-amber-200 font-semibold bg-amber-600/30 px-3 py-1 rounded-full border border-amber-500/40">
            {item.alcoholPercentage}% ABV
          </div>
        </div>

        {/* Origin */}
        {item.origin && (
          <div className="text-amber-400/70 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
            Origin: {item.origin}
          </div>
        )}

        {/* Vintage/Year for premium items */}
        {item.vintage && (
          <div className="text-yellow-400 text-sm flex items-center gap-2">
            <Star className="w-3 h-3" />
            Vintage: {item.vintage}
          </div>
        )}

        {/* Ingredients */}
        <div className="pt-4 border-t border-amber-700/40">
          <p className="text-amber-400/60 text-xs mb-3 font-medium tracking-wider">KEY INGREDIENTS</p>
          <div className="flex flex-wrap gap-2">
            {item.ingredients.slice(0, 3).map((ingredient, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-gradient-to-r from-amber-600/30 to-amber-700/30 text-amber-300 rounded-full border border-amber-600/40 font-medium hover:scale-105 transition-transform duration-200"
              >
                {ingredient}
              </span>
            ))}
            {item.ingredients.length > 3 && (
              <span className="px-3 py-1 text-xs bg-stone-700/40 text-amber-400/60 rounded-full border border-stone-600/40 font-medium">
                +{item.ingredients.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlcoholCard;
