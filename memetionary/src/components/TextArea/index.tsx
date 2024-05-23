import { ChangeEventHandler, DetailedHTMLProps, TextareaHTMLAttributes, useEffect, useState } from 'react';

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  showTextLength?: boolean;
}

const TEXTAREA_MAX_LENGTH = 500;

export default function TextArea({ showTextLength, ...props }: TextAreaProps) {
  const [value, setValue] = useState('');

  const handleTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
    props?.onChange?.(e);
  };

  useEffect(() => {
    setValue(String(props.value ?? ''));
  }, [props.value]);

  return (
    <div className="flex flex-col gap-2">
      <textarea {...props} value={value} onChange={handleTextarea} />
      {showTextLength && (
        <span className="self-end text-sm text-gray-400">{`${value.length}/${TEXTAREA_MAX_LENGTH}`}</span>
      )}
    </div>
  );
}
