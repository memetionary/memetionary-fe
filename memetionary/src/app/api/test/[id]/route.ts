import { NextResponse } from 'next/server';
import { fireStore } from '../../../../../firebase/firebasedb';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

export const GET = async (request: Request, { params }: { params: { id: number } }) => {
  const docRef = doc(fireStore, `test/${params.id}`);
  const res = await getDoc(docRef);

  if (res.exists()) {
    const data = res.data();
    return NextResponse.json(data);
  }

  return NextResponse.json({ status: 500 });
};

export const POST = async (request: Request, { params }: { params: { id: number } }) => {
  const { answer: tester_answer } = await request.json();
  const docRef = doc(fireStore, `test/${params.id}`);
  const res = await getDoc(docRef);

  if (res.exists()) {
    const data = res.data();
    const { answer, correct_count, tester_count, rank } = data;

    const newTesterCount = tester_count + 1;

    let score = 0;

    // 전체 테스터의 정답률
    const newCorrectCount = correct_count.map((e: number, i: number) => {
      if (tester_answer[i] === answer[i]) {
        score += 10;
        return e + 1;
      }
      return e;
    });

    const newCorrectRate = newCorrectCount.map((e: number) => ((e / newTesterCount) * 100).toFixed(2));

    // 테스터의 등급
    const getRank = (score: number, cutline: number[]): number => {
      for (let i = cutline.length; i >= 0; i--) {
        if (score <= cutline[i] && score > (cutline[i - 1] ?? 0)) {
          return i;
        }
      }
      return 0;
    };

    const tester_rank = getRank(score, [20, 40, 60, 80, 100]);

    // 전체 테스터의 등급
    const newRank = rank.map((e: number, i: number) => {
      if (i === tester_rank) return e + 1;
      return e;
    });

    const newData = {
      ...data,
      rank: newRank,
      tester_count: newTesterCount,
      correct_count: newCorrectCount,
    };

    updateDoc(docRef, newData);

    return NextResponse.json({
      rank: tester_rank,
      correct_rate: newCorrectRate,
    });
  }

  return NextResponse.json({ status: 500 });
};
