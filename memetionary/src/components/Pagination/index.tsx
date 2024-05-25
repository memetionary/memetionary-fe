import { IconLeftDirection, IconRightDirection } from '@/assets/icons';
import PaginationItem from '@/components/Pagination/PaginationItem';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  lastPageNo: number;
  currentPageNo: number;
  setPageNo: Dispatch<SetStateAction<number>>;
}

const FIRST_PAGE_NO = 1;
const DEFAULT_VIEW_LIMIT = 10;

const getStartPageNo = (lastPageNo: number, currentPageNo: number, viewLimit: number): number => {
  const centerIndex = Math.ceil(viewLimit / 2);

  if (currentPageNo <= centerIndex) {
    return FIRST_PAGE_NO;
  }

  if (currentPageNo > lastPageNo - centerIndex) {
    return lastPageNo - viewLimit + 1;
  }

  return lastPageNo - centerIndex + 1;
};

const Pagination = ({ lastPageNo, currentPageNo, setPageNo }: PaginationProps) => {
  const viewLimit = lastPageNo < DEFAULT_VIEW_LIMIT ? lastPageNo : DEFAULT_VIEW_LIMIT;
  const startPage = getStartPageNo(lastPageNo, currentPageNo, viewLimit);
  const isFirstPage = currentPageNo === FIRST_PAGE_NO;
  const isLastPage = currentPageNo === lastPageNo;

  return (
    <ul className="flex gap-2 h-10 w-full cursor-pointer justify-center items-center">
      <li
        className={`flex cursor-pointer h-full items-center ${isFirstPage ? 'fill-zinc-400' : 'fill-primary-500'}`}
        onClick={() => setPageNo((prev) => Math.max(1, prev - 1))}
      >
        <IconLeftDirection width={15} height={15} />
      </li>
      {new Array(viewLimit).fill(0).map((_, index) => {
        const pageNo = startPage + index;
        const isCurrent = pageNo === currentPageNo;
        return <PaginationItem key={pageNo} pageNo={pageNo} isCurrent={isCurrent} setPageNo={setPageNo} />;
      })}
      <li
        className={`flex cursor-pointer h-full items-center ${isLastPage ? 'fill-zinc-400' : 'fill-primary-500'}`}
        onClick={() => setPageNo((prev) => Math.min(lastPageNo, prev + 1))}
      >
        <IconRightDirection width={15} height={15} />
      </li>
    </ul>
  );
};

export default Pagination;
