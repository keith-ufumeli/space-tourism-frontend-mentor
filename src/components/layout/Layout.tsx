import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './Navigation';
import homeMobile from '@/assets/home/background-home-mobile.jpg';
import homeTablet from '@/assets/home/background-home-tablet.jpg';
import homeDesktop from '@/assets/home/background-home-desktop.jpg';
import destinationMobile from '@/assets/destination/background-destination-mobile.jpg';
import destinationTablet from '@/assets/destination/background-destination-tablet.jpg';
import destinationDesktop from '@/assets/destination/background-destination-desktop.jpg';
import crewMobile from '@/assets/crew/background-crew-mobile.jpg';
import crewTablet from '@/assets/crew/background-crew-tablet.jpg';
import crewDesktop from '@/assets/crew/background-crew-desktop.jpg';
import technologyMobile from '@/assets/technology/background-technology-mobile.jpg';
import technologyTablet from '@/assets/technology/background-technology-tablet.jpg';
import technologyDesktop from '@/assets/technology/background-technology-desktop.jpg';

const backgroundImages = {
  home: {
    mobile: homeMobile,
    tablet: homeTablet,
    desktop: homeDesktop,
  },
  destination: {
    mobile: destinationMobile,
    tablet: destinationTablet,
    desktop: destinationDesktop,
  },
  crew: {
    mobile: crewMobile,
    tablet: crewTablet,
    desktop: crewDesktop,
  },
  technology: {
    mobile: technologyMobile,
    tablet: technologyTablet,
    desktop: technologyDesktop,
  },
};

function getBackgroundKey(pathname: string): keyof typeof backgroundImages {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/destination')) return 'destination';
  if (pathname.startsWith('/crew')) return 'crew';
  if (pathname.startsWith('/technology')) return 'technology';
  return 'home';
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const bgKey = getBackgroundKey(location.pathname);
  const backgrounds = backgroundImages[bgKey];

  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${bgKey}-mobile`}
            src={backgrounds.mobile}
            alt=""
            className="block md:hidden w-full h-full object-cover"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.img
            key={`${bgKey}-tablet`}
            src={backgrounds.tablet}
            alt=""
            className="hidden md:block lg:hidden w-full h-full object-cover"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.img
            key={`${bgKey}-desktop`}
            src={backgrounds.desktop}
            alt=""
            className="hidden lg:block w-full h-full object-cover"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-24 md:pt-32 lg:pt-40">{children}</main>
    </div>
  );
}

