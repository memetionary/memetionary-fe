import Link from 'next/link';
import { IconLogo } from '@/assets/icons';

interface LinkerProps {
  type: 'preview' | 'review';
}

const LINKER = {
  TITLE: '문제가 너무 어려우신가요?',
  SUBTITLE: {
    PREVIEW: '밈셔너리에서 예습하러 가기►',
    REVIEW: '밈셔너리에서 해설 찾아보기►',
  },
  CONTENT: `나는 모르는 밈이 어디서 이렇게 유행인지 궁금하셨나요?\n밈과사전에서 검색해보고 궁금증을 해결해보세요!`,
};

export default function Linker({ ...props }: LinkerProps) {
  const title = props.type === 'preview' ? LINKER.TITLE : '';
  const subtitle = props.type === 'preview' ? LINKER.SUBTITLE.PREVIEW : LINKER.SUBTITLE.REVIEW;

  const bgStyle = props.type === 'preview' ? 'bg-primary-100' : 'bg-transparent';

  return (
    <section className={`flex h-fit w-full select-none flex-col items-center gap-5 p-5 ${bgStyle}`}>
      <h2 className="text-2xl font-bold text-primary-800">
        {title}
        <Link className="flex h-80 w-80 flex-col items-center gap-2 rounded-full bg-white pt-14 " href={'/'}>
          <IconLogo width={100} height={100} />
          <h3 className="text-xl font-bold text-primary-800">{subtitle}</h3>
          <p className="whitespace-pre-wrap text-center text-xs">{LINKER.CONTENT}</p>
        </Link>
      </h2>
    </section>
  );
}
