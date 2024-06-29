import Image from 'next/image';
import Share from '@/components/Test/Share';
import { getTestCount } from '@/api/test';
import TestThumbnail from '@/assets/images/test-thumbnail.png';
import Title from '@/components/Test/Title';

const TEST_ID = 1;
const MOCK_ANSWER = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];

export default async function Test() {
  const { tester_count, share_count } = await getTestCount({ id: TEST_ID });

  return (
    <>
      <Title />
      <div className="mx-10">
        <Image src={TestThumbnail} alt="text-thumbnail" width={350} priority />
        <Submitter id={TEST_ID} answer={MOCK_ANSWER} />
        <section className="grid gap-4 py-6">
          <h2 className="text-xl font-semibold text-primary-800">실시간 참여현황</h2>
          <div className="flex w-full flex-col gap-4 rounded-md bg-white px-16 py-6">
            <div className="flex flex-wrap justify-between">
              <p className="font-semibold">{'👥 응시자 수 :'}</p>
              <p className="font-semibold">{`${tester_count.toLocaleString()} 명`}</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="font-semibold">{`💜 결과 공유 수 :`}</p>
              <p className="font-semibold">{`${share_count.toLocaleString()} 번`}</p>
            </div>
          </div>
        </section>
      </div>
      <Share />
    </>
  );
}
