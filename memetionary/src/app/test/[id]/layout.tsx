import { IconLogo } from '@/assets/icons';
import Link from 'next/link';

export default function TestPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit w-full flex-col items-center">
      {children}
      <section className="flex h-fit w-full select-none flex-col items-center gap-5 bg-primary-100 p-5">
        <h2 className="text-2xl font-bold text-primary-800">문제가 너무 어려우신가요?</h2>
        <Link className="flex h-80 w-80 flex-col items-center gap-2 rounded-full bg-white pt-14 " href={'/'}>
          <IconLogo width={100} height={100} />
          <h3 className="text-xl font-bold text-primary-800">밈셔너리에서 예습하러 가기►</h3>
          <p className="whitespace-pre-wrap text-center text-xs">{`나는 모르는 밈이 어디서 이렇게 유행인지 궁금하셨나요?\n밈과사전에서 검색해보고 궁금증을 해결해보세요!`}</p>
        </Link>
      </section>
    </div>
  );
}
