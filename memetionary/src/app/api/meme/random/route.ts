import { NextResponse } from 'next/server';
import { memeList } from '@/app/api/meme/data';
import { randomNum } from '@/utils/randomUtil';

export const GET = async () => {
  const randomMemeIndex = randomNum(0, memeList.length - 1);
  const randomId = memeList[randomMemeIndex].id;

  if (randomId) {
    return NextResponse.json(randomId);
  }

  return NextResponse.json({ status: 500 });
};
