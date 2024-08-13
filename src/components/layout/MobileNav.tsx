import React from "react";
import clsx from "clsx";
import { menus } from "./helper";
import NavLinkItem from "./NavLinkItem";

export interface MobileNavProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileNav = ({ toggleMobileMenu, isMobileMenuOpen }: MobileNavProps) => {
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
      <nav aria-label="Mobile Global" className="mt-10 p-2 text-sm">
        <ul className="flex h-full w-full flex-col items-center justify-center gap-4 p-3">
          {menus.map((item) => (
            <NavLinkItem
              key={item.name}
              name={item.name}
              href={item.href}
              toggleMobileMenu={toggleMobileMenu}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
