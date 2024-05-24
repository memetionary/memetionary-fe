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
        className='group-open:before:content-[" "] group-open:before:z-80 flex items-center  
                   gap-x-1 group-open:cursor-default group-open:before:fixed
                   group-open:before:bottom-0 group-open:before:left-0 group-open:before:right-0 group-open:before:top-0 
                   group-open:before:block [&::-webkit-details-marker]:hidden [&::marker]:hidden'
      >
        <IconShareNodes width={18} height={18} />
        {props.showText && <span className="text-xs">공유하기</span>}
      </summary>
      <menu className={`absolute right-0 ${posSytle} rounded-md border border-solid  border-gray-200  bg-white p-2`}>
        <ul className="flex items-center gap-x-2">
          <li>
            <IconKakaotalk width={36} height={36} />
          </li>
          <li className="rounded-full border border-solid p-2">
            <IconPaperclip width={18} height={18} />
          </li>
        </ul>
      </menu>
    </details>
  );
}
