import React from "react";

import Link from "next/link";
import clsx from "clsx";

import { menus } from "./helper";

export interface MobileNavProps {
  pathname: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileNav = ({
  pathname,
  toggleMobileMenu,
  isMobileMenuOpen,
}: MobileNavProps) => {
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
          {menus.map(({ name, href }) => (
            <li key={name} className="flex items-center p-1">
              <Link
                href={href}
                className={clsx({
                  "text-gray-500 transition hover:text-gray-500/75": true,
                  "border-b-2 border-gray-500/75": pathname === href,
                })}
                onClick={toggleMobileMenu}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
