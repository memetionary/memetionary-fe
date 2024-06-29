import { NextResponse } from 'next/server';
import { questionList } from '@/app/api/question/data';

export async function GET() {
  try {
    return NextResponse.json({ data: questionList }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: '[INTERNAL SERVER ERROR]' }, { status: 500 });
  }
}
