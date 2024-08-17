import React from "react";
import clsx from "clsx";
import Link from "next/link";

export interface MobileNavLinkItemProps {
  name: string;
  href: string;
  toggleMobileMenu: () => void;
  pathname: string;
}

const MobileNavLinkItem: React.FC<MobileNavLinkItemProps> = ({
  name,
  href,
  toggleMobileMenu,
  pathname,
}) => {
  return (
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
  );
};

export default MobileNavLinkItem;
