import { useRef, useState } from 'react';
import gsap from 'gsap';
import SwitchButton from './switch-button';

function Burger() {
  const [open, setOpen] = useState(false);
  const tid = useRef<ReturnType<typeof setTimeout>>();

  const onClick = () => {
    if (tid.current) clearTimeout(tid.current);

    setOpen(!open);

    const burger = document.querySelector('.mobile-menu');

    if (!open) {
      burger?.classList.add('menu-open');
    } else {
      tid.current = setTimeout(() => {
        burger?.classList.remove('menu-open');
      }, 700);
    }

    gsap.to('.mobile-menu__overlay', {
      duration: 0.7,
      y: !open ? '0%' : '-130%',
      ease: 'power2.inOut',
    });
  };

  return (
    <div onClick={onClick}>
      <SwitchButton
        className="button menu-button"
        upperText="menu"
        bottomText="close"
      />
    </div>
  );
}

export default Burger;
