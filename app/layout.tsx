// frontend/app/layout.tsx
import './globals.css'; // 必要に応じてCSSをインポート
import Image from 'next/image'; // Next.jsのImageコンポーネントを使用する場合
import Link from 'next/link'; // Linkを使ってクライアントサイドのナビゲーションを実現

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Nav */}
          <div className="nav container">
            {/* Logo */}
            <Link href="/" className="logo">
                q<span>U</span><span>i</span>ck
            </Link>
            {/* Search Box */}
            <div className="search-box">
              <input type="search" id="search-input" placeholder="Search movie" />
              <i className="bx bx-search"></i>
            </div>
            {/* User */}
            <Link href="#" className="user">
                <Image src="/images/user.jpg" alt="User" width={50} height={50} className="user-img" />
            </Link>
            {/* NavBar */}
            <div className="navbar">
              <Link href="/" className="nav-link">
                <i className="bx bx-home"></i>
                <span>Home</span>
              </Link>
              <Link href="#trending" className="nav-link">
                <i className="bx bxs-hot"></i>
                <span>Trending</span>
              </Link>
              <Link href="#explore" className="nav-link">
                <i className="bx bx-compass"></i>
                <span>Explore</span>
              </Link>
              <Link href="/play" className="nav-link">
                <i className="bx bx-tv"></i>
                <span>Movies</span>
              </Link>
              <Link href="/cart" className="nav-link nav-active">
                <i className="bx bx-cart"></i>
                <span>Cart</span>
              </Link>
              <Link href="/upload" className="nav-link">
                <i className="bx bx-up-arrow-circle"></i>
                <span>Upload</span>
              </Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
