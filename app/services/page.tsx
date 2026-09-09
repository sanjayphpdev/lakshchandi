import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Custom web development, backend API development, mobile applications, AWS cloud solutions, FinTech software and software maintenance services.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications designed for performance, usability and business growth.",
  },
  {
    title: "Backend Development",
    description:
      "Scalable Node.js backend systems, REST APIs, microservices, integrations and business logic.",
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile applications backed by secure APIs and reliable cloud infrastructure.",
  },
  {
    title: "AWS & Cloud Development",
    description:
      "Cloud architecture, deployment, monitoring, optimization and production support.",
  },
  {
    title: "FinTech Software Development",
    description:
      "Technology solutions for payment systems, transaction processing and financial applications.",
  },
  {
    title: "Custom Software Development",
    description:
      "End-to-end software engineering for businesses with specific technical and operational requirements.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            LakshChandi<span>Technology</span>
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
          <p className="eyebrow">SERVICES</p>

          <h1>
            Software engineering
            <br />
            for real businesses.
          </h1>

          <p>
            We design and build reliable digital products, platforms and
            backend systems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container services-page-grid">
          {services.map((service, index) => (
            <article key={service.title} className="large-service-card">
              <h2>{service.title}</h2>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>Have a software project?</h2>

          <Link href="/contact" className="button light-button">
            Talk to us →
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}