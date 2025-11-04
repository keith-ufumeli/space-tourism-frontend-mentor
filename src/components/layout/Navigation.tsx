import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import logo from '@/assets/shared/logo.svg';

const navigationItems = [
  { path: '/', label: 'Home', number: '00' },
  { path: '/destination', label: 'Destination', number: '01' },
  { path: '/crew', label: 'Crew', number: '02' },
  { path: '/technology', label: 'Technology', number: '03' },
];

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigationItems.map((item, index) => {
        const active = isActive(item.path);
        const linkClasses = mobile
          ? cn(
              'block py-2 text-space-white font-barlow-condensed text-base tracking-[2.7px] border-b border-space-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-space-white focus:ring-offset-2 focus:ring-offset-space-dark',
              active && 'border-space-white'
            )
          : cn(
              'relative py-8 text-space-white font-barlow-condensed text-sm tracking-[2.36px] uppercase transition-colors hover:text-space-white/80 focus:outline-none focus:ring-2 focus:ring-space-white focus:ring-offset-2 focus:ring-offset-space-dark'
            );

        return (
          <motion.div
            key={item.path}
            initial={mobile ? { opacity: 0, x: 20 } : false}
            animate={mobile ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: mobile ? index * 0.1 : 0 }}
          >
            <Link
              to={item.path}
              className={linkClasses}
              onClick={() => mobile && setIsOpen(false)}
              aria-current={active ? 'page' : undefined}
              tabIndex={0}
            >
              <span className={mobile ? 'font-bold mr-2' : 'font-bold mr-3 hidden md:inline'}>
                {item.number}
              </span>
              {item.label}
              {!mobile && active && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-space-white"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:pl-12 lg:pr-0">
      {/* Decorative Line - Desktop only, positioned at nav level to show through navbar */}
      <div 
        className="hidden lg:block absolute left-[12rem] top-1/2 -translate-y-1/2 h-[1px] right-0 bg-space-white/25 pointer-events-none z-[10]" 
        aria-hidden="true"
      />
      
      <div className="flex items-center lg:flex-1 lg:relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className="mt-6 md:mt-0 lg:mt-0 relative z-30" aria-label="Home">
            <img src={logo} alt="Space Tourism Logo" className="h-10 w-10 md:h-12 md:w-12" />
          </Link>
        </motion.div>
      </div>

      {/* Desktop Navigation - reduced background opacity to allow line visibility */}
      <div className="hidden lg:flex lg:items-center lg:gap-12 lg:pl-20 lg:pr-20 lg:backdrop-blur-xl lg:bg-space-white/[0.03] lg:h-24 lg:relative lg:z-20">
        <NavLinks />
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <button
            className="mt-6 p-2 text-space-white hover:text-space-white/80 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-64 bg-space-white/5 backdrop-blur-xl border-space-white/10 p-8"
        >
          <div className="flex flex-col gap-8 mt-16">
            <NavLinks mobile />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

