import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Home() {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current.querySelector('button');
    const ring = buttonRef.current.querySelector('.explore-ring');

    if (!button || !ring) return;

    const handleMouseEnter = () => {
      gsap.to(ring, {
        scale: 1.8,
        opacity: 0.25,
        duration: 0.7,
        ease: 'power2.out',
      });
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 0.1,
        duration: 0.5,
        ease: 'power2.in',
      });
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.in',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="container mx-auto px-6 md:px-10 lg:px-20"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left lg:gap-20 min-h-[calc(100vh-12rem)]"
      >
        {/* Text Content */}
        <motion.div variants={itemVariants} className="flex-1 max-w-md lg:max-w-lg">
          <motion.h2
            variants={itemVariants}
            className="font-barlow-condensed text-space-light text-base md:text-xl lg:text-2xl tracking-[2.7px] md:tracking-[3.38px] uppercase mb-4 md:mb-6"
          >
            So, you want to travel to
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="font-bellefair uppercase text-space-white text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] mb-6 md:mb-8"
          >
            Space
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8"
          >
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </motion.p>
        </motion.div>

        {/* Explore Button */}
        <motion.div
          ref={buttonRef}
          variants={itemVariants}
          className="flex-1 flex items-center justify-center lg:justify-end mt-12 md:mt-16 lg:mt-0"
        >
          <Link to="/destination" aria-label="Explore destinations" className="group inline-block">
            <Button
              className="relative w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] rounded-full bg-space-white text-space-dark hover:text-space-dark hover:bg-space-white font-bellefair text-xl md:text-2xl lg:text-3xl tracking-[1.25px] uppercase transition-all duration-500 focus-visible:ring-2 focus-visible:ring-space-white focus-visible:ring-offset-4 focus-visible:ring-offset-space-dark overflow-visible"
            >
              <span className="explore-ring absolute inset-0 rounded-full border-[1px] border-space-white/10 scale-100 pointer-events-none"></span>
              <span className="relative z-10 text-space-dark">Explore</span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

