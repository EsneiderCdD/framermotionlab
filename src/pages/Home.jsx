import MouseParallax from '../components/Hero/MouseParallax';
import TorchEffect from '../components/TorchEffect/TorchEffect';
import FloatingParticles from '../components/FloatingParticles/FloatingParticles';
import TiltEffect from '../components/TiltEffect/TiltEffect';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import StickyCards from '../components/StickyCards/StickyCards';

function Home() {

  return (
    <div className="pages">
      <MouseParallax />
      <TorchEffect />
      <FloatingParticles />
      <TiltEffect />
      <HorizontalScroll />
      <StickyCards />
    </div>
  )
}

export default Home
