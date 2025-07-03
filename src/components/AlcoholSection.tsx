
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { alcoholData } from '../data/alcoholData';
import AlcoholCard from './AlcoholCard';

gsap.registerPlugin(ScrollTrigger);

interface AlcoholSectionProps {
  category: string;
  searchTerm: string;
  isActive: boolean;
  index: number;
}

const AlcoholSection: React.FC<AlcoholSectionProps> = ({ 
  category, 
  searchTerm, 
  isActive, 
  index 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredData = alcoholData.filter((item) => {
    const matchesCategory = item.category === category;
    const matchesSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (!titleRef.current || !gridRef.current) return;

    // Section title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100, rotateX: -90 },
      {
        opacity: 1,
        x: 0,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Grid animation
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 100, scale: 0.8, rotateY: -45 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Active section highlight
    if (isActive) {
      gsap.to(sectionRef.current, {
        scale: 1.02,
        duration: 0.5,
        ease: "power2.out"
      });
    }

  }, [isActive, filteredData.length]);

  if (filteredData.length === 0 && searchTerm !== '') {
    return null;
  }

  const getCategoryEmoji = (cat: string) => {
    const emojiMap: { [key: string]: string } = {
      'Beer': '🍺',
      'Wine': '🍷',
      'Vodka': '🥃',
      'Whiskey': '🥃',
      'Scotch': '🥃',
      'Bourbon': '🥃',
      'Irish Whiskey': '🥃',
      'Brandy': '🍸',
      'Rum': '🍹',
      'Gin': '🍸',
      'Tequila': '🍹',
      'Liqueurs': '🍸'
    };
    return emojiMap[cat] || '🍷';
  };

  return (
    <div 
      ref={sectionRef}
      id={category.toLowerCase()}
      className={`mb-20 ${isActive ? 'ring-2 ring-amber-500/50 rounded-3xl p-8' : ''}`}
    >
      <div className="text-center mb-12">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-black mb-4 flex items-center justify-center gap-4"
        >
          <span className="text-6xl">{getCategoryEmoji(category)}</span>
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {category.toUpperCase()}
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-4"></div>
        <p className="text-gray-400 text-lg">
          {filteredData.length} premium {category.toLowerCase()} varieties
        </p>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-2">No {category} found</h3>
          <p className="text-gray-400">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredData.map((item, itemIndex) => (
            <AlcoholCard 
              key={item.id} 
              item={item} 
              index={itemIndex}
              categoryIndex={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlcoholSection;
