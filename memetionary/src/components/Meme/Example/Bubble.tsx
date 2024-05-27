import { IconUserRegular, IconUserSolid } from '@/assets/icons';

interface BubbleProps {
  position: 'left' | 'right';
  children: React.ReactNode;
}

export default function Bubble({ position, children }: BubbleProps) {
  return (
    <div className={`flex gap-x-2 ${position === 'right' ? 'self-end' : ''}`}>
      {position === 'left' && <IconUserRegular width={18} hanging={18} />}
      <span className={`rounded-lg p-2 text-sm ${position === 'right' ? 'bg-violet-300' : 'bg-gray-300'}`}>
        {children}
      </span>
      {position === 'right' && <IconUserSolid width={18} hanging={18} />}
    </div>
  );
}
