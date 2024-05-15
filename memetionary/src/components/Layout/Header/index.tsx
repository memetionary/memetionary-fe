import { Logo, Random, Search } from '@/assets/icons';
import Link from 'next/link';

const TITLE_TEXT = 'Memetionary';

const Header = () => {
  return (
    <header className="flex h-14 w-full select-none items-center justify-between border-b-2 px-3">
      <div className="flex items-center gap-2">
        <Logo />
        <h1 className="text-lg">{TITLE_TEXT}</h1>
      </div>
      <div className="flex items-center gap-3">
        <Link href={'/'}>
          <Random />
        </Link>
        <Link href={'/search'}>
          <Search />
        </Link>
      </div>
    </header>
  );
};

export default Header;
