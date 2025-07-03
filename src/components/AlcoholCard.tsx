
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AlcoholItem } from '../data/alcoholData';
import { Sparkles } from 'lucide-react';

interface AlcoholCardProps {
  item: AlcoholItem;
  index: number;
  categoryIndex: number;
}

const AlcoholCard: React.FC<AlcoholCardProps> = ({ item, index, categoryIndex }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Initial card animation
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotateX: -45,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        delay: (index * 0.1) + (categoryIndex * 0.2),
        ease: "back.out(1.7)",
      }
    );

  }, [index, categoryIndex]);

  const handleMouseEnter = () => {
    if (!cardRef.current || !imageRef.current || !priceRef.current) return;

    const tl = gsap.timeline();
    
    tl.to(cardRef.current, {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      boxShadow: "0 30px 60px rgba(245, 158, 11, 0.4)",
      duration: 0.4,
      ease: "power2.out",
    })
    .to(imageRef.current, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out",
    }, 0)
    .to(priceRef.current, {
      scale: 1.1,
      color: "#fbbf24",
      textShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
      duration: 0.3,
      ease: "power2.out",
    }, 0.1);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !imageRef.current || !priceRef.current) return;

    const tl = gsap.timeline();
    
    tl.to(cardRef.current, {
      scale: 1,
      rotateY: 0,
      z: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      duration: 0.4,
      ease: "power2.out",
    })
    .to(imageRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    }, 0)
    .to(priceRef.current, {
      scale: 1,
      color: "#fbbf24",
      textShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    }, 0);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock':
        return 'text-green-400 bg-green-400/20';
      case 'Limited':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Out of Stock':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 shadow-xl transition-all duration-300 cursor-pointer perspective-1000 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sparkle effect */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
      </div>

      {/* Image Container */}
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
        <img
          ref={imageRef}
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-500"
        />
        
        {/* Overlays */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getAvailabilityColor(item.availability)}`}>
            {item.availability}
          </span>
        </div>
        
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black">
            {item.category}
          </span>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300 leading-tight">
          {item.name}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Price and ABV */}
        <div className="flex justify-between items-center">
          <div 
            ref={priceRef}
            className="text-2xl font-black text-amber-400"
          >
            ₹{item.price.toLocaleString()}
          </div>
          <div className="text-amber-300 font-semibold bg-amber-500/20 px-3 py-1 rounded-full">
            {item.alcoholPercentage}% ABV
          </div>
        </div>

        {/* Origin */}
        {item.origin && (
          <div className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            Origin: {item.origin}
          </div>
        )}

        {/* Ingredients */}
        <div className="pt-4 border-t border-gray-700/50">
          <p className="text-gray-500 text-xs mb-3 font-medium">KEY INGREDIENTS</p>
          <div className="flex flex-wrap gap-2">
            {item.ingredients.slice(0, 3).map((ingredient, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-300 rounded-full border border-amber-500/30 font-medium"
              >
                {ingredient}
              </span>
            ))}
            {item.ingredients.length > 3 && (
              <span className="px-3 py-1 text-xs bg-gray-600/30 text-gray-400 rounded-full border border-gray-600/50 font-medium">
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
