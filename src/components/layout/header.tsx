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

const Header = () => {
  const pathname = usePathname();
  return (
    <section className="container mx-auto px-4 py-3">
      <header className="bg-white">
        <div className="mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex md:flex md:items-center md:gap-12">
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
                        "uppercase text-gray-600 transition hover:text-gray-500/75":
                          true,
                        "border-b-2 border-gray-500/75 uppercase":
                          pathname === href,
                      })}
                    >
                      {name}
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>{" "}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <AuthHeader />
              </div>

              <div className="block md:hidden">
                <Button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <Image src={navMobileIcon} alt={"Mobile Nav Icon"} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
