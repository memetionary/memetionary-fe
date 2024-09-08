import { IconUserRegular, IconUserSolid } from '@/assets/icons';

interface BubbleProps {
  position: 'left' | 'right';
  children: React.ReactNode;
}

export default function Bubble({ ...props }: BubbleProps) {
  return (
    <div className={`flex gap-x-2 ${props.position === 'right' ? 'self-end' : ''}`}>
      {props.position === 'left' && <IconUserRegular width={18} hanging={18} />}
      <span className={`rounded-lg p-2 text-sm ${props.position === 'right' ? 'bg-violet-300' : 'bg-gray-300'}`}>
        {props.children}
      </span>
      {props.position === 'right' && <IconUserSolid width={18} hanging={18} />}
    </div>
  );
}
