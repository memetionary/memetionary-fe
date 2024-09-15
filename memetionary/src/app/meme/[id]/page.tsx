'use client';

import TitleDetail from '@/components/Meme/TitleDetail';
import Evaluation from '@/components/Meme/Evaluation';
import TagList from '@/components/Meme/TagList';
import DetailAction from '@/components/Meme/DetailAction';
import FooterDetail from '@/components/Meme/FooterDetail';
import { getMemeDetail } from '@/api/meme';
import Thumbnail from '@/components/Meme/Thumbnail';
import Description from '@/components/Meme/Article';
import Conversation from '@/components/Meme/Conversation';
import Ping from '@/components/Meme/Ping';
import { useEffect, useState } from 'react';
import { type Meme } from '@/app/api/meme/data';
import Loading from '@/app/test/loading';

export default async function Meme({ params: { id } }: { params: { id: string } }) {
  const [memeData, setMemeData] = useState<Meme>();

  const fetchMemeData = async () => {
    const meme = await getMemeDetail({ id });
    setMemeData(meme);
  };

  useEffect(() => {
    fetchMemeData();
  }, []);

  if (memeData === undefined) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex w-full items-end justify-between">
        <h2 className="text-3xl font-bold">{memeData.title}</h2>
        <TitleDetail
          view={memeData.view}
          evaluation={memeData.evaluation}
          contents={{ title: memeData.title, text: memeData.description || '', imageUrl: memeData.image }}
        />
      </div>
      {memeData.image && <Thumbnail src={memeData.image} title={memeData.title} size="lg" />}
      <Description title={memeData.title} content={memeData.description} />
      {memeData.exmapleType === 'conversation' ? (
        <Conversation content={memeData.example} />
      ) : (
        <Ping content={memeData.example} />
      )}
      {memeData.tags && <TagList list={memeData.tags} />}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <FooterDetail view={memeData.view} lastUpdate={new Date(memeData.lastUpdate)} />
        <DetailAction
          contents={{ title: memeData.title, text: memeData.description || '', imageUrl: memeData.image }}
        />
      </div>
      {/* <Evaluation {...meme.evaluation} /> */}
    </>
  );
}
