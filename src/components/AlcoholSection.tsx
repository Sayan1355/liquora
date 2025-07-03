
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
  const decorRef = useRef<HTMLDivElement>(null);

  const filteredData = alcoholData.filter((item) => {
    const matchesCategory = item.category === category;
    const matchesSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.brand && item.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (!titleRef.current || !gridRef.current || !decorRef.current) return;

    // Enhanced section title animation with 3D effects
    gsap.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        x: -200, 
        rotateX: -90,
        rotateY: 45,
        scale: 0.5,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Decorative elements animation
    gsap.fromTo(
      decorRef.current.children,
      { 
        opacity: 0, 
        scale: 0,
        rotation: -180,
        x: "random(-100, 100)",
        y: "random(-50, 50)"
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: decorRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Enhanced grid animation with morphing effects
    gsap.fromTo(
      gridRef.current.children,
      { 
        opacity: 0, 
        y: 150, 
        scale: 0.6, 
        rotateY: -90,
        rotateX: 45,
        filter: "blur(10px)",
        transformOrigin: "center bottom"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: {
          amount: 0.8,
          grid: "auto",
          from: "center"
        },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Continuous floating animation for active sections
    if (isActive) {
      gsap.to(sectionRef.current, {
        scale: 1.02,
        rotateY: 2,
        boxShadow: "0 40px 100px rgba(180, 83, 9, 0.4)",
        duration: 0.8,
        ease: "power2.out"
      });

      // Pulsing glow effect
      gsap.to(sectionRef.current, {
        boxShadow: "0 40px 120px rgba(180, 83, 9, 0.6)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    // Parallax effect for the section
    gsap.to(sectionRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

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
      'Irish Whiskey': '🍀',
      'Brandy': '🍸',
      'Rum': '🍹',
      'Gin': '🍸',
      'Tequila': '🌵',
      'Liqueurs': '🍷'
    };
    return emojiMap[cat] || '🍷';
  };

  return (
    <div 
      ref={sectionRef}
      id={category.toLowerCase()}
      className={`relative mb-32 overflow-hidden ${isActive ? 'ring-4 ring-amber-500/50 rounded-3xl p-12 bg-gradient-to-br from-amber-800/20 via-stone-800/10 to-amber-800/20 backdrop-blur-sm' : ''}`}
    >
      {/* Background decorative elements - Bar style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        {/* Decorative elements */}
        <div ref={decorRef} className="flex justify-center items-center gap-8 mb-8">
          <div className="w-3 h-3 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>
          <div className="w-4 h-4 bg-yellow-600 rounded-full shadow-lg shadow-yellow-600/50"></div>
          <div className="w-1 h-1 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full shadow-lg shadow-red-600/50"></div>
        </div>

        <h2
          ref={titleRef}
          className="text-6xl md:text-8xl font-black mb-6 flex items-center justify-center gap-6 perspective-1000"
        >
          <span className="text-8xl md:text-9xl animate-pulse filter drop-shadow-2xl">
            {getCategoryEmoji(category)}
          </span>
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
            {category.toUpperCase()}
          </span>
        </h2>
        
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          <div className="w-4 h-4 bg-amber-600 rounded-full animate-spin shadow-lg shadow-amber-600/50"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
        </div>
        
        <p className="text-amber-200 text-xl font-light tracking-wider">
          {filteredData.length} premium varieties | Authentic pricing | Local store collection
        </p>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center py-32 relative z-10">
          <div className="text-8xl mb-8 animate-bounce">🔍</div>
          <h3 className="text-4xl font-bold text-amber-100 mb-4">No {category} found</h3>
          <p className="text-amber-400 text-xl">Try browsing our other categories</p>
        </div>
      ) : (
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 relative z-10"
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
