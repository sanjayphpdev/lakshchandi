import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built around your business goals.",
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Scalable Node.js APIs, microservices, integrations and business-critical backend systems.",
  },
  {
    number: "03",
    title: "Mobile Applications",
    description:
      "Reliable mobile applications connected to secure, scalable backend infrastructure.",
  },
  {
    number: "04",
    title: "Cloud & AWS",
    description:
      "Cloud architecture, deployments, monitoring, optimization and production support.",
  },
  {
    number: "05",
    title: "FinTech & Payments",
    description:
      "Technology solutions for payment workflows, transaction systems and financial applications.",
  },
  {
    number: "06",
    title: "Software Maintenance",
    description:
      "Long-term technical support, performance improvements, monitoring and feature development.",
  },
];

const technologies = [
  "AI Agents",
  "Frontend",
  "Backend",
  "Hybrid Apps",
  "Scalability",
  "Distributed System",
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}

      <Header />

      {/* HERO */}

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE ENGINEERING · MUMBAI · INDIA</p>

            <h1>
              We build software
              <span> that scales.</span>
            </h1>

            <p className="hero-description">
              Custom websites, web applications, APIs, backend systems and
              mobile applications for startups and businesses.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Discuss Your Project →
              </Link>

              <Link href="/services" className="button button-secondary">
                Explore Services
              </Link>
            </div>

            <div className="experience">
              <div>
                <strong>13+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>6+</strong>
                <span>Industry Domains</span>
              </div>

              <div>
                <strong>End-to-End</strong>
                <span>Product Engineering</span>
              </div>
            </div>
          </div>

          <div className="architecture-card">
            <div className="architecture-header">
              <span>architecture.ts</span>
              <span>● ● ●</span>
            </div>

            <pre>
              {`const product = {

  frontend: ["Next.js","React.js","Javascript"],

  backend: ["Node.js","Express","Java"],

  database: ["SQL","MongoDB"],

  cloud: "AWS",

  architecture: "scalable",

  focus: [
    "performance",
    "security",
    "reliability"
  ]
};`}
            </pre>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="section" id="services">
        <div className="container">
          <p className="eyebrow">OUR SERVICES</p>

          <h2>Everything you need to build.</h2>

          <p className="section-description">
            From the first architecture decision to production and ongoing
            support, we help businesses build dependable digital products.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}

      <section className="section dark-section">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">OUR APPROACH</p>

            <h2>
              Engineering first.
              <br />
              Business always.
            </h2>
          </div>

          <div className="steps">
            <div className="step">
              <strong>01</strong>
              <div>
                <h3>Understand</h3>
                <p>
                  We understand your business, users, technical requirements and
                  constraints.
                </p>
              </div>
            </div>

            <div className="step">
              <strong>02</strong>
              <div>
                <h3>Design</h3>
                <p>
                  We create a practical architecture and delivery plan before
                  unnecessary development begins.
                </p>
              </div>
            </div>

            <div className="step">
              <strong>03</strong>
              <div>
                <h3>Build</h3>
                <p>
                  We build maintainable software using modern technologies and
                  engineering practices.
                </p>
              </div>
            </div>

            <div className="step">
              <strong>04</strong>
              <div>
                <h3>Improve</h3>
                <p>
                  After launch, we optimize performance and continuously improve
                  the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}

      <section className="section" id="technology">
        <div className="container">
          <p className="eyebrow">TECHNOLOGY</p>

          <h2>
            Modern technology.
            <br />
            Practical architecture.
          </h2>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">WHY US</p>

            <h2>Senior engineering without unnecessary layers.</h2>
          </div>

          <div>
            <p>
              With 13+ years of software engineering experience, we bring strong
              backend engineering, scalable architecture and production-focused
              development to every project.
            </p>

            <p>
              Our experience spans FinTech, payments, healthcare, media,
              e-commerce, SaaS and enterprise applications.
            </p>

            <Link href="/about" className="text-link">
              More about us →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">HAVE A PROJECT?</p>

          <h2>Let's build something useful.</h2>

          <p>
            Tell us what you are building, what you need and where you want to
            go.
          </p>

          <Link href="/contact" className="button light-button">
            Start a Conversation →
          </Link>
        </div>
      </section>

      {/* FOOTER */}

      <Footer />
    </main>
  );
}
