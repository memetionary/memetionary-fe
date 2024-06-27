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
    <Button size="full" variant="contained" className="mt-4 text-xl font-semibold" onClick={handleClickTestSubmit}>
      {'테스트 하러가기'}
    </Button>
  );
}
