import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { menus } from "../helper";
import AuthHeader from "@/components/auth/AuthHeader";
import { Button } from "@/components/ui/buttons/button";
import navMobileIcon from "@public/images/illustrations/navMobileIcon.svg";

interface DesktopNavProps {
  pathname: string;
  toggleMobileMenu: () => void;
}

const DesktopNav = ({ pathname, toggleMobileMenu }: DesktopNavProps) => {
  return (
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
  );
};

export default DesktopNav;
