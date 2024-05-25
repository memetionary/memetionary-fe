import { NextResponse } from 'next/server';
import { memeList } from '@/app/api/meme/data';

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const hasMemeData = memeList.find((e) => e.id === id);

  if (hasMemeData) {
    return NextResponse.json(hasMemeData);
  }

  return NextResponse.json({ status: 500 });
};
