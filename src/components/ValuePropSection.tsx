import React, { useState } from 'react';
import { Wallet, ArrowUpRight, Info } from 'lucide-react';
import HalalReturnsInfo from './HalalReturnsInfo';

const ValuePropSection: React.FC = () => {
  const [showHalalInfo, setShowHalalInfo] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none mb-8">
              Your halal
              <br />
              account awaits
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Deposit money in your local currency like a regular bank account. 
              We instantly convert it to USDT and generate{' '}
              <button 
                onClick={() => setShowHalalInfo(true)}
                className="text-blue-600 font-semibold underline underline-offset-4 decoration-2 hover:text-blue-700 inline-flex items-center group"
              >
                4% halal returns
                <Info className="w-4 h-4 ml-1 inline-block opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
              {' '}on your balance.
            </p>
            <button 
              onClick={() => setShowHalalInfo(true)}
              className="inline-flex items-center space-x-2 text-xl font-semibold group"
            >
              <span>Join Now</span>
              <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Interactive Elements */}
          <div className="relative h-[600px]">
            {/* Blue Square - Receive */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform">
              <div className="p-8 text-white">
                <Wallet className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold">Receive</div>
                <p className="mt-2 text-blue-100">Get paid in 160+ currencies</p>
              </div>
            </div>

            {/* White Square - Returns */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-3xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform">
              <div className="p-8">
                <button 
                  onClick={() => setShowHalalInfo(true)}
                  className="group text-left w-full"
                >
                  <div className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    Earn halal returns
                    <br />
                    <span className="underline underline-offset-4 decoration-2">up to 4% APR</span>
                    <Info className="w-5 h-5 ml-2 inline-block opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
                <div className="mt-4 w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Currency Icons */}
            <div className="absolute top-1/2 right-12 w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
              <span className="text-3xl font-bold">$</span>
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-lime-300 rounded-full flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform">
              <span className="text-2xl font-bold">£</span>
            </div>
            <div className="absolute top-1/4 left-12 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-white transform rotate-6 hover:rotate-0 transition-transform">
              <span className="text-xl font-bold">﷼</span>
            </div>
          </div>
        </div>
      </div>

      {/* Halal Returns Info Modal */}
      {showHalalInfo && <HalalReturnsInfo onClose={() => setShowHalalInfo(false)} />}
    </section>
  );
};

export default ValuePropSection;