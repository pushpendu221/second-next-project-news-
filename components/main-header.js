import Link from "next/link";
import NavList from "./nav-list";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <NavList href="/" title="NextNews" />
      </div>
      <nav>
        <ul>
          <li>
            <NavList href="/news" title="News" />
          </li>
          <li>
            <NavList href="/archive" title="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
