import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer'; 

export const metadata = {
  title: 'Kavo',
  description: 'dizajn i tehnologija',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr">
      <body className="bg-[#080D10] text-white scroll-smooth">
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
