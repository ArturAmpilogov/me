"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Nav.module.scss";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(pathname === href ? styles.active : undefined)}
    >
      {children}
    </Link>
  );
};

export const Nav = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <NavLink href="/">About&nbsp;me</NavLink>
      <NavLink href="/experience">Experience</NavLink>
      <NavLink href="/publications">Publications</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
    </nav>
  );
};
