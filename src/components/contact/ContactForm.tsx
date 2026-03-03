"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Custom Web Application",
  "Responsive Website",
  "Web Hosting",
  "Maintenance & Upkeep",
  "IT Callout",
  "Computer Repair",
  "Business Email Setup",
  "Consultation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) return;

    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    if (!firstName || !lastName || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    // Build mailto link
    const subject = encodeURIComponent(
      `New Inquiry from ${firstName} ${lastName}${company ? ` - ${company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService Interest: ${service || "N/A"}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:contact@mdbdevelopment.com?subject=${subject}&body=${body}`;

    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-mdb-dark-2 border border-gray-800/50 text-center">
        <div className="h-16 w-16 rounded-full bg-mdb-orange/10 flex items-center justify-center mx-auto mb-4">
          <svg
            className="h-8 w-8 text-mdb-orange"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">
          Your email client should open shortly
        </h3>
        <p className="mt-2 text-gray-400">
          If it doesn&apos;t, you can email us directly at{" "}
          <a
            href="mailto:contact@mdbdevelopment.com"
            className="text-mdb-orange hover:underline"
          >
            contact@mdbdevelopment.com
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2 border border-gray-700 text-gray-300 rounded-lg hover:border-mdb-orange hover:text-white transition-all text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-mdb-dark-2 border border-gray-800/50">
      <h3 className="text-xl font-semibold text-white mb-2">
        Send us a message
      </h3>
      <p className="text-gray-400 text-sm mb-8">
        Fill out the form and we&apos;ll get back to you within 24 hours.
      </p>

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5">
              First Name <span className="text-mdb-orange">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-mdb-dark-3 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-mdb-orange focus:ring-1 focus:ring-mdb-orange transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1.5">
              Last Name <span className="text-mdb-orange">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-mdb-dark-3 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-mdb-orange focus:ring-1 focus:ring-mdb-orange transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
            Email <span className="text-mdb-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-mdb-dark-3 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-mdb-orange focus:ring-1 focus:ring-mdb-orange transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-2.5 rounded-lg bg-mdb-dark-3 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-mdb-orange focus:ring-1 focus:ring-mdb-orange transition-colors"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1.5">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-2.5 rounded-lg bg-mdb-dark-3 border border-gray-700 text-white focus:outline-none focus:border-mdb-orange focus:ring-1 focus:ring-mdb-orange transition-colors"
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
            Message <span className="text-mdb-orange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2.5 rounded-lg bg-mdb-dark-3 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-mdb-orange focus:ring-1 focus:ring-mdb-orange transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3 bg-mdb-orange text-white font-semibold rounded-lg hover:bg-mdb-orange-hover transition-all hover:shadow-lg hover:shadow-mdb-orange/20"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
