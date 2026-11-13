"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/cx";

// Lien de navigation qui reçoit `activeClassName` sur la page courante.
export default function NavLink({ href, className, activeClassName, children, ...rest }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cx(className, isActive && activeClassName)}
      aria-current={isActive ? "page" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
