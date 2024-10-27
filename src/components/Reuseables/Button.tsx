// Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonClass =
    variant === 'primary'
      ? 'primary-btn px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-800'
      : 'secondary-btn px-4 py-2 text-green-700 border border-green-700 rounded-md hover:bg-green-100';

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
};
