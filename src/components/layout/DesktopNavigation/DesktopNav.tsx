"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { CldImage } from "next-cloudinary";
import { menus } from "../helper";
import AuthHeader from "@/components/auth/AuthHeader";
import { Button } from "@/components/ui/buttons/button";
import { useAppContext } from "@/context/AppContext";

interface DesktopNavProps {
  pathname: string;
  toggleMobileMenu: () => void;
}

const DesktopNav = ({ pathname, toggleMobileMenu }: DesktopNavProps) => {
  const { isActiveSlackUser = false } = useAppContext();

  return (
    <div className="md:flex md:items-center md:gap-12">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {menus.map(
            ({ name, href, isProtected }) =>
              (!isProtected || isActiveSlackUser) && (
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
              ),
          )}
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
            <CldImage
              src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578532/navMobileIcon_yofpzl.svg"
              height={20}
              width={20}
              alt={"Mobile Nav Icon"}
              format="svg"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
