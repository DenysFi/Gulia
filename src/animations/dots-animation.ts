import gsap from 'gsap';

function createDotAnimation(selector: string) {
  return gsap.fromTo(
    selector,
    { y: 0 },
    {
      y: -3,
      duration: 0.3,
      repeat: 1,
      yoyo: true,
      stagger: { each: 0.1 },
    },
  );
}

export default function animateDots() {
  const main = gsap.timeline({ repeat: -1, repeatDelay: 3, delay: 1 });

  const dotsTimeline = gsap.timeline();

  dotsTimeline
    .add(createDotAnimation('.beginning__dots > h3:nth-child(1)'))
    .add(createDotAnimation('.beginning__dots > h3:nth-child(2)'), '<0.3')
    .add(createDotAnimation('.beginning__dots > h3:nth-child(3)'), '<0.3');

  main.add(dotsTimeline);

  return main;
}
