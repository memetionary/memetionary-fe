import { ChangeEventHandler, DetailedHTMLProps, SelectHTMLAttributes, useEffect, useState } from 'react';

interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: string[];
}

export default function Select({ ...props }: SelectProps) {
  const optionType = props.options[0];
  const [value, setValue] = useState(optionType);

  const handleChangeSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
    props?.onChange?.(e);
  };

  useEffect(() => {
    setValue(String(props.value || optionType));
  }, [props.value]);

  return (
    <select {...props} value={value} onChange={handleChangeSelect}>
      {props.options.map((e, i) => (
        <option key={e} value={e} disabled={i === 0}>
          {e}
        </option>
      ))}
    </select>
  );
}
