'use client';

import Image from 'next/image';
import TestShare from '@/components/Test/Share';
import TestThumbnail from '@/assets/images/test-thumbnail.png';
import Link from 'next/link';
import Button from '@/components/Button';
import Title from '@/components/Test/Title';
import { useEffect, useState } from 'react';

const TEST_ID = 1;
const MOCK_ANSWER = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];

const INIT_TEST_COUNT = {
  tester_count: 0,
  share_count: 0,
};

export const dynamic = 'force-dynamic';

export default function Test() {
  const [testCount, setTestCount] = useState<typeof INIT_TEST_COUNT>();

  const fetchTestData = async () => {
    const res = await import('@/app/api/test/[id]/route');
    const req = new Request(`/api/test/${TEST_ID}`, { method: 'GET' });
    const params = { id: TEST_ID };
    const { tester_count, share_count } = await (await res.GET(req, { params })).json();
    setTestCount({ tester_count, share_count });
  };

  useEffect(() => {
    fetchTestData();
  }, []);

  return (
    <>
      <Title />
      <div className="mx-10">
        <Image src={TestThumbnail} alt="text-thumbnail" width={350} priority />
        <Button size="full" variant="contained" className="mt-4 text-xl font-semibold">
          <Link className="flex h-full w-full items-center justify-center" href={`/test/${TEST_ID}`}>
            테스트 하러가기
          </Link>
        </Button>
        <section className="grid gap-4 py-6">
          <h2 className="text-xl font-semibold text-primary-800">실시간 참여현황</h2>
          <div className="flex w-full flex-col gap-4 rounded-md bg-white px-16 py-6">
            <div className="flex flex-wrap justify-between">
              <p className="font-semibold">{'👥 응시자 수 :'}</p>
              <p className="font-semibold">{`${testCount?.tester_count.toLocaleString() ?? 0} 명`}</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="font-semibold">{`💜 결과 공유 수 :`}</p>
              <p className="font-semibold">{`${testCount?.share_count.toLocaleString() ?? 0} 번`}</p>
            </div>
          </div>
        </section>
      </div>
      <TestShare
        type="preview"
        contents={{
          title: '제 1회 밈능력테스트 : 기초영역',
          text: '밈셔너리에서 주관하는 밈능력테스트로 당신의 밈 능력을 테스트해보세요!',
        }}
      />
    </>
  );
}
