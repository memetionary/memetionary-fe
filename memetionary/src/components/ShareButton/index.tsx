import { IconKakaotalk, IconPaperclip, IconShareNodes } from '@/assets/icons';

interface ShareButtonProps {
  position?: 'top' | 'bottom';
  showText?: boolean;
}

export default function ShareButton({ ...props }: ShareButtonProps) {
  const posSytle = props.position === 'top' ? '-top-16' : 'top-6';

  return (
    <details className="group relative cursor-pointer">
      <summary
        // className='list-none outline-none cursor-pointer before:content-["+"] group-open:before:content-["-"] '
        className={`flex gap-x-1 items-center [&::marker]:hidden [&::-webkit-details-marker]:hidden
        group-open:before:block group-open:before:content-[" "]
        group-open:before:fixed group-open:before:right-0 group-open:before:bottom-0 group-open:before:left-0 group-open:before:z-80
      group-open:before:bg-red-500`}
      >
        <IconShareNodes width={18} height={18} />
        {props.showText && <span className="text-xs">공유하기</span>}
      </summary>
      <menu className={`absolute right-0 ${posSytle} p-2 border border-solid border-gray-200 rounded-md`}>
        <ul className="flex items-center gap-x-2">
          <li>
            <IconKakaotalk width={36} height={36} />
          </li>
          <li className="border border-solid p-2 rounded-full">
            <IconPaperclip width={18} height={18} />
          </li>
        </ul>
      </menu>
    </details>
  );
}
