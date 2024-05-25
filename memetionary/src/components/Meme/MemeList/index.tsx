import { Meme } from '@/app/api/meme/data';
import { IconEyeSolid, IconThumbsDown, IconThumbsUp } from '@/assets/icons';
import TagList from '@/components/Meme/TagList';
import TitleDetail from '@/components/Meme/TitleDetail';
import Image from 'next/image';
import Link from 'next/link';
import Thumbnail from '@/components/Meme/Thumbnail';

interface MemeListProps {
  memeList: Meme[];
}

const MemeList = ({ memeList, ...props }: MemeListProps) => {
  return (
    <ul className="flex w-full flex-col justify-center gap-5" {...props}>
      {memeList.map(({ id, title, thumbnail, articles, tags, view, evaluation }) => (
        <li key={id}>
          <Link href={`/meme/${id}`} className="grid grid-cols-[0.4fr_0.6fr] gap-3">
            <Thumbnail src={thumbnail} title={title} size="md" />
            <div className="flex flex-col gap-1">
              <div className="flex w-full justify-between">
                <h3 className="text-xl font-semibold">{title}</h3>
                <TitleDetail view={view} evaluation={evaluation} />
              </div>
              <p className="w-full">{articles[0]?.content}</p>
              <TagList list={tags || []} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MemeList;
