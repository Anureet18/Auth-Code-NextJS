'use client';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', onClick, className }) => {
  // console.log(children, type = 'button', onClick, className ,"consoleeee")
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
