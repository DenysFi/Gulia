import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function usePhotoAnimation() {
  const mainRef = useRef<HTMLElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const leftPhotoRef = useRef<HTMLDivElement>(null);
  const rightPhotoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: 'top bottom',
          end: '80% 80%',
          scrub: 1,

          trigger: itemRef.current,
        },
      });

      const mm = gsap.matchMedia();

      tl.fromTo(
        itemRef.current,
        {
          y: '10%',
        },
        { y: '0%' },
      );

      mm.add('(min-width: 767.98px)', () => {
        // desktop setup code here...
        tl.fromTo(
          leftPhotoRef.current,
          { x: '100%', rotateZ: 0 },
          { x: '-14%', rotateZ: -3 },
          '<',
        );
        tl.fromTo(
          rightPhotoRef.current,
          { x: '-100%', rotateZ: 0 },
          { x: '14%', rotateZ: 3 },
          '<',
        );
      });

      mm.add('(min-width: 479.98px) and (max-width: 767.98px) ', () => {
        tl.fromTo(
          leftPhotoRef.current,
          { x: '84%', rotateZ: 0 },
          { x: '0%' },
          '<',
        );
        tl.fromTo(
          rightPhotoRef.current,
          { x: '-120%', rotateZ: 0 },
          { x: '0%' },
          '<',
        );
      });

      mm.add('(max-width: 479px)', () => {
        tl.fromTo(
          leftPhotoRef.current,
          { x: '100%', rotateZ: 0 },
          { x: '-0%' },
          '<',
        );
        tl.fromTo(
          rightPhotoRef.current,
          { x: '-100%', rotateZ: 0 },
          { x: '0%' },
          '<',
        );
      });
    },
    { scope: mainRef },
  );

  return { mainRef, itemRef, leftPhotoRef, rightPhotoRef };
}
