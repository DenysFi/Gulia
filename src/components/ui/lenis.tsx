import ReactLenis, { useLenis } from '@studio-freight/react-lenis';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import '@/styles/lenis.scss';

function Lenis({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);

  useLenis();

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      {children}
    </ReactLenis>
  );
}

export default Lenis;
