
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AlcoholItem } from '../data/alcoholData';

interface AlcoholCardProps {
  item: AlcoholItem;
  index: number;
}

const AlcoholCard: React.FC<AlcoholCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [index]);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      rotateY: 0,
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock':
        return 'text-green-400';
      case 'Limited':
        return 'text-yellow-400';
      case 'Out of Stock':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-black/30 ${getAvailabilityColor(item.availability)}`}>
            {item.availability}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500 text-black">
            {item.category}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
          {item.name}
        </h3>
        
        <p className="text-gray-300 text-sm line-clamp-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-400">
            ₹{item.price.toLocaleString()}
          </div>
          <div className="text-amber-300 font-medium">
            {item.alcoholPercentage}% ABV
          </div>
        </div>

        {item.origin && (
          <div className="text-gray-400 text-sm">
            Origin: {item.origin}
          </div>
        )}

        <div className="pt-3 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-2">Key Ingredients:</p>
          <div className="flex flex-wrap gap-1">
            {item.ingredients.slice(0, 3).map((ingredient, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 rounded-md"
              >
                {ingredient}
              </span>
            ))}
            {item.ingredients.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-600 text-gray-300 rounded-md">
                +{item.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlcoholCard;
