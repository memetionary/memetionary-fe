import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import { IconEnvelope } from '@/assets/icons';
import { ShareContents } from '@/hooks/useShare';

interface Props {
  contents: ShareContents;
}

export default function DetailAction({ contents, ...props }: Props) {
  return (
    <div className="flex items-center gap-3">
      <Link href={'/contact'} className="flex items-center gap-1">
        <IconEnvelope width={18} height={18} />
        <span className="text-xs">문의하기</span>
      </Link>
      <ShareButton contents={contents} position="top" showText />
    </div>
  );
}
