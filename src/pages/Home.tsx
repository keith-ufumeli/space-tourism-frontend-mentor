import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left lg:gap-20 min-h-[calc(100vh-12rem)]">
        {/* Text Content */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          <h2 className="font-barlow-condensed text-space-light text-base md:text-xl lg:text-2xl tracking-[2.7px] md:tracking-[3.38px] uppercase mb-4 md:mb-6">
            So, you want to travel to
          </h2>
          <h1 className="font-bellefair uppercase text-space-white text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] mb-6 md:mb-8">
            Space
          </h1>
          <p className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </p>
        </div>

        {/* Explore Button */}
        <div className="flex-1 flex items-center justify-center lg:justify-end mt-12 md:mt-16 lg:mt-0">
          <Link to="/destination" aria-label="Explore destinations" className="group inline-block">
            <Button
              className="relative w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] rounded-full bg-space-white text-space-dark hover:text-space-dark hover:bg-space-white font-bellefair text-xl md:text-2xl lg:text-3xl tracking-[1.25px] uppercase transition-all duration-500 focus-visible:ring-2 focus-visible:ring-space-white focus-visible:ring-offset-4 focus-visible:ring-offset-space-dark overflow-visible before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-space-white/10 before:scale-100 before:transition-all before:duration-700 before:pointer-events-none before:ease-out hover:before:scale-[1.8] hover:before:border-space-white/25"
            >
              <span className="relative z-10 text-space-dark">Explore</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

