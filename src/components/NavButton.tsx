import React from 'react';

interface NavButtonProps {
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ children }) => {
  return (
    <button className="text-gray-600 hover:text-black transition-colors font-medium">
      {children}
    </button>
  );
}

export default NavButton;