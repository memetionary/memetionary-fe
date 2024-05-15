import Tag from '@/components/Meme/TagList/Tag';

export interface TagListProps {
  type: 'info' | 'danger';
  value: string;
}

export default function TagList({ list }: { list: TagListProps[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {list.map((e) => (
        <Tag key={e.value} isDanger={e.type === 'danger'}>
          {e.value}
        </Tag>
      ))}
    </div>
  );
}
