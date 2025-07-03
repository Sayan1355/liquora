
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { alcoholData, AlcoholItem } from '../data/alcoholData';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import AlcoholCard from '../components/AlcoholCard';
import LoadingSpinner from '../components/LoadingSpinner';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState<AlcoholItem[]>(alcoholData);
  const [isLoading, setIsLoading] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Background animation
    gsap.to(".bg-gradient", {
      backgroundPosition: "200% 200%",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "none"
    });

  }, []);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for smooth animations
    const timer = setTimeout(() => {
      const filtered = alcoholData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      });
      
      setFilteredData(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 bg-gradient">
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10 animate-pulse" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Premium Spirits
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the world's finest collection of alcoholic beverages. From vintage wines to premium spirits, explore over 100+ varieties with authentic pricing and detailed information.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 pb-12">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {selectedCategory === 'All' ? 'All Spirits' : selectedCategory}
          </h2>
          <p className="text-gray-400">
            {filteredData.length} product{filteredData.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : filteredData.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍷</div>
            <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredData.map((item, index) => (
              <AlcoholCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-amber-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Premium Spirits Collection. Drink Responsibly. Must be 21+ to purchase.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
