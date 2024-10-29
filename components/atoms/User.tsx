// components/User.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function User() {
  return (
    <Link href="#" className="user">
      <Image src="/images/user.jpg" alt="User" width={50} height={50} className="user-img" />
    </Link>
  );
}
