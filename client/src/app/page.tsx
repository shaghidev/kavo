'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '@/components/Hero/Hero';

export default function HomePage() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    axios
      .get(`${apiUrl}/`)
      .then((res) => setMessage(res.data.message || 'Server online'))
      .catch(() => setMessage('Backend offline'));
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Hero sekcija */}
      
      <Hero />
    


      {/* Sljedeća sekcija – npr. About */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-3xl font-bold">O meni</h2>
      </section>

      {/* Još sekcija */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-800">
        <h2 className="text-3xl font-bold">Projekti</h2>
      </section>
    </main>
  );
}
