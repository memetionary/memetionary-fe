'use client';

import { useRouter } from 'next/navigation';
import Rank from '@/components/Test/Rank';
import Share from '@/components/Test/Share';
import Button from '@/components/Button';

export default function TestResult() {
  const router = useRouter();

  const rank = 1;

  return (
    <>
      <div className="mx-10">
        <Rank value={rank} />
        <Button size="full" variant="contained" className="mt-4 text-xl font-semibold" onClick={handleClickTest}>
          {'테스트 다시하기'}
        </Button>
      </div>
      <Share />
    </>
  );
}
