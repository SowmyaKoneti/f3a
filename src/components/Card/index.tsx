import React from 'react';

// Define the Card component with the onClick prop
interface CardProps {
  color: string;
  onClick?: () => void; // Add onClick prop here
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ color, onClick, children }) => {
  // Use onClick handler if provided
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div style={{ backgroundColor: color, padding: '1rem', cursor: 'pointer' }} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Card;
