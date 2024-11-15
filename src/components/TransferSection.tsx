import React, { useState, useEffect } from 'react';
import { ArrowRight, Banknote, Wallet } from 'lucide-react';

const transfers = [
  {
    fromAmount: '1,000',
    fromCurrency: 'USD',
    fromFlag: '🇺🇸',
    toAmount: '3,750',
    toCurrency: 'SAR',
    toFlag: '🇸🇦'
  },
  {
    fromAmount: '2,000',
    fromCurrency: 'GBP',
    fromFlag: '🇬🇧',
    toAmount: '92,000',
    toCurrency: 'INR',
    toFlag: '🇮🇳'
  },
  {
    fromAmount: '5,000',
    fromCurrency: 'EUR',
    fromFlag: '🇪🇺',
    toAmount: '20,000',
    toCurrency: 'AED',
    toFlag: '🇦🇪'
  }
];

const TransferExample: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % transfers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const current = transfers[currentIndex];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* From */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
            <Banknote className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-blue-200 text-sm">Send</div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-white">{current.fromAmount}</span>
              <span className="text-2xl text-white/80">{current.fromFlag} {current.fromCurrency}</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <ArrowRight className="w-8 h-8 text-blue-200" />
        </div>

        {/* To */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
            <Wallet className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-blue-200 text-sm">Receive</div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-white">{current.toAmount}</span>
              <span className="text-2xl text-white/80">{current.toFlag} {current.toCurrency}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transfer Animation */}
      {isAnimating && (
        <div className="relative h-1.5 bg-blue-900/30 rounded-full mt-8 overflow-hidden">
          <div 
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent animate-transfer"
            onAnimationEnd={() => setIsAnimating(false)}
          />
        </div>
      )}
    </div>
  );
};

const TransferSection: React.FC = () => {
  return (
    <section className="bg-blue-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8">
            Send Money Globally
            <br />
            In Seconds
          </h2>
          <p className="text-xl text-blue-100">
            Transfer funds instantly to 160+ countries with the best rates.
            No hidden fees, no surprises.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TransferExample />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">160+</div>
            <div className="text-blue-100">Countries</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">0.5%</div>
            <div className="text-blue-100">Conversion Fee</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">≈ 30s</div>
            <div className="text-blue-100">Transfer Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferSection;