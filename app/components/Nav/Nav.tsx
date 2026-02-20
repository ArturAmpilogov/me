"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Nav.module.scss";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(isActive ? styles.active : undefined)}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
    </li>
  );
};

export const Nav = (): JSX.Element => {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        <NavLink href="/">About&nbsp;me</NavLink>
        <NavLink href="/experience">Experience</NavLink>
        <NavLink href="/publications">Publications</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
      </ul>
    </nav>
  );
};
