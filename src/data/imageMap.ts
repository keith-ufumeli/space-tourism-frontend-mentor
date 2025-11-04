// Destination images
import moonWebp from '@/assets/destination/image-moon.webp';
import moonPng from '@/assets/destination/image-moon.png';
import marsWebp from '@/assets/destination/image-mars.webp';
import marsPng from '@/assets/destination/image-mars.png';
import europaWebp from '@/assets/destination/image-europa.webp';
import europaPng from '@/assets/destination/image-europa.png';
import titanWebp from '@/assets/destination/image-titan.webp';
import titanPng from '@/assets/destination/image-titan.png';

// Crew images
import douglasWebp from '@/assets/crew/image-douglas-hurley.webp';
import douglasPng from '@/assets/crew/image-douglas-hurley.png';
import markWebp from '@/assets/crew/image-mark-shuttleworth.webp';
import markPng from '@/assets/crew/image-mark-shuttleworth.png';
import victorWebp from '@/assets/crew/image-victor-glover.webp';
import victorPng from '@/assets/crew/image-victor-glover.png';
import anoushehWebp from '@/assets/crew/image-anousheh-ansari.webp';
import anoushehPng from '@/assets/crew/image-anousheh-ansari.png';

// Technology images
import launchPortrait from '@/assets/technology/image-launch-vehicle-portrait.jpg';
import launchLandscape from '@/assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportPortrait from '@/assets/technology/image-spaceport-portrait.jpg';
import spaceportLandscape from '@/assets/technology/image-spaceport-landscape.jpg';
import capsulePortrait from '@/assets/technology/image-space-capsule-portrait.jpg';
import capsuleLandscape from '@/assets/technology/image-space-capsule-landscape.jpg';

export const destinationImages = {
  Moon: { webp: moonWebp, png: moonPng },
  Mars: { webp: marsWebp, png: marsPng },
  Europa: { webp: europaWebp, png: europaPng },
  Titan: { webp: titanWebp, png: titanPng },
};

export const crewImages = {
  'Douglas Hurley': { webp: douglasWebp, png: douglasPng },
  'Mark Shuttleworth': { webp: markWebp, png: markPng },
  'Victor Glover': { webp: victorWebp, png: victorPng },
  'Anousheh Ansari': { webp: anoushehWebp, png: anoushehPng },
};

export const technologyImages = {
  'Launch vehicle': {
    portrait: launchPortrait,
    landscape: launchLandscape,
  },
  Spaceport: {
    portrait: spaceportPortrait,
    landscape: spaceportLandscape,
  },
  'Space capsule': {
    portrait: capsulePortrait,
    landscape: capsuleLandscape,
  },
};

