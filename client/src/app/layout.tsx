import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SplashWrapper from '@/components/SplashWrapper';

export const metadata = {
  title: 'Moj Portfolio',
  description: 'he',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr">
      <body className="bg-black text-white">
        <SplashWrapper>
          <Navbar />
          <main className="pt-16 scroll-smooth">{children}</main>
        </SplashWrapper>
      </body>
    </html>
  );
}
