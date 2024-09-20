"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList({ href, title }) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {title}
    </Link>
  );
}
