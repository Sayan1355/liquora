
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-2 h-2 bg-amber-500 rounded-full opacity-30"></div>
        <div className="floating-element absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-20"></div>
        <div className="floating-element absolute bottom-40 left-20 w-4 h-4 bg-cyan-500 rounded-full opacity-25"></div>
        <div className="floating-element absolute bottom-20 right-10 w-2 h-2 bg-pink-500 rounded-full opacity-30"></div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-amber-500/20 py-6">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search alcohol types (e.g., Wine, Whiskey, Vodka...)"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-gray-900/50 backdrop-blur-sm border-2 border-amber-500/30 rounded-full text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-6 h-6" />
            <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-6 h-6 animate-pulse" />
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

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-amber-500/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wine className="w-8 h-8 text-amber-500" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Premium Spirits Catalog
            </h3>
          </div>
          <p className="text-gray-400 text-lg">
            Discover the world's finest alcoholic beverages
          </p>
          <p className="text-gray-500 mt-4">
            © 2024 Premium Spirits. Drink Responsibly. Must be 21+ to purchase.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
