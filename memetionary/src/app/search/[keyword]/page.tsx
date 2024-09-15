'use client';

import axios from 'axios';
import type { Meme } from '@/app/api/meme/data';
import Input from '@/components/Input';
import MemeList from '@/components/Meme/MemeList';
import Pagination from '@/components/Pagination';
import { useRouter, useParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export default function SearchResultPage() {
  const router = useRouter();
  const { keyword } = useParams<{ keyword: string }>();
  const searchKeyword = decodeURIComponent(keyword);
  const [value, setValue] = useState<string>('');
  const [pageNo, setPageNo] = useState<number>(1);
  const [lastPageNo, setLastPageNo] = useState<number>(0);
  const [resultMemeList, setResultMemeList] = useState<Meme[]>([]);
  const isNoResult = resultMemeList.length === 0;

  const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== 'Enter') return;
    router.push(`/search/${encodeURIComponent(value)}`);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const fetchPageListData = async () => {
    const res = await import('@/app/api/meme/list/route');
    const req = new NextRequest(`${process.env.NEXT_PUBLIC_URL}/meme/list?pageNo=${pageNo}&keyword=${searchKeyword}`, {
      method: 'GET',
    });
    await (await res.GET(req)).json().then((data) => {
      const { data: result, pagination } = data;
      setResultMemeList(result);
      setLastPageNo(pagination.lastPageNo);
      console.log(pagination);
    });
  };

  useEffect(() => {
    fetchPageListData();
  }, [pageNo, searchKeyword]);

  return (
    <section className="flex w-full flex-col items-center gap-3">
      <h1 className="w-full text-2xl font-bold">{`${isNoResult ? '검색 결과가 없습니다!' : `${searchKeyword} 검색 결과`}`}</h1>
      <div className="flex w-full flex-col items-center gap-2">
        <Input onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder={'어쩔티비'} />
      </div>
      {!isNoResult && (
        <>
          <MemeList memeList={resultMemeList} />
          <Pagination lastPageNo={lastPageNo} currentPageNo={pageNo} setPageNo={setPageNo} />
        </>
      )}
    </section>
  );
}
