import { getLastUpdateTime } from '@/utils/timeUtils';

interface FooterDetailProps {
  view: number;
  lastUpdate: Date;
}

export default function FooterDetail({ ...props }: FooterDetailProps) {
  const iconStyle = 'flex items-center gap-x-1';

  return (
    <div className="flex gap-x-2">
      {/* <div className={iconStyle}>
        <span className="text-xs">조회수</span>
        <span className="text-xs">{props.view.toLocaleString()}</span>
      </div> */}
      <div className={iconStyle}>
        <span className="text-xs">최근 수정시간</span>
        <span className="text-xs">{getLastUpdateTime(props.lastUpdate)}</span>
      </div>
    </div>
  );
}
