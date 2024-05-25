import { NextRequest, NextResponse } from 'next/server';
import { Meme, memeList } from '@/app/api/meme/data';

const DEFAULT_ITEM_LIMIT = 5;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const pageNo = searchParams.get('pageNo') || 1;
    const limit = searchParams.get('limit') || DEFAULT_ITEM_LIMIT;
    const keyword = searchParams.get('keyword') || '';

    const originMemeList = keyword.length > 0 ? searchMemeList(keyword) : memeList;
    const memeItems = getMemeItems(+pageNo, +limit, originMemeList);
    const paginationInfo = getPaginationInfo(originMemeList.length, +pageNo, +limit);

    return NextResponse.json({ data: memeItems, pagination: paginationInfo }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: '[INTERNAL SERVER ERROR]' }, { status: 500 });
  }
}

const searchMemeList = (keyword: string): Meme[] => {
  const searchResult = memeList.filter((meme) =>
    meme.title.replace(/(\s*)/g, '').includes(keyword.replace(/(\s*)/g, '')),
  );
  return searchResult;
};

const getMemeItems = (pageNo: number, limit: number, memeList: Meme[]): Meme[] => {
  const totalCount = memeList.length;
  const startIndex = (pageNo - 1) * limit;
  const endIndex = startIndex + limit > totalCount ? totalCount : startIndex + limit;
  console.log(memeList);
  return memeList.slice(startIndex, endIndex);
};

export interface PaginationInfo {
  pageNo: number;
  pageLimit: number;
  startPageNo: number;
  lastPageNo: number;
  totalCount: number;
}

const getPaginationInfo = (totalCount: number, pageNo: number, limit: number): PaginationInfo => {
  const startPageNo = 1;
  const lastPageNo = Math.ceil(totalCount / limit);
  return {
    pageNo: pageNo,
    pageLimit: limit,
    startPageNo,
    lastPageNo,
    totalCount,
  };
};
