import React, {ReactNode} from "react";
import {ArrowRightIcon} from '@radix-ui/react-icons'

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
}

const ButtonLink = ({href, children}: ButtonLinkProps) => {
    return (
        <a
            className="inline-flex items-center gap-2 rounded border border-primary-600 bg-primary-600 px-8 py-3 text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500"
            href={href}
        >
            <span className="text-sm font-medium">{children}</span>
            <ArrowRightIcon/>
        </a>
    );
};

export default ButtonLink;
