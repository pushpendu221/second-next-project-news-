import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
export default function ArchivePage() {
  const newsYears = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {newsYears.map((link) => (
            <li>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
