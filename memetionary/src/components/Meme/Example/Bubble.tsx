import { IconUserRegular, IconUserSolid } from '@/assets/icons';

interface BubbleProps {
  position: 'left' | 'right';
  children: React.ReactNode;
}

export default function Bubble({ position, children }: BubbleProps) {
  return (
    <div className={`flex gap-x-2 ${position === 'right' ? 'self-end' : ''}`}>
      {position === 'left' && <IconUserRegular width={18} hanging={18} />}
      <span className={`p-2 rounded-lg text-sm ${position === 'right' ? 'bg-violet-200' : 'bg-gray-200'}`}>
        {children}
      </span>
      {position === 'right' && <IconUserSolid width={18} hanging={18} />}
    </div>
  );
}
