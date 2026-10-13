"use client";

import { useState } from "react";
import { contact, site } from "@/data/content";
import SectionTitle from "./SectionTitle";

const fieldClass =
  "w-full border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-lime focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // No backend needed: opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Message from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionTitle tag={contact.tag} top={contact.titleTop} italic={contact.titleItalic} />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">{contact.text}</p>

          <ul className="mt-8 space-y-3 text-sm">
            <li className="border border-line bg-card p-4">
              <p className="text-xs text-lime">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block break-all hover:text-lime">
                {site.email}
              </a>
            </li>
            <li className="border border-line bg-card p-4">
              <p className="text-xs text-lime">Phone</p>
              <a href={site.phoneHref} className="mt-1 block hover:text-lime">
                {site.phone}
              </a>
            </li>
            <li className="border border-line bg-card p-4">
              <p className="text-xs text-lime">LinkedIn</p>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block break-all hover:text-lime">
                {site.linkedinLabel}
              </a>
            </li>
            <li className="border border-line bg-card p-4">
              <p className="text-xs text-lime">GitHub</p>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="mt-1 block break-all hover:text-lime">
                {site.githubLabel}
              </a>
            </li>
          </ul>

          <a href={site.cv} download className="btn-lime mt-6">
            Download CV
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-3 border border-line bg-card p-6 sm:p-8">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">Leave a message</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Full name</span>
              <input required className={fieldClass} placeholder="Full name" value={form.name} onChange={update("name")} />
            </label>
            <label className="block">
              <span className="sr-only">Email address</span>
              <input required type="email" className={fieldClass} placeholder="Email address" value={form.email} onChange={update("email")} />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">Subject</span>
            <input className={fieldClass} placeholder="Subject" value={form.subject} onChange={update("subject")} />
          </label>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea required rows={6} className={fieldClass} placeholder="Message" value={form.message} onChange={update("message")} />
          </label>
          <button type="submit" className="btn-lime">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
