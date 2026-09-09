import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Lakshchandi<span>Technology</span>
        </Link>

        <nav className="navigation">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="#technology">Technology</Link>

          <Link href="/contact" className="nav-button">
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}