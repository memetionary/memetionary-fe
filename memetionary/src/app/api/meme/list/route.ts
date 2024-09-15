import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { MemeProperties, parseProperties } from '@/utils/notion';
import { Meme } from '@/app/api/meme/data';

const DEFAULT_ITEM_LIMIT = 5;

const NOTION_API_KEY = process.env.NEXT_PUBLIC_NOTION_API_KEY || '';
const NOTION_DB_ID = process.env.NEXT_PUBLIC_NOTION_DB_ID || '';
const NOTION_API_URL = `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const pageNo = searchParams.get('pageNo') || 1;
    const limit = searchParams.get('limit') || DEFAULT_ITEM_LIMIT;
    const keyword = searchParams.get('keyword') || '';

    const memeList = await getMemeList(keyword);

    // const originMemeList = keyword.length > 0 ? searchMemeList(keyword) : memeList;
    const memeItems = getMemeItems(+pageNo, +limit, memeList);
    const paginationInfo = getPaginationInfo(memeList.length, +pageNo, +limit);

    console.log(memeItems);
    console.log(paginationInfo);

    return NextResponse.json({ data: memeItems, pagination: paginationInfo }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: '[INTERNAL SERVER ERROR]' }, { status: 500 });
  }
}

const getMemeList = async (keyword: string) => {
  try {
    const { data } = await axios.post(
      NOTION_API_URL,
      {
        filter: {
          property: 'title',
          rich_text: {
            contains: keyword,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
      },
    );

    return data.results.map(({ properties }: { properties: MemeProperties }) => parseProperties(properties));
  } catch (error) {
    throw error;
  }
};

const getMemeItems = (pageNo: number, limit: number, memeList: Meme[]): Meme[] => {
  const totalCount = memeList.length;
  const startIndex = (pageNo - 1) * limit;
  const endIndex = startIndex + limit > totalCount ? totalCount : startIndex + limit;
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
