import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { classes } from "@spotify/app/utils/classes";

import "./styles.css";

interface HeaderLinkProps {
  classNames?: string;
  href: Url;
  target?: HTMLAttributeAnchorTarget;
  label: string;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  classNames,
  target = "_blank",
  href,
  label,
}) => {
  return (
    <Link
      target={target}
      href={href}
      className={classes(
        "hover:scale-[1.04] font-bold text-base text-[#b3b3b3] hover:text-white transition-colors duration-220 ease-in-out",
        classNames
      )}
    >
      {label}
    </Link>
  );
};
