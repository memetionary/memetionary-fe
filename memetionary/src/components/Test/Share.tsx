import { IconStudent } from '@/assets/icons';
import ShareButtonGroups from '../ShareButton/ShareButtonGroup';

const SHARE_MSG = '같이 풀고 싶은 친구에게 공유하기';
interface TestShareProps {
  title?: string;
}

export default function TestShare({ title = SHARE_MSG, ...props }: TestShareProps) {
  return (
    <div className="grid w-full justify-items-center gap-5 bg-primary-100 px-10 pt-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <ShareButtonGroups className="w-full rounded-md px-4 py-3" size="lg" />
      <IconStudent width={100} />
    </div>
  );
}
