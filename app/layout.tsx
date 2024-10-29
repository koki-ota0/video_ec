// frontend/app/layout.tsx
import './globals.css';
import Header from '@/components/organisms/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
