"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { menus } from "./helper";
import { Button } from "../ui/button";

export const Header = () => {
  const pathname = usePathname();

  return (
    <section className="container mx-auto px-4">
      <header className="flex items-center justify-between py-7">
        <Image src={logo} alt="logo" />
        <nav className="flex gap-4 sm:gap-10">
          {menus.map(({ name, href }) => (
            <Link
              href={href}
              className={clsx({
                "border-b-2 border-black": pathname === href,
              })}
            >
              {name}
            </Link>
          ))}
        </nav>
        <Button className="hidden sm:inline">Learn</Button>
      </header>
    </section>
  );
};
