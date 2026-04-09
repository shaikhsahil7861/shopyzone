import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="relative h-[300px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Banner"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#eaeded]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Upgrade Your Lifestyle
          </h1>
          <p className="text-lg text-white drop-shadow-md mb-8">
            Discover the latest trends in electronics, fashion, and home essentials. 
            Fast delivery, secure payments, and unbeatable prices.
          </p>
          <button className="bg-[#febd69] text-[#131921] px-8 py-3 rounded-md font-bold hover:bg-[#f3a847] transition-colors shadow-lg">
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
