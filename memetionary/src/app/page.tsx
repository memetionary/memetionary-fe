'use client';

import Button from '@/components/Button';
import { IconGood, IconLogo, IconMeme, IconOpinion } from '@/assets/icons';
import Input from '@/components/Input';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import RandomButtom from '@/components/RandomButton';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  return (
    <>
      <section className="flex h-fit w-80 min-w-fit flex-col items-center justify-center gap-6 py-16">
        <div className="h-64 min-h-52">
          <IconLogo width={'full'} height={'full'} />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-bold">전 세계의 밈들을 검색해보세요!</h2>
          <p className="whitespace-pre-wrap text-center">{`어디서 생긴 밈이길래 이렇게 유행인지 궁금하셨나요?\n밈셔너리에서 검색해보고 궁금증을 해결해보세요!`}</p>
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <Input onChange={handleInputChange} placeholder={`'어쩔티비'를 검색해보세요!`} />
          <div className="flex w-full gap-4">
            <RandomButtom type="text" />
            <Button size="full">
              <Link
                className="flex h-full w-full items-center justify-center"
                href={`/search/${encodeURIComponent(inputValue)}`}
              >
                검색하기
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="flex h-fit w-full min-w-fit items-center justify-center gap-48 p-10">
        <div className="flex w-fit flex-col justify-center gap-2">
          <h2 className="text-2xl font-bold text-primary-400">AI에게 물어봐!</h2>
          <p className="whitespace-pre-wrap">{`찾으시는 밈이 저희 사전에 없나요?\n그럼 저희의 AI조수인 미미 에게 물어보세요!\n검색 결과 하단에서 미미가 여러분들을 기다릴거에요!`}</p>
        </div>
        <div className="h-36">
          <IconMeme width={'full'} height={'full'} />
        </div>
      </section>
      <section className="flex h-fit w-full min-w-fit items-center justify-center gap-48 p-10">
        <div className="flex w-fit flex-col justify-center gap-2">
          <h2 className="text-2xl font-bold text-primary-400">밈의 선호도를 확인해보세요!</h2>
          <p className="whitespace-pre-wrap">{`밈이 마음에 드시나요? 그러면 좋아요를 눌러주세요!\n밈이 마음에 안드시나요? 그러면 싫어요를 눌러주세요!\n그리고 어떤 밈의 선호도가 높은지 확인해보세요!`}</p>
        </div>
        <div className="h-36">
          <IconGood width={'full'} height={'full'} />
        </div>
      </section>
      <section className="flex h-fit w-80 min-w-fit flex-col items-center justify-center gap-6 py-16">
        <div className=" h-20">
          <IconOpinion width={'full'} height={'full'} />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-bold">밈셔너리에 의견을 보내주세요!</h2>
          <p className="whitespace-pre-wrap text-center">{`밈셔너리는 현재 베타 버전이에요!\n앞으로 더 나은 서비스 제공을 위해 여러분들의 의견을 보내주세요!`}</p>
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <Link
            className="flex h-10 w-full items-center justify-center rounded-md border-2 border-primary-300 bg-white text-sm text-primary-300 enabled:hover:border-primary-500 enabled:hover:bg-primary-500 enabled:hover:text-white enabled:active:border-primary-300 enabled:active:bg-primary-300 disabled:bg-neutral-200 disabled:text-neutral-500"
            href="/contact"
          >
            의견 보내러가기
          </Link>
        </div>
      </section>
    </>
  );
}
