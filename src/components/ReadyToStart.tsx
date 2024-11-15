import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ReadyToStartProps {
  onJoinClick: () => void;
}

const ReadyToStart: React.FC<ReadyToStartProps> = ({ onJoinClick }) => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none mb-8">
          Ready to start?
        </h2>
        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of Muslims worldwide who are already experiencing the future of halal banking.
        </p>
        <button 
          onClick={onJoinClick}
          className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <span>Join now</span>
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ReadyToStart;