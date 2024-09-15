'use client';

import { getQuestionList } from '@/api/question';
import { Question } from '@/app/api/question/data';
import MemeTester from '@/components/MemeTester';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type Params = {
  id: string;
};

const TEST_ID = '1';

export default function TestPage({ params }: { params: Params }) {
  if (params.id !== TEST_ID) {
    notFound();
  }

  const [questionData, setQuestionData] = useState<Question[]>();

  const fetchQuestionData = async () => {
    const { data: questionList } = await getQuestionList();
    setQuestionData(questionList);
  };

  useEffect(() => {
    fetchQuestionData();
  }, []);

  return <MemeTester testId={+params.id} questionList={questionData ?? []} />;
}
