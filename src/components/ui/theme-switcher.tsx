import { useLayoutEffect, useState } from 'react';
import SwitchButton from './switch-button';
import gsap from 'gsap';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('');
  const theme = localStorage.getItem('theme');

  useLayoutEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const switchMode = () => {
    gsap.set(document.body, {
      transition: 'color 0.5s, background-color 0.5s',
    });

    const nextTheme = currentTheme === 'light-mode' ? '' : 'light-mode';
    setCurrentTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <div onClick={switchMode}>
      <SwitchButton
        className="button leading-none"
        upperText="f/24"
        bottomText="f/14"
      />
    </div>
  );
}

export default ThemeSwitcher;
