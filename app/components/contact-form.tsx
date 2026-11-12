"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
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
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@email.com"
        required
      />
      <label htmlFor="question">Your question</label>
      <textarea id="question" name="question" placeholder="Tell us how we can help..." required />
      <button className="button button-primary submit-button" type="submit">
        {sent ? "Message sent" : "Send message"}
      </button>
      {sent && (
        <p className="form-success" role="status">
          Thanks for reaching out — we’ll be in touch soon.
        </p>
      )}
    </form>
  );
}
