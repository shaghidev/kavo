'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AnimationContextType {
  introComplete: boolean;
  setIntroComplete: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);
  
  // For debugging
  useEffect(() => {
    console.log("AnimationContext: introComplete changed to:", introComplete);
  }, [introComplete]);

  // Force intro to complete after a timeout (safety mechanism)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!introComplete) {
        console.log("AnimationContext: Force completing intro after timeout");
        setIntroComplete(true);
      }
    }, 7000); // 7 seconds safety timeout
    
    return () => clearTimeout(timeout);
  }, [introComplete]);

  return (
    <AnimationContext.Provider value={{ introComplete, setIntroComplete }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}