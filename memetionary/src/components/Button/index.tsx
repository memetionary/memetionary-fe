import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  size: 'small' | 'medium' | 'full';
  // color: 'primary' | 'danger' | 'black';
  variant?: 'outlined' | 'contained';
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: 'w-12 h-10',
  medium: 'w-24 h-10',
  full: 'w-full h-10',
};

const ButtonVariant = {
  outlined:
    'border-2 border-primary-300 bg-white text-primary-300 enabled:hover:border-primary-500 enabled:hover:bg-primary-500 enabled:hover:text-white enabled:active:border-primary-300 enabled:active:bg-primary-300',
  contained: 'bg-primary-300 text-white enabled:hover:bg-primary-500 enabled:active:bg-primary-300',
};

const Button = ({ size, variant = 'contained', className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${ButtonSize[size]} ${ButtonVariant[variant]} flex items-center justify-center rounded-md text-sm disabled:bg-neutral-200 disabled:text-neutral-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
