import Image from "next/image";
import heroLearner from "../assets/images/hero-learner.jpg";
import productDesign from "../assets/images/product-design.jpg";
import avatar4 from "../assets/images/avatar-4.jpg";
import { courseCategories, footerColumns, learningSteps, studentPhotos } from "./content";
import { ContactForm } from "./contact-form";
import { LinkButton, Logo } from "./links";
import { ArrowIcon, AvatarStack, Eyebrow, SectionHeading, TrustedBy } from "./ui";

export function HeroSection() {
  return (
    <section className="hero section-cream">
      <div className="container hero-layout">
        <div className="hero-copy">
          <Eyebrow>LEARN AT YOUR OWN PACE</Eyebrow>
          <h1>Build skills that actually move you forward.</h1>
          <p className="body-copy">
            Practical courses taught by people who do the work every day. Learn design,
            technology, business and more — one focused lesson at a time.
          </p>
          <div className="hero-buttons">
            <LinkButton href="#courses" label="Explore courses" />
            <LinkButton href="#people" label="See how it works" variant="outline" />
          </div>
          <TrustedBy />
        </div>
        <div className="hero-visual">
          <span className="hero-orb" aria-hidden="true" />
          <Image
            src={heroLearner}
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

export function CategoriesSection() {
  return (
    <section className="categories section-white" id="courses">
      <div className="container">
        <SectionHeading
          eyebrow="FIND YOUR NEXT SKILL"
          title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately."
        />
        <div className="category-grid">
          {courseCategories.map(({ number, title, description }) => (
            <a className="category-card" href="#featured-course" key={number}>
              <span className="category-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="text-link">Explore <ArrowIcon /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCourseSection() {
  return (
    <section className="featured" id="featured-course">
      <div className="container featured-layout">
        <div className="featured-image-wrap">
          <Image
            src={productDesign}
            alt="A product designer sketching ideas beside material samples"
            width={760}
            height={560}
            className="featured-image"
            sizes="(max-width: 700px) 88vw, 42vw"
          />
          <span className="featured-tag">FEATURED COURSE</span>
        </div>
        <div className="featured-copy">
          <Eyebrow light>MOST POPULAR THIS MONTH</Eyebrow>
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
            <LinkButton href="#contact" label="View course" variant="yellow" />
            <a href="#courses" className="featured-link">Browse all courses <ArrowIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="how section-cream" id="how-it-works">
      <div className="container">
        <SectionHeading eyebrow="HOW LUMA WORKS" title="Less browsing. More learning." centered />
        <div className="steps-grid">
          {learningSteps.map(({ number, title, description, color }) => (
            <article className="step-card" key={number}>
              <div className={`step-icon icon-${color}`} aria-hidden="true"><span /></div>
              <p className="step-number">{number}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
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
            <Image src={avatar4} alt="" width={48} height={48} className="quote-avatar" />
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

export function PeopleSection() {
  return (
    <section className="people section-cream" id="people">
      <div className="container people-layout">
        <div className="people-copy">
          <Eyebrow>THE PEOPLE</Eyebrow>
          <h2>Meet international students &amp; teachers</h2>
          <p className="body-copy">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac
            vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna
            hendrerit. Placeat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <LinkButton
            href="#contact"
            label="Explore teachers and students"
            variant="outline"
          />
        </div>
        <div className="people-collage" aria-label="Luma's international learning community">
          <span className="collage-disc" aria-hidden="true" />
          {studentPhotos.map(({ src, alt }, index) => (
            <Image
              key={src.src}
              src={src}
              alt={alt}
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

export function ContactSection() {
  return (
    <section className="contact section-white" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <Eyebrow>CONTACT</Eyebrow>
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

export function FinalCtaSection() {
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
          <LinkButton href="#courses" label="Explore all courses" />
          <LinkButton href="#contact" label="Join Luma" variant="outline" />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo light />
            <p>Practical learning for curious people.</p>
          </div>
          {footerColumns.map(({ title, links }) => (
            <div className="footer-column" key={title}>
              <h3>{title}</h3>
              {links.map(({ label, href }) => <a key={label} href={href}>{label}</a>)}
            </div>
          ))}
        </div>
        <div className="copyright">© 2024 Luma Learning</div>
      </div>
    </footer>
  );
}
