'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        // Smooth scroll
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // mali delay da se sve komponente renderiraju
      }
    }
  }, [pathname]);

  return null;
}
