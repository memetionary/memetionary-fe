import { IconLogo, IconRandom, IconSearch } from '@/assets/icons';
import Link from 'next/link';

const TITLE_TEXT = 'Memetionary';

const Header = () => {
  return (
    <header className="flex h-14 w-full select-none items-center justify-between border-b-2 px-3">
      <Link href={'/'}>
        <div className="flex items-center gap-2">
          <IconLogo />
          <h1 className="text-lg">{TITLE_TEXT}</h1>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <Link href={'/'}>
          <IconRandom />
        </Link>
        <Link href={'/search'}>
          <IconSearch />
        </Link>
      </div>
    </header>
  );
};

export default Header;
