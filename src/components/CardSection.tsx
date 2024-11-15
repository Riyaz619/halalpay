import React from 'react';

const CardSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none mb-8">
            International Card
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-600 leading-tight max-w-3xl mx-auto">
            Spend with USDT in your account in 100+ countries with real-time near zero fees conversions.
          </p>
        </div>

        <div className="relative h-96">
          {/* Pink Card */}
          <div className="absolute top-8 -left-4 w-72 h-44 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-2xl transform -rotate-12 transition-transform hover:rotate-0">
            <div className="p-6">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-12" />
              <div className="w-10 h-6 bg-white/20 rounded-sm" />
            </div>
          </div>
          
          {/* Black Card (Center) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-48 bg-black rounded-2xl shadow-2xl z-10 transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-12" />
              <div className="w-10 h-6 bg-white/20 rounded-sm" />
            </div>
          </div>
          
          {/* Gold Card */}
          <div className="absolute top-8 -right-4 w-72 h-44 bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl shadow-2xl transform rotate-12 transition-transform hover:rotate-0">
            <div className="p-6">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-12" />
              <div className="w-10 h-6 bg-white/20 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;