import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useData } from '@/hooks/useData';
import { crewImages } from '@/data/imageMap';
import { cn } from '@/lib/utils';

export function Crew() {
  const { crew } = useData();
  const [selectedCrew, setSelectedCrew] = useState(crew[0].name);

  const crewMember = crew.find((c) => c.name === selectedCrew) || crew[0];
  const crewImage = crewImages[crewMember.name as keyof typeof crewImages];

  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-24">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        {/* Page Title */}
        <div className="mb-8 md:mb-12 lg:mb-0">
          <h2 className="font-barlow-condensed text-space-white text-base md:text-xl lg:text-2xl tracking-[2.7px] md:tracking-[3.38px] uppercase text-center lg:text-left">
            <span className="font-bold text-space-white/25 mr-4">02</span>
            Meet your crew
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:gap-20">
          {/* Crew Image */}
          <div className="mb-8 md:mb-12 lg:mb-0 lg:flex-1 border-b border-space-white/20 lg:border-0 pb-8 lg:pb-0">
            <img
              src={crewImage?.webp || crewImage?.png}
              alt={`${crewMember.name}, ${crewMember.role}`}
              className="w-[177px] h-[222px] md:w-[456px] md:h-[572px] lg:w-[568px] lg:h-[712px] object-contain animate-fade-in"
            />
          </div>

          {/* Crew Info */}
          <div className="flex flex-col items-center lg:items-start lg:flex-1 text-center lg:text-left">
            <Tabs value={selectedCrew} onValueChange={setSelectedCrew} className="w-full">
              <TabsList className="bg-transparent h-auto p-0 mb-6 md:mb-8 gap-4">
                {crew.map((member) => (
                  <TabsTrigger
                    key={member.name}
                    value={member.name}
                    className={cn(
                      'w-3 h-3 rounded-full bg-space-white/20 data-[state=active]:bg-space-white hover:bg-space-white/50 transition-colors p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-space-white focus-visible:ring-offset-2'
                    )}
                    aria-label={`View ${member.name}, ${member.role}`}
                  />
                ))}
              </TabsList>

              {crew.map((member) => (
                <TabsContent key={member.name} value={member.name} className="mt-0">
                  <p className="font-bellefair text-space-white/50 text-base md:text-2xl lg:text-3xl uppercase mb-2 md:mb-4">
                    {member.role}
                  </p>
                  <h3 className="font-bellefair text-space-white text-[24px] md:text-[40px] lg:text-[56px] mb-4 md:mb-6">
                    {member.name}
                  </h3>
                  <p className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 max-w-md">
                    {member.bio}
                  </p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

