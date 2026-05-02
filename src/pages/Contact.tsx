import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      const data = new FormData();
      data.append('access_key', 'fda117b3-14dc-4a78-9958-d053bc39aea6');
      data.append('subject', `New contact enquiry from ${form.name}`);
      data.append('from_name', 'SM Infotech Website');
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('message', form.message);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || 'Submission failed');

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="max-w-2xl">
        <span className="badge mb-4">Contact</span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let's talk.</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Tell us a little about your goals and we'll get back to you within one business day.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="card space-y-4" noValidate>
            <div>
              <label className="label" htmlFor="name">Name</label>
              <input
                id="name"
                className="input"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="input"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="label" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="input min-h-[140px] resize-y"
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="A few lines about your project or goals."
              />
            </div>

            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                {error}
              </div>
            )}
            {submitted && (
              <div className="flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-sm text-emerald-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <span>Thanks—your message has been received. We'll be in touch shortly.</span>
              </div>
            )}

            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? 'Sending…' : (<>Send message <Send size={14} /></>)}
            </button>
          </form>
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <div className="card">
            <h3 className="text-base font-semibold">Reach us directly</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2.5"><Mail size={16} className="text-brand-700" /> info@sminfotechs.com</li>
              <li className="flex items-center gap-2.5"><Phone size={16} className="text-brand-700" /> +91 00000 00000</li>
              <li className="flex items-center gap-2.5"><MapPin size={16} className="text-brand-700" /> India</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-base font-semibold">Office hours</h3>
            <p className="mt-2 text-sm text-slate-600">Mon – Fri, 10:00 – 19:00 IST</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
