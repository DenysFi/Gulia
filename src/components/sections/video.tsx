import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Video() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const headers = gsap.utils.toArray('.header-h1-wrapper > h1');

      gsap.set(headers, { transformStyle: 'preserve-3d' });
      gsap.set(ref.current, { transformOrigin: 'bottom center' });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: ref.current,
        },
      });

      tl.from(ref.current, { scale: 0, opacity: 0, duration: 2.5 });

      tl.from(
        headers,
        {
          filter: 'blur(8px)',
          translateY: '190%',
          rotateZ: 16,
          stagger: 0.1,
          duration: 1,
        },
        '<0.5',
      );
    },
    { scope: ref },
  );

  return (
    <div className="h-[95vh] w-full pb-16 pt-16 max-[640px]:min-h-[600px] sm:h-screen">
      <div className="__container h-full">
        <div
          ref={ref}
          className="relative inline-flex h-full min-h-[128px] w-full items-center justify-center overflow-hidden rounded-[36px] px-2 text-white sm:px-12"
        >
          <div className="relative z-10 text-center">
            <div className="header-card-title">
              <div className="header-card-wrapper">
                <div className="header-h1-wrapper">
                  <h1>Gulia&nbsp;</h1>
                </div>
                <div className="header-h1-wrapper">
                  <h1>GARTNER&nbsp;</h1>
                </div>
                <div className="header-h1-wrapper">
                  <h1>PHOTOGRAPHER&nbsp;</h1>
                </div>
                <div className="header-h1-wrapper">
                  <h1>&&nbsp;</h1>
                </div>
                <div className="header-h1-wrapper">
                  <h1>FILMMAKER&nbsp;</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 h-full w-full">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="h-full w-full object-cover"
            >
              <source src="https://cdn.prod.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4" />
              <source src="https://cdn.prod.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
