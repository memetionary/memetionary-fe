import { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  const [value, setValue] = useState('');

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
    props?.onChange?.(e);
  };

  return <input {...props} value={value} onChange={handleInput} />;
}
