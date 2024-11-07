import React, { useRef } from 'react';
import iceMountains from '../../assets/ice-mount.jpeg';
import mountains from '../../assets/mountains.jpeg';
import gulia from '../../assets/gulia.jpeg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animateDots from '@/animations/dots-animation';

gsap.registerPlugin(ScrollTrigger);

function TheBeginning() {
  const ref = useRef<HTMLElement>(null);

  const animation = () => {
    gsap.set('.beginning__title-wrapper', {
      pointerEvents: 'none',
      willChange: 'transform ',
    });

    const animateMain = (selector: string, vars?: GSAPTweenVars) => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.out',
          duration: 1,
        },
      });

      return tl.from(selector, {
        ...vars,
        rotateZ: 16,
        translateY: '190%',
        filter: 'blur(8px)',
        stagger: 0.1,
      });
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom bottom',
      },
    });

    tl.add(animateMain('.beginning__title-wrapper > h3, .beginning__dots'))
      .add(
        animateMain('.beginning__img > img', {
          onComplete: () => {
            gsap.set('.beginning__title-wrapper', { pointerEvents: '' });
          },
        }),
        '<0.5',
      )
      .from(
        '.beginning__text',
        { opacity: 0, scale: 0, ease: 'back', duration: 1.5 },
        '<0.5',
      )
      .from(
        '.button',
        { opacity: 0, scale: 0, ease: 'back', duration: 1.5 },
        '<0.5',
      )
      .add(animateDots());
  };

  useGSAP(animation, { scope: ref });

  return (
    <section ref={ref} className="beginning">
      <div className="beginning__container">
        <div className="beginning__title-wrapper">
          <h3>A&nbsp;</h3>
          <Image width={64} height={80} src={mountains} alt="mountains" />

          <h3>tiny &nbsp;</h3>
          <h3>mountain &nbsp;</h3>
          <h3>village &nbsp;</h3>
          <Image width={64} height={80} src={iceMountains} alt="iceMountains" />
          <h3>where&nbsp; </h3>
          <h3>it&nbsp;</h3>
          <h3>all&nbsp; </h3>
          <h3>began</h3>

          <div className="beginning__dots">
            <h3>.</h3>
            <h3>.</h3>
            <h3>.&nbsp;</h3>
          </div>
          <Image width={120} height={80} src={gulia} alt="gulia" />
        </div>
        <div className="beginning__text-wrapper mb-12 w-full max-w-[700px]">
          <p className="beginning__text">
            Giulia Gartner (
            <a href="#" className="insta-link">
              @giuligartner
            </a>
            ) is an outdoor, travel, and commercial photographer, filmmaker, and
            storyteller from the Dolomites in northern Italy. Her work focuses
            on capturing wild and rugged landscapes with a vivid color palette
            and dreamy elements. Her love for photography has spilled over into
            filmmaking which is one of the main creative outlets she pursues
            today.
          </p>
        </div>
        <button className="button">read my story</button>
      </div>
    </section>
  );
}

export default TheBeginning;

function Image({
  src,
  alt,
}: {
  src: string;
  height: number;
  width: number;
  alt: string;
}) {
  const onMouseEnter = () => {};

  return (
    <div onMouseEnter={onMouseEnter} className="beginning__img">
      <img src={src} alt={alt} />
    </div>
  );
}
