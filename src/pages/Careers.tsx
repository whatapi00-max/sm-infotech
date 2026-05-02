import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  AlertTriangle,
  Building2,
  X,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Link2,
} from 'lucide-react';
import { supabase, isSupabaseConfigured, type Job } from '../lib/supabase';

type PageState =
  | { status: 'loading' }
  | { status: 'ready'; jobs: Job[] }
  | { status: 'error'; message: string };

export default function Careers() {
  const [state, setState] = useState<PageState>({ status: 'loading' });
  const [applyJob, setApplyJob] = useState<Job | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!isSupabaseConfigured || !supabase) {
        if (active) setState({ status: 'ready', jobs: [] });
        return;
      }
      const { data, error } = await supabase
        .from('jobs')
        .select('id, title, description, department, location, type, created_at')
        .order('created_at', { ascending: false });
      if (!active) return;
      if (error) {
        setState({ status: 'error', message: 'We could not load openings right now. Please try again later.' });
        return;
      }
      setState({ status: 'ready', jobs: (data ?? []) as Job[] });
    }
    load();
    return () => { active = false; };
  }, []);

  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="badge mb-4">Careers</span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Build your career with SM Infotech.
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We're a small, senior team that values clarity, craft, and ownership.
            See open roles below.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          {state.status === 'loading' && <JobsSkeleton />}

          {state.status === 'error' && (
            <div className="card flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-semibold">Unable to load openings</h3>
                <p className="mt-1 text-sm text-slate-600">{state.message}</p>
              </div>
            </div>
          )}

          {state.status === 'ready' && state.jobs.length === 0 && (
            <div className="card text-center py-12">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-slate-500">
                <Briefcase size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold">No openings available currently</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                We're not actively hiring right now. Please check back soon.
              </p>
            </div>
          )}

          {state.status === 'ready' && state.jobs.length > 0 && (
            <ul className="grid gap-4">
              {state.jobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={() => setApplyJob(job)} />
              ))}
            </ul>
          )}
        </div>
      </section>

      {applyJob && (
        <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />
      )}
    </>
  );
}

function JobCard({ job, onApply }: { job: Job; onApply: () => void }) {
  return (
    <li className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-soft flex items-center justify-between gap-6 hover:border-brand-200 hover:shadow-md transition-all">
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
        {job.description && (
          <p className="mt-0.5 text-sm text-slate-500 line-clamp-1">{job.description}</p>
        )}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-500">
          {job.department && (
            <span className="inline-flex items-center gap-1.5">
              <Building2 size={12} className="text-slate-400" /> {job.department}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} className="text-slate-400" /> {job.location || '—'}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} className="text-slate-400" /> {job.type || '—'}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={onApply}
        className="btn-primary shrink-0"
      >
        Apply <ArrowRight size={14} />
      </button>
    </li>
  );
}

type ApplyForm = {
  name: string;
  email: string;
  phone: string;
  coverNote: string;
  resumeUrl: string;
  portfolioUrl: string;
};

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [form, setForm] = useState<ApplyForm>({
    name: '', email: '', phone: '', coverNote: '', resumeUrl: '', portfolioUrl: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  function set<K extends keyof ApplyForm>(k: K, v: ApplyForm[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  function isValidUrl(u: string) {
    try { new URL(u); return true; } catch { return false; }
  }

  function validate() {
    if (!form.name.trim()) return 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (!form.phone.trim()) return 'Please enter your phone number.';
    if (!form.resumeUrl.trim()) return 'Please share a link to your resume.';
    if (!isValidUrl(form.resumeUrl)) return 'Please enter a valid resume URL (starting with https://).';
    if (form.portfolioUrl.trim() && !isValidUrl(form.portfolioUrl)) return 'Please enter a valid portfolio URL.';
    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    setSubmitting(true);
    try {
      const data = new FormData();
      data.append('access_key', 'aea5299f-0bb9-474d-860e-6585f5ab9d6b');
      data.append('subject', `New job application: ${job.title}`);
      data.append('from_name', 'SM Infotech Careers');
      data.append('Position', job.title);
      if (job.department) data.append('Department', job.department);
      if (job.location)   data.append('Location', job.location);
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('Cover Note', form.coverNote || '—');
      data.append('Resume Link', form.resumeUrl);
      if (form.portfolioUrl.trim()) data.append('Portfolio / LinkedIn', form.portfolioUrl);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || 'Submission failed');

      setSubmitted(true);
    } catch (e2) {
      setError(e2 instanceof Error ? e2.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Apply for this role</h2>
            <p className="mt-0.5 text-sm text-slate-500">{job.title}{job.department ? ` · ${job.department}` : ''}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-0.5 rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="mt-4 text-base font-semibold">Application submitted!</h3>
            <p className="mt-2 text-sm text-slate-600">
              Thanks for applying for <strong>{job.title}</strong>. We'll review your details and get back to you soon.
            </p>
            <button onClick={onClose} className="btn-primary mt-6">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="apply-name">
                  <span className="inline-flex items-center gap-1.5"><User size={13} /> Full name</span>
                </label>
                <input
                  id="apply-name"
                  className="input"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  placeholder="Jane Smith"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="label" htmlFor="apply-phone">
                  <span className="inline-flex items-center gap-1.5"><Phone size={13} /> Phone number</span>
                </label>
                <input
                  id="apply-phone"
                  type="tel"
                  className="input"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="apply-email">
                <span className="inline-flex items-center gap-1.5"><Mail size={13} /> Email address</span>
              </label>
              <input
                id="apply-email"
                type="email"
                className="input"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="label" htmlFor="apply-cover">Cover note <span className="text-slate-400 font-normal">(optional)</span></label>
              <textarea
                id="apply-cover"
                className="input min-h-[90px] resize-none"
                value={form.coverNote}
                onChange={(e) => set('coverNote', e.target.value)}
                placeholder="A brief note about yourself and why you're a great fit."
              />
            </div>

            <div>
              <label className="label" htmlFor="apply-resume">
                <span className="inline-flex items-center gap-1.5"><Link2 size={13} /> Resume link</span>
              </label>
              <input
                id="apply-resume"
                type="url"
                className="input"
                value={form.resumeUrl}
                onChange={(e) => set('resumeUrl', e.target.value)}
                placeholder="https://drive.google.com/... or Dropbox / OneDrive link"
              />
              <p className="mt-1.5 text-xs text-slate-500">
                Share a public link to your resume (Google Drive, Dropbox, OneDrive, or hosted PDF).
              </p>
            </div>

            <div>
              <label className="label" htmlFor="apply-portfolio">
                Portfolio / LinkedIn <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                id="apply-portfolio"
                type="url"
                className="input"
                value={form.portfolioUrl}
                onChange={(e) => set('portfolioUrl', e.target.value)}
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>

            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-1">
              <button type="button" onClick={onClose} className="btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn-primary" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit application'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function JobsSkeleton() {
  return (
    <ul className="grid gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i} className="rounded-xl border border-slate-200 bg-white px-6 py-5 animate-pulse">
          <div className="h-4 w-1/3 rounded bg-slate-200" />
          <div className="mt-2 h-3 w-2/3 rounded bg-slate-100" />
          <div className="mt-4 flex gap-4">
            <div className="h-3 w-20 rounded bg-slate-100" />
            <div className="h-3 w-16 rounded bg-slate-100" />
            <div className="h-3 w-20 rounded bg-slate-100" />
          </div>
        </li>
      ))}
    </ul>
  );
}
