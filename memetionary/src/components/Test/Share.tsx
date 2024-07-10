import { IconStudent } from '@/assets/icons';
import ShareButtonGroups from '../ShareButton/ShareButtonGroup';

interface TestShareProps {
  type: 'preview' | 'review';
}

const SHARE_MSG = {
  PREVIEW: '같이 풀고 싶은 친구에게 공유하기',
  REVIEW: '결과를 친구에게 공유하기',
};

export default function TestShare({ ...props }: TestShareProps) {
  const title = props.type === 'preview' ? SHARE_MSG.PREVIEW : SHARE_MSG.REVIEW;
  return (
    <div className="grid w-full justify-items-center gap-5 bg-primary-100 px-10 pt-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <ShareButtonGroups className="w-full rounded-md px-4 py-3" size="lg" />
      <IconStudent width={100} />
    </div>
  );
}
