import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.scss";

export const Nav = (): JSX.Element => {
  const router = useRouter();
  const getClassName = (path: string) =>
    router.pathname === path ? styles.active : undefined;

  console.log(router.pathname);
  return (
    <nav className={styles.nav}>
      <Link href="/" className={getClassName("/")}>
        About me
      </Link>
      <Link href="/experience" className={getClassName("/experience")}>
        Experience
      </Link>
      <Link href="/publications" className={getClassName("/publications")}>
        Publications
      </Link>
    </nav>
  );
};
