// components/Logo.tsx
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo">
      q<span>U</span><span>i</span>ck
    </Link>
  );
}
