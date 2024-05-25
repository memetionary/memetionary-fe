import { IconThumbsDownSolid, IconThumbsUpSolid } from '@/assets/icons';

import type { Evaluation } from '@/app/api/meme/data';

export default function Evaluation({ ...props }: Evaluation) {
  const borderStyle = (isActive: boolean) => (isActive ? 'border-violet-700' : 'border-gray-200');

  return (
    <div className="flex gap-4 justify-self-center">
      <button className={`flex items-center gap-2 border-2 p-2 ${borderStyle(props.good.isEnabled)} rounded-full`}>
        <IconThumbsUpSolid width={24} height={24} />
        <span>{props.good.count}</span>
      </button>
      <button className={`flex items-center gap-2 border-2 p-2 ${borderStyle(props.bad.isEnabled)} rounded-full`}>
        <IconThumbsDownSolid width={24} height={24} />
        <span>{props.bad.count}</span>
      </button>
    </div>
  );
}
