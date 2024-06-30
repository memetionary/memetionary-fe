import { getQuestionList } from '@/api/question';
import MemeTester from '@/components/MemeTester';
import { notFound } from 'next/navigation';

type Params = {
  id: string;
};

const TEST_ID = '1';

export default async function TestPage({ params }: { params: Params }) {
  if (params.id !== TEST_ID) {
    notFound();
  }

  const { data: questionList } = await getQuestionList();
  return <MemeTester testId={+params.id} questionList={questionList} />;
}
