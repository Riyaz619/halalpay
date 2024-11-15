import React from 'react';
import { X } from 'lucide-react';

interface HalalReturnsInfoProps {
  onClose: () => void;
}

const HalalReturnsInfo: React.FC<HalalReturnsInfoProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-4">How Our Halal Returns Work</h3>
        
        <div className="space-y-4">
          <div className="bg-emerald-50 p-4 rounded-xl">
            <h4 className="font-bold mb-3">Our Halal Approach:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <p>USDT used in real asset-backed trading operations</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <p>Shariah-compliant liquidity provision</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <p>Returns from actual trading fees</p>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            <h4 className="font-bold mb-3">Key Benefits:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <p>100% Shariah-compliant - No Riba involved</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <p>Transparent profit-sharing model</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalalReturnsInfo;