import { IconKakaotalk, IconPaperclip } from '@/assets/icons';

interface ShareButtonGroups {
  className?: string;
  size?: 'sm' | 'lg';
}

export default function ShareButtonGroups({ size = 'sm', ...props }: ShareButtonGroups) {
  const sizeStyle = size === 'sm' ? 'w-10 h-10' : 'w-14 h-14';
  return (
    <ul className={`flex items-center justify-center gap-x-4 bg-white ${props.className}`}>
      <li>
        <IconKakaotalk className={sizeStyle} />
      </li>
      <li className={`grid items-center rounded-full border border-transparent bg-black p-2 text-center ${sizeStyle}`}>
        <p className="font-bold text-white">X</p>
      </li>
      <li className={`rounded-full border border-transparent bg-gray-100 p-3 ${sizeStyle}`}>
        <IconPaperclip />
      </li>
    </ul>
  );
}
