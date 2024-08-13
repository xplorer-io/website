"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import logo from "@public/images/logos/xplorer_logo.svg";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <section className="container mx-auto px-4">
      <header className="relative bg-white">
        <div className="mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-10">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <DesktopNav
              pathname={pathname}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
          <MobileNav
            pathname={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black opacity-25"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
