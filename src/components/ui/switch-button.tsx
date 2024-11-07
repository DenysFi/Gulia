import { useRef, useState, type ButtonHTMLAttributes } from 'react';
import gsap from 'gsap';
import { cn } from '@/utils/cn';

type SwitchButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> & {
  upperText: string;
  bottomText: string;
};

function SwitchButton({
  className,
  upperText,
  bottomText,
  ...props
}: SwitchButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    setOpen(!open);

    gsap.to(ref.current!.querySelectorAll('span'), {
      duration: 0.4,
      y: open ? '0%' : '-100%',
      ease: 'power2.inOut',
    });
  };

  return (
    <button
      className={cn('switcher-button', className)}
      ref={ref}
      onClick={onClick}
      {...props}
    >
      <span>{upperText}</span>
      <span>{bottomText}</span>
    </button>
  );
}

export default SwitchButton;
