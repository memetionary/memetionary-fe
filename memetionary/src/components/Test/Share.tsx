'use client';

import { postShareCount } from '@/api/test';
import { IconKakaotalk, IconPaperclip, IconStudent, IconX } from '@/assets/icons';
import useShare, { ShareContents } from '@/hooks/useShare';

interface TestShareProps {
  type: 'preview' | 'review';
  contents: ShareContents;
}

const SHARE_MSG = {
  PREVIEW: '같이 풀고 싶은 친구에게 공유하기',
  REVIEW: '결과를 친구에게 공유하기',
};

export default function TestShare({ contents, type, ...props }: TestShareProps) {
  const title = type === 'preview' ? SHARE_MSG.PREVIEW : SHARE_MSG.REVIEW;
  const { handleKakaoFeedShare, handleCopyShare, handleXShare } = useShare(contents);

  return (
    <div className="grid w-full select-none justify-items-center gap-5 bg-primary-100 px-10 pt-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className={`flex w-full items-center justify-center gap-x-4 rounded-md bg-white px-4 py-3`}>
        <li
          className="cursor-pointer"
          onClick={() => {
            handleKakaoFeedShare({ buttonsTitle: type === 'preview' ? '응시하러 가기' : '결과 확인하러 가기' });
            if (type === 'review') {
              postShareCount({ id: 1 });
            }
          }}
        >
          <IconKakaotalk className="h-14 w-14" />
        </li>
        <li
          className={`white flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-solid p-3`}
          onClick={() => handleXShare({})}
        >
          <IconX />
        </li>
        <li
          className={`h-14 w-14 cursor-pointer rounded-full border border-transparent bg-gray-100 p-3`}
          onClick={() => handleCopyShare()}
        >
          <IconPaperclip />
        </li>
      </ul>
      <IconStudent width={100} />
    </div>
  );
}
