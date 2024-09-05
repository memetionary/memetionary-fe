import Link from 'next/link';
import { IconLogo, IconSearch } from '@/assets/icons';
import RandomButton from '@/components/RandomButton';

const TITLE_TEXT = 'Memetionary';

const Header = () => {
  return (
    <header className="flex h-14 w-full select-none items-center justify-between border-b-2 px-3">
      <Link href={'/'}>
        <div className="flex items-center gap-2">
          <IconLogo width={30} height={30} />
          <h1 className="text-lg">{TITLE_TEXT}</h1>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <RandomButton type="icon" />
        <Link href={'/search'}>
          <IconSearch width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
