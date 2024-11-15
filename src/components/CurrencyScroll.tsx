import React from 'react';

const currencies = [
  { name: 'United Kingdom', symbol: '£', code: 'GBP' },
  { name: 'United States', symbol: '$', code: 'USD' },
  { name: 'India', symbol: '₹', code: 'INR' },
  { name: 'Pakistan', symbol: '₨', code: 'PKR' },
  { name: 'Bangladesh', symbol: '৳', code: 'BDT' },
  { name: 'Saudi Arabia', symbol: '﷼', code: 'SAR' },
  { name: 'UAE', symbol: 'د.إ', code: 'AED' },
  { name: 'Kuwait', symbol: 'د.ك', code: 'KWD' },
  { name: 'Qatar', symbol: 'ر.ق', code: 'QAR' },
  // Duplicate for seamless scrolling
  { name: 'United Kingdom', symbol: '£', code: 'GBP' },
  { name: 'United States', symbol: '$', code: 'USD' },
  { name: 'India', symbol: '₹', code: 'INR' },
  { name: 'Pakistan', symbol: '₨', code: 'PKR' },
  { name: 'Bangladesh', symbol: '৳', code: 'BDT' },
  { name: 'Saudi Arabia', symbol: '﷼', code: 'SAR' },
  { name: 'UAE', symbol: 'د.إ', code: 'AED' },
  { name: 'Kuwait', symbol: 'د.ك', code: 'KWD' },
  { name: 'Qatar', symbol: 'ر.ق', code: 'QAR' },
];

const CurrencyScroll: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-12 overflow-hidden">
      <div className="relative flex">
        <div className="flex whitespace-nowrap animate-scroll">
          {currencies.map((currency, index) => (
            <div
              key={`${currency.code}-${index}`}
              className="inline-flex items-center space-x-4 mx-12"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-lg">{currency.symbol}</span>
              </div>
              <span className="text-gray-500 text-xl font-medium whitespace-nowrap">
                {currency.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencyScroll;