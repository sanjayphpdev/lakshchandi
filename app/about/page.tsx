import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our software engineering experience, technical expertise and approach to building scalable digital products.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            Lakshchandi<span>Technology</span>
          </Link>

          <nav className="navigation">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact" className="nav-button">
              Start a Project
            </Link>
          </nav>
        </div>
      </header>

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ABOUT US</p>

          <h1>
            Built by engineers.
            <br />
            Focused on outcomes.
          </h1>

          <p>
            We help businesses turn ideas and requirements into reliable
            software.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-content">
          <h2>13+ years of engineering experience.</h2>

          <p>
            Our engineering experience covers enterprise applications,
            FinTech, payments, healthcare, media, e-commerce and SaaS.
          </p>

          <p>
            We specialize in backend engineering, APIs, microservices,
            scalable architectures and cloud infrastructure, while also
            providing complete web and mobile development.
          </p>

          <p>
            The goal is simple: build software that works reliably today and
            can evolve with the business tomorrow.
          </p>
        </div>
      </section>

      <section className="dark-section section">
        <div className="container">
          <p className="eyebrow">EXPERIENCE</p>

          <div className="experience-large">
            <div>
              <strong>13+</strong>
              <span>Years in Software Engineering</span>
            </div>

            <div>
              <strong>6+</strong>
              <span>Industry Domains</span>
            </div>

            <div>
              <strong>End-to-End</strong>
              <span>Software Development</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>Let's discuss your project.</h2>

          <Link href="/contact" className="button light-button">
            Contact Us →
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}