import { IconLogo } from '@/assets/icons';

interface Props {
  content: string;
}

export default function Ping({ ...props }: Props) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 rounded-md border border-black p-3">
      <IconLogo width={32} height={32} />
      <div>
        <div className="flex gap-2">
          <span className="font-bold">{'밈셔너리'}</span>
          <span className="text-gray-400">{'@memetionary'}</span>
        </div>
        <div>{props.content}</div>
      </div>
    </div>
  );
}
