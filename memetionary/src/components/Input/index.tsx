import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

type TextInputTypes = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'date' | 'url';

interface InputProps {
  id?: string;
  name?: string;
  type?: TextInputTypes;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ disabled = false, ...props }: InputProps) => {
  return (
    <input
      className="disabled:border-gray text-gray h-10 w-full rounded-md border-2 border-black bg-white px-1.5 text-xs focus:outline-none sm:text-sm "
      {...props}
    />
  );
};

export default Input;
