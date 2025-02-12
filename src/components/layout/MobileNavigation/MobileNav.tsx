import React from "react";
import clsx from "clsx";
import { menus } from "../helper";
import MobileNavLinkItem from "./MobileNavLinkItem";

export interface MobileNavProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  pathname: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
  toggleMobileMenu,
  isMobileMenuOpen,
  pathname,
}) => {
  return (
    <div
      className={clsx(
        "fixed right-0 top-0 z-50 h-full w-72 transform flex-col items-center justify-center bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden",
        {
          "translate-x-full": !isMobileMenuOpen,
          "translate-x-0": isMobileMenuOpen,
        },
      )}
    >
      <nav aria-label="Mobile Global" className="p-2 text-sm">
        <ul className="flex h-screen w-full flex-col items-center justify-center gap-4 p-3">
          {menus.map(({ name, href, isProtected }) => (
            <MobileNavLinkItem
              href={href}
              name={name}
              isProtected={isProtected}
              key={name}
              toggleMobileMenu={toggleMobileMenu}
              pathname={pathname}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
