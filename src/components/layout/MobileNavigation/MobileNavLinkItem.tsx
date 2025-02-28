import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Lock } from "lucide-react";

export interface MobileNavLinkItemProps {
  name: string;
  href: string;
  isProtected?: boolean;
  toggleMobileMenu: () => void;
  pathname: string;
}

const MobileNavLinkItem: React.FC<MobileNavLinkItemProps> = ({
  name,
  href,
  isProtected,
  toggleMobileMenu,
  pathname,
}) => {
  const { data: session } = useSession();
  return (
    <li key={name} className="flex items-center p-1">
      <Link
        href={href}
        className={clsx({
          "flex items-center gap-2 text-gray-500 transition hover:text-gray-500/75":
            true,
          "border-b-2 border-gray-500/75": pathname === href,
          "opacity-75": isProtected && !session,
        })}
        onClick={toggleMobileMenu}
      >
        {name}
        {isProtected && <Lock className="h-3 w-3 text-gray-400" />}
      </Link>
    </li>
  );
};

export default MobileNavLinkItem;
