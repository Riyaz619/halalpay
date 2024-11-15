import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const regions = {
  'Major Markets': [
    'United States',
    'United Kingdom',
  ],
  'South Asia': [
    'India',
    'Pakistan',
    'Bangladesh'
  ],
  'GCC Countries': [
    'Saudi Arabia',
    'United Arab Emirates',
    'Kuwait',
    'Qatar',
    'Bahrain',
    'Oman'
  ]
};

const CoverageList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-xl text-gray-500 font-medium">
          {isOpen ? 'Close coverage list' : 'View supported countries'}
        </span>
        {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </button>
      
      {isOpen && (
        <div className="px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {Object.entries(regions).map(([region, countries]) => (
              <div key={region}>
                <h3 className="text-xl font-bold mb-4">{region}</h3>
                <ul className="space-y-3">
                  {countries.map(country => (
                    <li key={country} className="text-gray-600 text-lg">
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoverageList;