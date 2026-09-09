import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact us for custom software development, web development, backend API, mobile app, AWS and FinTech development projects.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-page">
        <div className="container contact-container">
          <p className="eyebrow">START A PROJECT</p>

          <h1>Tell us what you're building.</h1>

          <p className="contact-description">
            Have an idea, an existing application that needs improvement, or
            a business problem that needs software?
          </p>

          <div className="contact-box">
            <p>Email us at</p>

            <a href="mailto:sanjay.rollback@gmail.com">
              sanjay.rollback@gmail.com
            </a>
          </div>

          <div className="contact-box">
            <p>Based in</p>

            <strong>Mumbai, Maharashtra, India</strong>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}