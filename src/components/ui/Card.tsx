'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
