import { siteConfig } from '@/data/config/site.settings';
import { headerNavLinks } from '@/app/ui/headerNavLinks';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import ActiveLink from '@/app/ui/ActiveLink';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 wide-container">
      <div>
        <Link href="/" aria-label={siteConfig.logoTitle}>
          <div className="flex items-center gap-3 justify-between">
            <Image
              src="/images/logo.svg"
              alt="29 Signals logo"
              height={27}
              width={27}
              className="group-hover:animate-wiggle dark:hidden"
            />

            <Image
              src="/images/logo-dark.svg"
              alt="29 Signals logo"
              height={27}
              width={27}
              className="group-hover:animate-wiggle hidden dark:inline-block"
            />

            <div className="hidden text-2xl font-semibold sm:flex h-full"></div>
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 gap-4 sm:gap-6">
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.title}
            href={link.href}
            className="nav-link hidden sm:block"
            activeClassName="nav-link-active"
          >
            <span>{link.title}</span>
          </ActiveLink>
        ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;