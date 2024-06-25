"use client";

import Image from "next/image";
import Link from "next/link";
import { AuthHeader } from "@/components/auth/AuthHeader";
import logo from "@public/images/logos/xplorer_logo.svg";
import { menus } from "./helper";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/buttons/button";
import navMobileIcon from "@public/images/illustrations/navMobileIcon.svg";

export const Header = () => {
  return (
    <section className="container mx-auto px-4">
      <header className="bg-white">
        <div className="mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
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
                      className="text-gray-500 transition hover:text-gray-500/75"
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
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};
