import Image from 'next/image';
import Article from '@/components/Meme/Article';
import TitleDetail from '@/components/Meme/TitleDetail';
import Evaluation from '@/components/Meme/Evaluation';
import Example from '@/components/Meme/Example';
import TagList from '@/components/Meme/TagList';
import Video from '@/components/Video';
import DetailAction from '@/components/Meme/DetailAction';
import FooterDetail from '@/components/Meme/FooterDetail';
import { getMemeDetail } from '@/api/meme';
import Thumbnail from '@/components/Meme/Thumbnail';

export default async function Meme({ params: { id } }: { params: { id: string } }) {
  const meme = await getMemeDetail({ id });

  return (
    <>
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold">{meme.title}</h2>
        <TitleDetail view={meme.view} evaluation={meme.evaluation} />
      </div>
      <Thumbnail src={meme.thumbnail} title={meme.title} size="lg" />
      {meme.articles?.map((e) => <Article key={e.title} title={e.title} content={e.content} />)}
      {meme.video && <Video src={meme.video} />}
      <Example list={meme.example} />
      {meme.tags && <TagList list={meme.tags} />}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <FooterDetail view={meme.view} lastUpdate={new Date(meme.lastUpdate)} />
        <DetailAction />
      </div>
      {/* <Evaluation {...meme.evaluation} /> */}
    </>
  );
}
