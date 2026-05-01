import { useEffect, useState, type FormEvent } from 'react';
import {
  LogIn,
  LogOut,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { supabase, isSupabaseConfigured, type Job } from '../lib/supabase';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';
const SESSION_KEY = 'sm_admin_session_v1';

export default function Admin() {
  const [authed, setAuthed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      return false;
    }
  });

  if (!authed) return <Login onSuccess={() => setAuthed(true)} />;

  return (
    <Dashboard
      onLogout={() => {
        try {
          sessionStorage.removeItem(SESSION_KEY);
        } catch {}
        setAuthed(false);
      }}
    />
  );
}

function Login({ onSuccess }: { onSuccess: () => void }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id.trim() === ADMIN_USER && password === ADMIN_PASS) {
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {}
      onSuccess();
    } else {
      setError('Invalid credentials. Please try again.');
    }
  }

  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <div className="mx-auto grid h-11 w-11 place-items-center rounded-md bg-brand-50 text-brand-700">
            <Lock size={20} />
          </div>
          <h1 className="mt-4 text-2xl font-semibold">Admin sign in</h1>
          <p className="mt-1.5 text-sm text-slate-600">Restricted area for SM Infotech staff.</p>
        </div>

        <form onSubmit={submit} className="card mt-8 space-y-4" noValidate>
          <div>
            <label className="label" htmlFor="admin-id">User ID</label>
            <input
              id="admin-id"
              className="input"
              value={id}
              onChange={(e) => setId(e.target.value)}
              autoComplete="username"
              autoFocus
            />
          </div>
          <div>
            <label className="label" htmlFor="admin-pass">Password</label>
            <input
              id="admin-pass"
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
              {error}
            </div>
          )}
          <button type="submit" className="btn-primary w-full">
            <LogIn size={16} /> Sign in
          </button>
        </form>
      </div>
    </section>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Full-time');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function fetchJobs() {
    if (!isSupabaseConfigured || !supabase) {
      setLoadError('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.');
      setJobs([]);
      return;
    }
    setLoadError(null);
    const { data, error } = await supabase
      .from('jobs')
      .select('id, title, description, department, location, type, created_at')
      .order('created_at', { ascending: false });
    if (error) {
      setLoadError('Could not load jobs. Please try again.');
      setJobs([]);
      return;
    }
    setJobs((data ?? []) as Job[]);
  }

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function addJob(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setSuccess(null);

    if (!title.trim() || !description.trim() || !department.trim() || !location.trim() || !type.trim()) {
      setFormError('Please fill in all fields.');
      return;
    }
    if (!isSupabaseConfigured || !supabase) {
      setFormError('Supabase is not configured.');
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from('jobs').insert({
      title: title.trim(),
      description: description.trim(),
      department: department.trim(),
      location: location.trim(),
      type: type.trim(),
    });
    setSubmitting(false);

    if (error) {
      console.error('Supabase insert error:', error);
      setFormError(`Could not save job: ${error.message}`);
      return;
    }
    setTitle('');
    setDescription('');
    setDepartment('');
    setLocation('');
    setType('Full-time');
    setSuccess('Job posted successfully.');
    fetchJobs();
  }

  async function deleteJob(id: string) {
    if (!supabase) return;
    if (!confirm('Delete this job? This cannot be undone.')) return;
    const { error } = await supabase.from('jobs').delete().eq('id', id);
    if (error) {
      setLoadError('Could not delete the job.');
      return;
    }
    fetchJobs();
  }

  return (
    <section className="container-page py-12 sm:py-16">
      <header className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">Admin · Jobs</h1>
          <p className="mt-1 text-sm text-slate-600">Manage open roles displayed on the Careers page.</p>
        </div>
        <button onClick={onLogout} className="btn-secondary">
          <LogOut size={14} /> Sign out
        </button>
      </header>

      {!isSupabaseConfigured && (
        <div className="mt-6 flex items-start gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
          <span>
            Supabase is not configured. Set <code className="font-mono">VITE_SUPABASE_URL</code> and{' '}
            <code className="font-mono">VITE_SUPABASE_ANON_KEY</code> in <code className="font-mono">.env</code> to enable job management.
          </span>
        </div>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        {/* Add job form */}
        <form onSubmit={addJob} className="card lg:col-span-2 space-y-4 self-start" noValidate>
          <div>
            <h2 className="text-base font-semibold">Add a new job</h2>
            <p className="mt-1 text-xs text-slate-500">It will appear immediately on the Careers page.</p>
          </div>
          <div>
            <label className="label" htmlFor="title">Job title</label>
            <input id="title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Performance Marketing Lead" />
          </div>
          <div>
            <label className="label" htmlFor="desc">Description</label>
            <textarea id="desc" className="input min-h-[100px] resize-y" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Role summary and responsibilities" />
          </div>
          <div>
            <label className="label" htmlFor="department">Department</label>
            <input id="department" className="input" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g. Marketing, Engineering" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="location">Location</label>
              <input id="location" className="input" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Remote / City" />
            </div>
            <div>
              <label className="label" htmlFor="type">Type</label>
              <select id="type" className="input" value={type} onChange={(e) => setType(e.target.value)}>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          {formError && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">{formError}</div>
          )}
          {success && (
            <div className="flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-sm text-emerald-700">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          <button type="submit" className="btn-primary w-full" disabled={submitting || !isSupabaseConfigured}>
            <Plus size={16} /> {submitting ? 'Saving…' : 'Add job'}
          </button>
        </form>

        {/* Jobs list */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold">Current openings</h2>
            <span className="text-xs text-slate-500">{jobs?.length ?? 0} total</span>
          </div>

          {loadError && (
            <div className="mb-4 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertTriangle size={16} className="mt-0.5 shrink-0" />
              <span>{loadError}</span>
            </div>
          )}

          {jobs === null && (
            <div className="card text-sm text-slate-500">Loading…</div>
          )}

          {jobs && jobs.length === 0 && !loadError && (
            <div className="card text-sm text-slate-600">No jobs yet. Add your first opening on the left.</div>
          )}

          {jobs && jobs.length > 0 && (
            <ul className="grid gap-3">
              {jobs.map((j) => (
                <li key={j.id} className="card flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900 truncate">{j.title}</h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {j.department || '—'} · {j.location || '—'} · {j.type || '—'}
                    </p>
                    {j.description && (
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">{j.description}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteJob(j.id)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-red-200 bg-white px-2.5 py-1.5 text-xs font-medium text-red-700 hover:bg-red-50"
                    aria-label={`Delete ${j.title}`}
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
