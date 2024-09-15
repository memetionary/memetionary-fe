import Tag, { tagStyle } from '@/components/Meme/TagList/Tag';

export interface TagListProps {
  list: { name: string; color: keyof typeof tagStyle }[];
}

export default function TagList({ ...props }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {props.list.map(({ name, color }) => (
        <Tag key={name} color={color}>
          {name}
        </Tag>
      ))}
    </div>
  );
}
