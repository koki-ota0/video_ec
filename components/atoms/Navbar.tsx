// components/Navbar.tsx
import Link from 'next/link';
import { AiOutlineHome, AiOutlineFire, AiOutlineCompass, AiOutlinePlayCircle, AiOutlineShoppingCart, AiOutlineUpload } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/" className="nav-link">
        <AiOutlineHome size={24} /> {/* ホームアイコン */}
        <span>Home</span>
      </Link>
      <Link href="/#trending" className="nav-link">
        <AiOutlineFire size={24} /> {/* トレンドアイコン */}
        <span>Trending</span>
      </Link>
      <Link href="/#explore" className="nav-link">
        <AiOutlineCompass size={24} /> {/* 探索アイコン */}
        <span>Explore</span>
      </Link>
      <Link href="/play" className="nav-link">
        <AiOutlinePlayCircle size={24} /> {/* 映画再生アイコン */}
        <span>Movies</span>
      </Link>
      <Link href="/cart" className="nav-link nav-active">
        <AiOutlineShoppingCart size={24} /> {/* カートアイコン */}
        <span>Cart</span>
      </Link>
      <Link href="/upload" className="nav-link">
        <AiOutlineUpload size={24} /> {/* アップロードアイコン */}
        <span>Upload</span>
      </Link>
    </div>
  );
}
