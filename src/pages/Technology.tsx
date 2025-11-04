import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useData } from '@/hooks/useData';
import { technologyImages } from '@/data/imageMap';
import { cn } from '@/lib/utils';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Technology() {
  const { technology } = useData();
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0].name);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tech = technology.find((t) => t.name === selectedTechnology) || technology[0];
  const techImage = technologyImages[tech.name as keyof typeof technologyImages];
  const imageSrc = isMobile ? techImage?.landscape : techImage?.portrait;

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="container mx-auto px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-24"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        {/* Page Title */}
        <motion.div
          variants={contentVariants}
          className="mb-8 md:mb-12 lg:mb-0 lg:flex-1"
        >
          <h2 className="font-barlow-condensed text-space-white text-base md:text-xl lg:text-2xl tracking-[2.7px] md:tracking-[3.38px] uppercase text-center lg:text-left">
            <span className="font-bold text-space-white/25 mr-4">03</span>
            Space launch 101
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-20">
          {/* Technology Image */}
          <div className="mb-8 md:mb-12 lg:mb-0 lg:flex-1 w-full lg:order-3">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${tech.name}-${isMobile ? 'landscape' : 'portrait'}`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                src={imageSrc}
                alt={tech.name}
                className="w-full h-[170px] md:h-[310px] lg:h-[527px] object-cover lg:object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Technology Info */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-20 lg:flex-[2]">
            {/* Tab Navigation */}
            <Tabs value={selectedTechnology} onValueChange={setSelectedTechnology} className="w-full lg:w-auto">
              <TabsList className="bg-transparent h-auto p-0 mb-6 md:mb-8 lg:mb-0 lg:flex-col gap-4 lg:gap-8">
                {technology.map((item, index) => (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className={cn(
                      'w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full border border-space-white/25 text-space-white font-bellefair text-base md:text-xl lg:text-3xl data-[state=active]:bg-space-white data-[state=active]:text-space-dark hover:border-space-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-space-white focus-visible:ring-offset-2'
                    )}
                    aria-label={`View ${item.name}`}
                  >
                    {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              {technology.map((item) => (
                <TabsContent
                  key={item.name}
                  value={item.name}
                  className="mt-0 text-center lg:text-left lg:flex-1"
                >
                  <AnimatePresence mode="wait">
                    {item.name === selectedTechnology && (
                      <motion.div
                        key={item.name}
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <motion.p
                          variants={contentVariants}
                          className="font-barlow-condensed text-space-light text-sm md:text-base tracking-[2.36px] uppercase mb-2 md:mb-4"
                        >
                          The terminology...
                        </motion.p>
                        <motion.h3
                          variants={contentVariants}
                          className="font-bellefair text-space-white text-[24px] md:text-[40px] lg:text-[56px] mb-4 md:mb-6 uppercase"
                        >
                          {item.name}
                        </motion.h3>
                        <motion.p
                          variants={contentVariants}
                          className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 max-w-md"
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

