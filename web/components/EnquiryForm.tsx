"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const siteOptions = [
  "1 site",
  "2-3 sites",
  "4-10 sites",
  "11-25 sites",
  "25+ sites",
];

export default function EnquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    sites: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.company.trim()) errs.company = "Company is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.sites) errs.sites = "Please select number of sites";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((e) => ({ ...e, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setState("submitting");

    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Active sites: ${form.sites}`,
      `Message: ${form.message || "No message provided"}`,
    ].join("\n");

    const subject = encodeURIComponent(`LogBuild demo request — ${form.company}`);
    const bodyEncoded = encodeURIComponent(body);
    const mailto = `mailto:hello@log-build.co.uk?subject=${subject}&body=${bodyEncoded}`;

    window.location.href = mailto;

    setTimeout(() => setState("success"), 600);
  };

  if (state === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-brand-lime/15 border border-brand-lime/30 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-brand-text tracking-tight mb-3">
          Thanks! We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="text-brand-text-muted max-w-[36ch] mx-auto leading-relaxed">
          Your enquiry has been sent to{" "}
          <span className="text-brand-green font-medium">hello@log-build.co.uk</span>.
          We look forward to showing you LogBuild.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Full name"
          name="name"
          type="text"
          placeholder="James Hartley"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          label="Company"
          name="company"
          type="text"
          placeholder="Hartley Construction Ltd"
          value={form.company}
          onChange={handleChange}
          error={errors.company}
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Email address"
          name="email"
          type="email"
          placeholder="james@hartleyconstruction.co.uk"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="+44 7700 900000"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />
      </div>

      <div>
        <label className="block font-heading text-xs tracking-wider text-brand-text mb-2 uppercase">
          Number of active sites <span className="text-brand-lime">*</span>
        </label>
        <select
          name="sites"
          value={form.sites}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border text-sm bg-brand-white text-brand-text cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-lime/40 transition-shadow duration-200 ${
            errors.sites
              ? "border-red-400 focus:ring-red-200"
              : "border-brand-green/15 hover:border-brand-green/30"
          }`}
          required
        >
          <option value="">Select&hellip;</option>
          {siteOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.sites && (
          <p className="mt-1.5 text-xs text-red-500">{errors.sites}</p>
        )}
      </div>

      <div>
        <label className="block font-heading text-xs tracking-wider text-brand-text mb-2 uppercase">
          Anything you&apos;d like us to know?
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your projects, current reporting process, or any questions you have..."
          className="w-full px-4 py-3 rounded-lg border border-brand-green/15 text-sm bg-brand-white text-brand-text hover:border-brand-green/30 focus:outline-none focus:ring-2 focus:ring-brand-lime/40 transition-shadow duration-200 resize-none placeholder:text-brand-text/30"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full font-heading text-sm tracking-wider py-4 bg-brand-lime text-brand-green-dark font-bold rounded-lg hover:bg-brand-lime-hover transition-colors duration-200 cursor-pointer active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending..." : "Send enquiry"}
      </button>

      <p className="text-xs text-center text-brand-text-muted/60">
        We will respond within one business day. No sales pressure.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-heading text-xs tracking-wider text-brand-text mb-2 uppercase"
      >
        {label}{" "}
        {required && <span className="text-brand-lime">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 rounded-lg border text-sm bg-brand-white text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-lime/40 transition-shadow duration-200 ${
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-brand-green/15 hover:border-brand-green/30"
        }`}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
