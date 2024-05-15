import Image from 'next/image';
import Article, { ArticleProps } from '@/components/Meme/Article';
import TitleDetail from '@/components/Meme/TitleDetail';
import Evaluation, { EvaluationProps } from '@/components/Meme/Evaluation';
import Example, { ExampleProps } from '@/components/Meme/Example';
import TagList, { TagListProps } from '@/components/Meme/TagList';
import Video from '@/components/Video';
import DetailAction from '@/components/Meme/DetailAction';
import FooterDetail from '@/components/Meme/FooterDetail';
import { articles, evaluation, example, tags } from '@/components/Meme/dummy';

interface MemeProps {
  title: string;
  lastUpdate: Date;
  view: number;
  evaluation: EvaluationProps;
  thumbnail?: string;
  articles: ArticleProps[];
  image?: string;
  video?: string;
  example: ExampleProps[];
  tags?: TagListProps[];
}

const props: MemeProps = {
  title: '어쩔 티비',
  lastUpdate: new Date(),
  view: 12345,
  evaluation,
  thumbnail: 'https://picsum.photos/600/400',
  articles,
  video: 'https://www.youtube.com/embed/ReKRSTB5PK8?si=aejO38_VUs1behAi',
  example,
  tags,
};

export default function Meme() {
  return (
    <>
      <div className="flex justify-between items-end">
        <h2 className="text-3xl font-bold">{props.title}</h2>
        <TitleDetail view={props.view} evaluation={props.evaluation} />
      </div>
      <Image
        className="justify-self-center rounded-lg"
        src={props.thumbnail ?? ''}
        width={600}
        height={400}
        loading="lazy"
        alt="meme-thumbnail"
      />
      {props.articles.map((e) => (
        <Article key={e.title} title={e.title} content={e.content} />
      ))}
      {props.video && <Video src={props.video} />}
      <Example list={props.example} />
      {props.tags && <TagList list={props.tags} />}
      <div className="flex justify-between items-end">
        <FooterDetail view={props.view} lastUpdate={props.lastUpdate} />
        <DetailAction />
      </div>
      <Evaluation {...props.evaluation} />
    </>
  );
}
