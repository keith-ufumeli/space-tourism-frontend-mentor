import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useData } from '@/hooks/useData';
import { destinationImages } from '@/data/imageMap';
import { cn } from '@/lib/utils';

export function Destination() {
  const { destinations } = useData();
  const [selectedDestination, setSelectedDestination] = useState(destinations[0].name);

  const destination = destinations.find((d) => d.name === selectedDestination) || destinations[0];
  const destinationImage = destinationImages[destination.name as keyof typeof destinationImages];

  const handleTabChange = (value: string) => {
    setSelectedDestination(value);
  };

  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-24">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between lg:gap-20">
        {/* Page Title */}
        <div className="mb-8 md:mb-12 lg:mb-0 lg:flex-1">
          <h2 className="font-barlow-condensed text-space-white text-base md:text-xl lg:text-2xl tracking-[2.7px] md:tracking-[3.38px] uppercase text-center lg:text-left">
            <span className="font-bold text-space-white/25 mr-4">01</span>
            Pick your destination
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-20 lg:flex-[2]">
          {/* Destination Image */}
          <div className="mb-8 md:mb-12 lg:mb-0 lg:flex-1">
            <img
              src={destinationImage?.webp || destinationImage?.png}
              alt={destination.name}
              className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] animate-fade-in"
            />
          </div>

          {/* Destination Info */}
          <div className="flex flex-col items-center lg:items-start lg:flex-1 max-w-md">
            <Tabs value={selectedDestination} onValueChange={handleTabChange} className="w-full">
              <TabsList className="bg-transparent h-auto p-0 mb-6 md:mb-8 gap-4 md:gap-8">
                {destinations.map((dest) => (
                  <TabsTrigger
                    key={dest.name}
                    value={dest.name}
                    className={cn(
                      'bg-transparent border-0 border-b-2 border-transparent text-space-light font-barlow-condensed text-sm md:text-base tracking-[2.36px] uppercase px-0 py-2 data-[state=active]:border-space-white data-[state=active]:bg-transparent data-[state=active]:text-space-white hover:border-space-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-space-white focus-visible:ring-offset-2'
                    )}
                    aria-label={`View ${dest.name} destination`}
                  >
                    {dest.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {destinations.map((dest) => (
                <TabsContent
                  key={dest.name}
                  value={dest.name}
                  className="mt-0 text-center lg:text-left"
                >
                  <h3 className="font-bellefair text-space-white text-[56px] md:text-[80px] lg:text-[100px] mb-4 md:mb-6">
                    {dest.name}
                  </h3>
                  <p className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 mb-8 md:mb-12 border-b border-space-white/20 pb-8">
                    {dest.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div>
                      <p className="font-barlow-condensed text-space-light text-sm tracking-[2.36px] uppercase mb-3">
                        Avg. distance
                      </p>
                      <p className="font-bellefair text-space-white text-[28px] md:text-3xl uppercase">
                        {dest.distance}
                      </p>
                    </div>
                    <div>
                      <p className="font-barlow-condensed text-space-light text-sm tracking-[2.36px] uppercase mb-3">
                        Est. travel time
                      </p>
                      <p className="font-bellefair text-space-white text-[28px] md:text-3xl uppercase">
                        {dest.travel}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

