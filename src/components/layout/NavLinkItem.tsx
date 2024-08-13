import Link from "next/link";
import clsx from "clsx";

interface NavLinkItemProps {
  name: string;
  href: string;
  toggleMobileMenu: () => void;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  name,
  href,
  toggleMobileMenu,
}) => {
  let pathname;
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

export default NavLinkItem;
