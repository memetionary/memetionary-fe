import { IconThumbsDownSolid, IconThumbsUpSolid } from '@/assets/icons';

export interface EvaluationProps {
  good: {
    count: number;
    isGood: boolean;
  };
  bad: {
    count: number;
    isBad: boolean;
  };
}

export default function Evaluation({ ...props }: EvaluationProps) {
  const borderStyle = (isActive: boolean) => (isActive ? 'border-violet-700' : 'border-gray-200');

  return (
    <div className="flex justify-self-center gap-4">
      <button className={`flex items-center p-2 gap-2 border-2 ${borderStyle(props.good.isGood)} rounded-full`}>
        <IconThumbsUpSolid width={24} height={24} />
        <span>{props.good.count}</span>
      </button>
      <button className={`flex items-center p-2 gap-2 border-2 ${borderStyle(props.bad.isBad)} rounded-full`}>
        <IconThumbsDownSolid width={24} height={24} />
        <span>{props.bad.count}</span>
      </button>
    </div>
  );
}
