import Image from 'next/image';
import Button from '@/components/Button';
import TestShare from '@/components/Test/Share';
import TestThumbnail from '@/assets/images/test-thumbnail.png';

const TITLE = {
  CAPTION: '밈셔너리에서 주관하는',
  MAIN: `제 1회 밈능력테스트\n기초 영역`,
};

export default function Search() {
  return (
    <div className="grid h-fit min-w-80 max-w-192 content-center">
      <div className="grid gap-4 bg-primary-50 px-10 py-4 text-center">
        <div>
          <p className="text-sm text-primary-700">{TITLE.CAPTION}</p>
          <h1 className="whitespace-break-spaces text-2xl font-bold text-primary-700">{TITLE.MAIN}</h1>
        </div>
        <Image src={TestThumbnail} alt="text-thumbnail" width={350} />
        <Button size="full" variant="contained" className="text-xl font-semibold">
          {'테스트 하러가기'}
        </Button>
        <section className="grid gap-4 py-6">
          <h2 className="text-2xl font-semibold text-primary-800">실시간 참여현황</h2>
          <div className="flex flex-col gap-4 rounded-md bg-white p-6">
            <div className="flex justify-evenly">
              <p className="font-semibold">{'👥 응시자 수 :'}</p>
              <p className="font-semibold">{`141,124 명`}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold">{`💜 결과 공유 수 :`}</p>
              <p className="font-semibold">{`1,124 번`}</p>
            </div>
          </div>
        </section>
      </div>
      <TestShare />
    </div>
  );
}
