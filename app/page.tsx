"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type CourseCategory = {
  number: string;
  title: string;
  description: string;
};

type LearningStep = {
  number: string;
  title: string;
  description: string;
  color: "blue" | "coral" | "yellow";
};

const categories: CourseCategory[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

const steps: LearningStep[] = [
  {
    number: "STEP 01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
    color: "blue",
  },
  {
    number: "STEP 02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    color: "coral",
  },
  {
    number: "STEP 03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    color: "yellow",
  },
];

const studentPhotos = [
  { src: "/images/student-1.jpg", alt: "Student sketching in a notebook" },
  { src: "/images/student-2.jpg", alt: "Teacher leading a workshop" },
  { src: "/images/student-3.jpg", alt: "Student learning at a desk" },
  { src: "/images/student-4.jpg", alt: "Creative professional working" },
  { src: "/images/student-5.jpg", alt: "Design team collaborating" },
  { src: "/images/student-6.jpg", alt: "Student studying on a laptop" },
  { src: "/images/student-7.jpg", alt: "Instructor sharing an idea" },
  { src: "/images/student-8.jpg", alt: "Student taking notes" },
  { src: "/images/student-9.jpg", alt: "Learners working together" },
  { src: "/images/student-10.jpg", alt: "Teacher working with a student" },
  { src: "/images/student-11.jpg", alt: "Student reading in a bright room" },
  { src: "/images/student-12.jpg", alt: "Creative team planning a project" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow-icon">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo${light ? " logo-light" : ""}`} href="#top" aria-label="Luma home">
      luma<span>.</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "#courses", label: "Courses" },
    { href: "#people", label: "For Teams" },
    { href: "#how-it-works", label: "Community" },
    { href: "#contact", label: "About" },
  ];

  return (
    <header className="site-header" id="top">
      <div className="nav-shell">
        <Logo />
        <nav id="mobile-menu" className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-login" href="#contact" onClick={() => setMenuOpen(false)}>
            Log in
          </a>
          <a className="mobile-join button button-primary" href="#courses" onClick={() => setMenuOpen(false)}>
            Start learning
          </a>
        </nav>
        <div className="nav-actions">
          <a href="#contact" className="login-link">Log in</a>
          <a href="#courses" className="button button-primary nav-cta">Start learning</a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function AvatarStack({ count = 3 }: { count?: number }) {
  return (
    <div className="avatar-stack" aria-label="Luma learners">
      {Array.from({ length: count }, (_, index) => (
        <Image
          key={index}
          src={`/images/avatar-${index + 1}.jpg`}
          alt=""
          width={30}
          height={30}
          className="avatar"
        />
      ))}
    </div>
  );
}

function TrustedBy() {
  return (
    <div className="trusted">
      <AvatarStack />
      <span><strong>Trusted by 24,000+</strong> learners</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-cream">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">LEARN AT YOUR OWN PACE</p>
          <h1>Build skills that actually move you forward.</h1>
          <p className="body-copy">
            Practical courses taught by people who do the work every day. Learn design,
            technology, business and more — one focused lesson at a time.
          </p>
          <div className="hero-buttons">
            <a href="#courses" className="button button-primary">Explore courses</a>
            <a href="#people" className="button button-outline">See how it works</a>
          </div>
          <TrustedBy />
        </div>
        <div className="hero-visual">
          <span className="hero-orb" aria-hidden="true" />
          <Image
            src="/images/hero-learner.jpg"
            alt="A learner taking an online course at a laptop"
            width={760}
            height={620}
            priority
            className="hero-photo"
            sizes="(max-width: 700px) 88vw, 42vw"
          />
          <div className="course-badge"><span>120+</span> expert-led courses</div>
          <div className="rating-badge" aria-label="Rated 4.9 out of 5">
            <span aria-hidden="true">★★★★★</span> 4.9 avg rating
          </div>
        </div>
      </div>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="categories section-white" id="courses">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">FIND YOUR NEXT SKILL</p>
          <h2>Learn something worth knowing.</h2>
          <p className="body-copy">Short, practical courses designed around skills you can put to work immediately.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a className="category-card" href="#featured-course" key={category.number}>
              <span className="category-number">{category.number}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="text-link">Explore <ArrowIcon /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCourse() {
  return (
    <section className="featured" id="featured-course">
      <div className="container featured-layout">
        <div className="featured-image-wrap">
          <Image
            src="/images/product-design.jpg"
            alt="A product designer sketching ideas beside material samples"
            width={760}
            height={560}
            className="featured-image"
            sizes="(max-width: 700px) 88vw, 42vw"
          />
          <span className="featured-tag">FEATURED COURSE</span>
        </div>
        <div className="featured-copy">
          <p className="eyebrow eyebrow-light">MOST POPULAR THIS MONTH</p>
          <h2>Designing products people understand.</h2>
          <p className="featured-description">
            Learn how to turn complex workflows into simple, intentional product experiences
            through research, structure and thoughtful interaction design.
          </p>
          <p className="instructor">with Maya Chen · Senior Product Designer</p>
          <div className="course-details">
            <span>8 lessons</span><span>2h 40min</span><span>Intermediate</span>
          </div>
          <div className="featured-actions">
            <a href="#contact" className="button button-yellow">View course</a>
            <a href="#courses" className="featured-link">Browse all courses <ArrowIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how section-cream" id="how-it-works">
      <div className="container">
        <div className="center-intro">
          <p className="eyebrow">HOW LUMA WORKS</p>
          <h2>Less browsing. More learning.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className={`step-icon icon-${step.color}`} aria-hidden="true"><span /></div>
              <p className="step-number">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial section-white" aria-label="Learner testimonial and results">
      <div className="container testimonial-layout">
        <figure className="quote">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>
            The lessons are short enough to fit into my week, but detailed enough that I
            actually leave with something I can use.
          </blockquote>
          <figcaption>
            <Image src="/images/avatar-4.jpg" alt="" width={48} height={48} className="quote-avatar" />
            <span><strong>Alex Morgan</strong><small>Product Manager</small></span>
          </figcaption>
        </figure>
        <div className="stats-grid" aria-label="Luma learning statistics">
          <div><strong>24K+</strong><span>active learners</span></div>
          <div><strong>120+</strong><span>expert-led courses</span></div>
          <div><strong>92%</strong><span>complete their first course</span></div>
        </div>
      </div>
    </section>
  );
}

function PeopleSection() {
  return (
    <section className="people section-cream" id="people">
      <div className="container people-layout">
        <div className="people-copy">
          <p className="eyebrow">THE PEOPLE</p>
          <h2>Meet international students &amp; teachers</h2>
          <p className="body-copy">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac
            vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna
            hendrerit. Placeat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <a href="#contact" className="button button-outline">Explore teachers and students</a>
        </div>
        <div className="people-collage" aria-label="Luma's international learning community">
          <span className="collage-disc" aria-hidden="true" />
          {studentPhotos.map((photo, index) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={180}
              height={180}
              className={`collage-photo collage-photo-${index + 1}`}
              sizes="(max-width: 700px) 24vw, 11vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contact us</h3>
      <p className="form-caption">Fill out the fields and we will get in touch.</p>
      <label htmlFor="full-name">Full name</label>
      <input id="full-name" name="name" autoComplete="name" placeholder="Your name" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required />
      <label htmlFor="question">Your question</label>
      <textarea id="question" name="question" placeholder="Tell us how we can help..." required />
      <button className="button button-primary submit-button" type="submit">
        {sent ? "Message sent" : "Send message"}
      </button>
      {sent && <p className="form-success" role="status">Thanks for reaching out — we’ll be in touch soon.</p>}
    </form>
  );
}

function ContactSection() {
  return (
    <section className="contact section-white" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h2>Get in touch</h2>
          <p className="body-copy">
            Have a question? We’re here to help. Whether you’re looking for the right course,
            learning with your team or interested in teaching with Luma, we’d love to hear from you.
          </p>
          <div className="contact-options">
            <a className="contact-option" href="mailto:contact@luma.com">
              <span className="contact-icon" aria-hidden="true">✉</span>
              <span><strong>Email</strong><small>contact@luma.com</small></span>
            </a>
            <div className="contact-option">
              <span className="contact-icon" aria-hidden="true">◷</span>
              <span><strong>Response Time</strong><small>Up to 24 hours on business days</small></span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <span className="decoration decoration-circle" aria-hidden="true" />
      <span className="decoration decoration-square" aria-hidden="true" />
      <span className="decoration decoration-spark" aria-hidden="true">✳</span>
      <div className="container final-cta-inner">
        <AvatarStack />
        <h2>What will you learn next?</h2>
        <p>Start with one course. Build from there.</p>
        <div className="final-actions">
          <a href="#courses" className="button button-primary">Explore all courses</a>
          <a href="#contact" className="button button-outline">Join Luma</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    { title: "EXPLORE", links: ["Courses", "Categories", "Instructors", "For Teams"] },
    { title: "COMPANY", links: ["About", "Careers", "Journal"] },
    { title: "SUPPORT", links: ["Help Center", "Contact", "Terms", "Privacy"] },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo light />
            <p>Practical learning for curious people.</p>
          </div>
          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a key={link} href={link === "Courses" || link === "Categories" ? "#courses" : "#contact"}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="copyright">© 2024 Luma Learning</div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <CategorySection />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <PeopleSection />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
