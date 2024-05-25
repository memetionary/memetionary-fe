import { Dispatch, SetStateAction } from 'react';

interface PaginationItemProps {
  pageNo: number;
  isCurrent: boolean;
  setPageNo: Dispatch<SetStateAction<number>>;
}

const PaginationItem = ({ pageNo, isCurrent, setPageNo }: PaginationItemProps) => {
  return (
    <li
      key={pageNo}
      onClick={() => setPageNo(pageNo)}
      className={`p-2 select-none cursor-pointer ${isCurrent ? 'font-semibold text-primary-500' : 'text-primary-400'}`}
    >
      {pageNo}
    </li>
  );
};

export default PaginationItem;
