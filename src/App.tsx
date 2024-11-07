import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Header from './components/sections/header';
import MobileMenu from './components/sections/mobile-menu';
import Video from './components/sections/video';
import './styles/globals.scss';
import TheBeginning from './components/sections/the-beginning';
import VisitGreenland from './components/sections/visit-greenland';
import Mongolia from './components/sections/mongolia';
import Lenis from './components/ui/lenis';

function App() {
  useGSAP(() => {
    gsap.set('.wrapper', { visibility: 'visible' });

    gsap.from('.wrapper', { opacity: 0, duration: 2.4, ease: 'power4.out' });
  });

  return (
    <Lenis>
      <div className="grain">
        <div className="grain-texture" />
      </div>
      <MobileMenu />
      <main className="wrapper">
        <Header />
        <Video />
        <TheBeginning />
        <VisitGreenland />
        <Mongolia />
      </main>
    </Lenis>
  );
}

export default App;
