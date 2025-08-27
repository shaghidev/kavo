// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'kavo',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
