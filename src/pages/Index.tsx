
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Wine, Sparkles } from 'lucide-react';
import { alcoholData, categories } from '../data/alcoholData';
import AlcoholSection from '../components/AlcoholSection';
import HeroSection from '../components/HeroSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate search bar on mount
    if (searchRef.current) {
      gsap.fromTo(
        searchRef.current,
        { opacity: 0, y: -50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
      );
    }

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: "20px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.2
    });

  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    // If search matches a category, scroll to that section
    const matchedCategory = categories.find(cat => 
      cat.toLowerCase().includes(term.toLowerCase()) && cat !== 'All'
    );
    
    if (matchedCategory && term.length > 2) {
      setActiveSection(matchedCategory);
      const element = document.getElementById(matchedCategory.toLowerCase());
      if (element) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: element, offsetY: 100 },
          ease: "power2.inOut"
        });
      }
    }
  };

  const filteredCategories = categories.filter(cat => cat !== 'All');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 text-white overflow-x-hidden">
      {/* Wood texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,69,19,0.3)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(101,67,33,0.1)_25%,_transparent_25%,_transparent_75%,_rgba(101,67,33,0.1)_75%,_rgba(101,67,33,0.1)),_linear-gradient(45deg,_rgba(101,67,33,0.1)_25%,_transparent_25%,_transparent_75%,_rgba(101,67,33,0.1)_75%,_rgba(101,67,33,0.1))] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
      </div>

      {/* Floating Background Elements - Bar ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-3 h-3 bg-amber-600 rounded-full opacity-40 shadow-lg shadow-amber-600/50"></div>
        <div className="floating-element absolute top-40 right-20 w-4 h-4 bg-orange-500 rounded-full opacity-30 shadow-lg shadow-orange-500/50"></div>
        <div className="floating-element absolute bottom-40 left-20 w-5 h-5 bg-yellow-600 rounded-full opacity-35 shadow-lg shadow-yellow-600/50"></div>
        <div className="floating-element absolute bottom-20 right-10 w-3 h-3 bg-red-600 rounded-full opacity-30 shadow-lg shadow-red-600/50"></div>
        <div className="floating-element absolute top-60 left-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-25"></div>
        <div className="floating-element absolute bottom-60 right-1/3 w-2 h-2 bg-orange-600 rounded-full opacity-25"></div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Search Section - Bar counter style */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-900/90 via-stone-900/90 to-amber-900/90 backdrop-blur-lg border-b-2 border-amber-600/40 py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search our collection (Wine, Whiskey, Beer...)"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-8 py-5 pl-16 bg-amber-950/60 backdrop-blur-sm border-2 border-amber-600/50 rounded-2xl text-amber-100 placeholder-amber-300/70 focus:outline-none focus:ring-4 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-lg shadow-inner shadow-amber-900/50"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-amber-500 w-7 h-7" />
            <Sparkles className="absolute right-5 top-1/2 transform -translate-y-1/2 text-amber-500 w-7 h-7 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="container mx-auto px-4 py-12">
        {filteredCategories.map((category, index) => (
          <AlcoholSection
            key={category}
            category={category}
            searchTerm={searchTerm}
            isActive={activeSection === category}
            index={index}
          />
        ))}
      </div>

      {/* Footer - Bar style */}
      <footer className="bg-gradient-to-r from-amber-950 via-stone-950 to-amber-950 border-t-2 border-amber-600/30 py-16 shadow-inner shadow-amber-900/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Wine className="w-10 h-10 text-amber-500 drop-shadow-lg" />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
              Oak & Ember
            </h3>
          </div>
          <p className="text-amber-200 text-xl font-light tracking-wide mb-2">
            Your Premium Local Spirits & Wine Store
          </p>
          <p className="text-amber-300/80 text-lg mb-6">
            Discover the world's finest alcoholic beverages in our cozy collection
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg mb-8">
            <span className="flex items-center gap-2 text-amber-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Authentic Collection
            </span>
            <span className="flex items-center gap-2 text-amber-300">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              Local Store Feel
            </span>
            <span className="flex items-center gap-2 text-amber-300">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              Premium Quality
            </span>
          </div>
          <p className="text-amber-400/60 text-sm">
            © 2024 Oak & Ember. Drink Responsibly. Must be 21+ to purchase.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
