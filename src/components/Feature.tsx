import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold tracking-tight mb-4">{title}</h3>
      <p className="text-gray-600 font-medium">{description}</p>
    </div>
  );
}

export default Feature;