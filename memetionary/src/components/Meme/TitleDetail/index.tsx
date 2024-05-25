import { IconEyeSolid, IconThumbsDown, IconThumbsUp } from '@/assets/icons';
import ShareButton from '@/components/ShareButton';
import { Evaluation } from '@/app/api/meme/data';

interface DetailProps {
  view: number;
  evaluation: Evaluation;
}

export default function TitleDetail({ ...props }: DetailProps) {
  const iconStyle = 'flex items-center gap-x-1';

  return (
    <div className="flex items-center gap-x-2">
      {/* <div className={iconStyle}>
        <IconEyeSolid width={18} height={18} />
        <span className="text-xs">{props.view.toLocaleString()}</span>
      </div> */}
      {/* <div className={iconStyle}>
        <IconThumbsUp width={18} height={18} />
        <span className="text-xs">{props.evaluation.good.count.toLocaleString()}</span>
      </div>
      <div className={iconStyle}>
        <IconThumbsDown width={18} height={18} />
        <span className="text-xs">{props.evaluation.bad.count.toLocaleString()}</span>
      </div> */}
      <ShareButton />
    </div>
  );
}
