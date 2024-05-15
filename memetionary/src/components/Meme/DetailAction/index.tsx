import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import { IconEnvelope } from '@/assets/icons';

export default function DetailAction() {
  const iconStyle = 'flex items-center gap-x-1';
  return (
    <div className="flex items-center gap-x-2">
      <Link href={'/contact'} className={iconStyle}>
        <IconEnvelope width={18} height={18} />
        <span className="text-xs">문의하기</span>
      </Link>
      <div className={iconStyle}>
        <ShareButton position="top" showText />
      </div>
    </div>
  );
}
