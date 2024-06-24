'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Share from '@/components/Test/Share';
import { getTestCount, postTest } from '@/api/test';
import TestThumbnail from '@/assets/images/test-thumbnail.png';

interface TestCount {
  tester: number;
  share: number;
}

const INIT_COUNT = { tester: 0, share: 0 };

export default function Test() {
  const [count, setCount] = useState<TestCount>(INIT_COUNT);

  const fetchTestInfo = async () => {
    const testInfo = await getTestCount({ id: 1 });
    setCount({ tester: Number(testInfo.tester_count), share: Number(testInfo.share_count) });
  };

  const handleClickTestSubmit = async () => {
    const answer = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
    const { rank, correct_rate } = await postTest({ id: 1, answer });
  };

  useEffect(() => {
    fetchTestInfo();
  }, []);

  return (
    <>
      <div className="mx-10">
        <Image src={TestThumbnail} alt="text-thumbnail" width={350} />
        <Button size="full" variant="contained" className="mt-4 text-xl font-semibold" onClick={handleClickTestSubmit}>
          {'테스트 하러가기'}
        </Button>
        <section className="grid gap-4 py-6">
          <h2 className="text-xl font-semibold text-primary-800">실시간 참여현황</h2>
          <div className="flex w-full flex-col gap-4 rounded-md bg-white px-16 py-6">
            <div className="flex flex-wrap justify-between">
              <p className="font-semibold">{'👥 응시자 수 :'}</p>
              <p className="font-semibold">{`${count?.tester.toLocaleString()} 명`}</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="font-semibold">{`💜 결과 공유 수 :`}</p>
              <p className="font-semibold">{`${count?.share.toLocaleString()} 번`}</p>
            </div>
          </div>
        </section>
      </div>
      <Share />
    </>
  );
}
