'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { encoding } from '@/utils/encodingUtil';
import { postTest } from '@/api/test';

interface SubmitterProps {
  id: number;
  answer: number[];
}

export default function Submitter({ id, answer }: SubmitterProps) {
  const route = useRouter();

  const handleClickTestSubmit = async () => {
    const { rank, correct_rate } = await postTest({ id, answer });
    const encodedResult = encoding(JSON.stringify({ rank, answer, correct_rate }));
    route.replace(`/test/result?d=${encodedResult}`);
  };

  return (
    <Button size="full" variant="contained" className="text-xl font-semibold" onClick={handleClickTestSubmit}>
      {'테스트 결과 확인하기'}
    </Button>
  );
}
