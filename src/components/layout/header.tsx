"use client";

import Image from "next/image";
import Link from "next/link";
import AuthHeader from "@/components/auth/AuthHeader";
import logo from "@public/images/logos/xplorer_logo.svg";
import { menus } from "./helper";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/buttons/button";
import navMobileIcon from "@public/images/illustrations/navMobileIcon.svg";

import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <section className="container mx-auto px-4">
      <header className="bg-white">
        <div className="mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-10">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {menus.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className={clsx({
                        "text-gray-500 transition hover:text-gray-500/75": true,
                        "border-b-2 border-gray-500/75": pathname === href,
                      })}
                    >
                      {name}
                    </Link>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <AuthHeader />
                </div>

                <div className="block md:hidden">
                  <Button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={toggleMobileMenu}
                  >
                    <Image src={navMobileIcon} alt={"Mobile Nav Icon"} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "fixed inset-x-0 z-50 mt-[1px] h-auto transform items-center justify-center bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden",
              {
                "translate-y-[-220%]": !isMobileMenuOpen,
                "translate-y-0": isMobileMenuOpen,
              },
            )}
          >
            <nav aria-label="Mobile Global" className="p-2 text-sm">
              <ul className="flex h-full flex-row items-start justify-center gap-10 p-3">
                {menus.map(({ name, href }, index) => (
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
                    {index < menus.length - 1 && (
                      <span className="mx-2 -mr-5 text-gray-500">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {isMobileMenuOpen && (
            <button
              className="fixed inset-0 z-40 bg-black opacity-0"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
