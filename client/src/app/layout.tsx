import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer'; 
import { AnimationProvider } from '@/context/AnimationContext';

export const metadata = {
  title: 'Kavo',
  description: 'dizajn i tehnologija',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr">
      <body className="bg-[#080D10] text-white scroll-smooth w-full min-h-screen">
        <AnimationProvider>
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
