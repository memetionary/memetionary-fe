'use client';

import { IconKakaotalk, IconPaperclip, IconShareNodes, IconX } from '@/assets/icons';
import useShare, { ShareContents } from '@/hooks/useShare';

interface ShareButtonProps {
  contents: ShareContents;
  position?: 'top' | 'bottom';
  showText?: boolean;
}

export default function ShareButton({ contents, ...props }: ShareButtonProps) {
  const posStyle = props.position === 'top' ? '-top-16' : 'top-6';
  const { handleKakaoFeedShare, handleCopyShare, handleXShare } = useShare(contents);

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
      <menu className={`absolute right-0 ${posStyle} rounded-md border border-solid  border-gray-200  bg-white p-2`}>
        <ul className="flex items-center gap-x-2">
          <li onClick={() => handleKakaoFeedShare({ buttonsTitle: '밈셔너리에서 자세히 알아보기' })}>
            <IconKakaotalk width={36} height={36} />
          </li>
          <li
            className="rounded-full border border-solid p-2"
            onClick={() => handleXShare({ preText: '이 밈이 무엇인지 알고계신가요? ' })}
          >
            <IconX width={18} height={18} />
          </li>
          <li className="rounded-full border border-solid p-2" onClick={handleCopyShare}>
            <IconPaperclip width={18} height={18} />
          </li>
        </ul>
      </menu>
    </details>
  );
}
