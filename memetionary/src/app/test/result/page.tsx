'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Rank from '@/components/Test/Rank';
import TestShare from '@/components/Test/Share';
import Button from '@/components/Button';
import Question from '@/components/MemeTester/Question';
import { decoding } from '@/utils/encodingUtil';
import Title from '@/components/Test/Title';
import Linker from '@/components/Test/Linker';
import { questionList } from '@/app/api/question/data';
import { RANK } from '@/components/Test/constant';
import * as icons from '@/components/Test/icons';

export const dynamic = 'force-dynamic';

export default function TestResult() {
  const router = useRouter();
  const s = useSearchParams();
  const encodedResult = s.get('d') ?? '';
  const result = decoding(encodedResult);
  const { rank, answer, correct_rate } = JSON.parse(result);
  const { type, name, subDescription, description } = RANK[rank];
  const Icon = icons[type];

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
      <TestShare
        type="review"
        contents={{
          title: '제 1회 밈능력테스트 : 기초영역',
          text: '밈능력테스트의 결과를 확인해보세요!',
          imageUrl: '',
        }}
      />
      <Linker type="review" />
      <div className="flex w-full select-none flex-col items-center gap-5 bg-primary-100 px-14 py-10">
        <h3 className="text-2xl font-bold text-primary-700">{'오답노트'}</h3>
        {questionList.map((question, index) => (
          <Question key={question.no} {...question} selectedAnswer={answer[index]} />
        ))}
      </div>
      <Linker type="review" />
    </>
  );
}
