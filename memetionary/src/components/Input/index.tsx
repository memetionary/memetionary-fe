import { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  const [value, setValue] = useState('');

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
    props?.onChange?.(e);
  };

  return (
    <input
      className="disabled:border-gray text-gray h-10 w-full rounded-md border-2 border-black bg-white px-1.5 text-xs focus:outline-none sm:text-sm"
      {...props}
      value={value}
      onChange={handleInput}
    />
  );
}
