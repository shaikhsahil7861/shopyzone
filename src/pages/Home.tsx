import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/src/components/Hero";
import ProductCard from "@/src/components/ProductCard";
import { PRODUCTS } from "@/src/constants";
import { motion } from "motion/react";

export default function Home() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  
  const filteredProducts = PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchQuery) || 
    product.category.toLowerCase().includes(searchQuery)
  );

  const categories = ["All", "Electronics", "Fashion", "Shoes", "Home"];
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedProducts = activeCategory === "All" 
    ? filteredProducts 
    : filteredProducts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#eaeded] min-h-screen pb-12">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 -mt-12 md:-mt-32 relative z-10">
        {/* Categories Bar */}
        <div className="bg-white p-4 rounded-md shadow-sm mb-8 flex items-center gap-4 overflow-x-auto no-scrollbar">
          <span className="font-bold text-sm whitespace-nowrap">Browse by Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat 
                  ? "bg-[#131921] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-md shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-2">No products found</h2>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
