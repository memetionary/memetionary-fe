import Tag from '@/components/Meme/TagList/Tag';

export interface TagListProps {
  list: {
    type: 'info' | 'danger';
    value: string;
  }[];
}

export default function TagList({ ...props }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {props.list.map((e) => (
        <Tag key={e.value} isDanger={e.type === 'danger'}>
          {e.value}
        </Tag>
      ))}
    </div>
  );
}
