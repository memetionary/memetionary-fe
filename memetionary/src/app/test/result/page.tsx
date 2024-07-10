'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Rank from '@/components/Test/Rank';
import Share from '@/components/Test/Share';
import Button from '@/components/Button';
import { decoding } from '@/utils/encodingUtil';
import Title from '@/components/Test/Title';
import Linker from '@/components/Test/Linker';

export default function TestResult() {
  const router = useRouter();
  const s = useSearchParams();
  const encodedResult = s.get('d') ?? '';
  const result = decoding(encodedResult);
  const { rank, answer, correct_rate } = JSON.parse(result);

  const handleClickTest = () => {
    router.push('/test');
  };

  return (
    <>
      <Title />
      <div className="mx-10">
        <Rank value={rank} />
        <Button size="full" variant="contained" className="mt-4 text-xl font-semibold" onClick={handleClickTest}>
          {'테스트 다시하기'}
        </Button>
      </div>
      <Share type="review" />
      <Linker type="review" />
    </>
  );
}
