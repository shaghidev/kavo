// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    axios.get(`${apiUrl}/`) // backend root endpoint
      .then(res => setMessage(res.data.message || 'Server online'))
      .catch(err => setMessage('Backend offline'));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Moj Portfolio</h1>
      <p className="text-lg">{message}</p>
    </main>
  );
}
