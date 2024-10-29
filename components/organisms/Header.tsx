// components/Header.tsx
import Logo from '@/components/atoms/Logo';
import SearchBox from '@/components/atoms/SearchBox';
import User from '@/components/atoms/User';
import Navbar from '@/components/atoms/Navbar';

export default function Header() {
  return (
    <header>
      <div className="nav container">
        <Logo />
        <SearchBox />
        <User />
        <Navbar />
      </div>
    </header>
  );
}
