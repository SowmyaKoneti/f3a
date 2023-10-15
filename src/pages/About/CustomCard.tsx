// CustomCard.js
import React, { type ReactNode } from 'react';

interface CustomCardProps {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const CustomCard = ({ children, color, onClick }: CustomCardProps) => {
  return (
    <div className="your-card-class" style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </div>
  );
};

export default CustomCard;
