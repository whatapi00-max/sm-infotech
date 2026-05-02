import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  Globe,
} from 'lucide-react';

const points = [
  'Strategy first, tactics second',
  'Clear scope and transparent reporting',
  'Long-term partnerships over quick wins',
];

const stats = [
  { value: '150+', label: 'Brands served' },
  { value: '2+',   label: 'Years in business' },
  { value: '12',   label: 'Team members' },
  { value: '98%',  label: 'Client retention' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Clarity over complexity',
    desc: 'We cut through jargon and present only what matters—clear plans, plain language, and focused execution.',
  },
  {
    icon: Heart,
    title: 'Genuine partnership',
    desc: 'We treat your business like our own. Your goals drive our strategy, not the other way around.',
  },
  {
    icon: TrendingUp,
    title: 'Compounding growth',
    desc: 'Every campaign we run is designed to build on the last—creating momentum that grows over time.',
  },
  {
    icon: Award,
    title: 'Accountable execution',
    desc: 'We own our results. Transparent reporting, honest timelines, and no excuses when things need fixing.',
  },
];


export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="container-page py-16 sm:py-20">
        <div className="max-w-3xl">
          <span className="badge mb-4">About SM Infotech</span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            A digital marketing partner built on clarity and trust.
          </h1>
          <p className="mt-5 text-slate-600 leading-relaxed max-w-2xl">
            SM Infotech is a digital marketing agency that works with growing
            brands to design and execute marketing systems that compound. We pair
            strategic thinking with disciplined execution—no fluff, no theatrics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-semibold">Our mission</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              To make modern marketing simple, measurable, and trustworthy for
              every brand we serve—delivering clear value at every step.
            </p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">How we work</h2>
            <ul className="mt-3 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 text-brand-600 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container-page py-10">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-3xl font-bold text-brand-700">{s.value}</dt>
                <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our story */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="badge mb-4">Our story</span>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              From a small consultancy to a full-service agency.
            </h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                SM Infotech started in 2016 as a two-person SEO consultancy helping local businesses
                get found online. We quickly realized that most brands didn't need more tactics—they
                needed a clear, connected strategy that tied every channel together.
              </p>
              <p>
                Over the next eight years we grew into a full-service digital marketing agency,
                building performance systems for e-commerce brands, SaaS startups, and established
                enterprises across India and Southeast Asia.
              </p>
              <p>
                Today our team of 12 specialists works across SEO, paid media, social, branding, and
                analytics—delivering campaigns that compound and partnerships that last.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card bg-brand-50 border-brand-100">
              <Globe size={20} className="text-brand-700 mb-3" />
              <p className="text-sm font-semibold text-slate-900">Pan-India reach</p>
              <p className="mt-1 text-xs text-slate-600">Clients across 15+ cities and 3 countries.</p>
            </div>
            <div className="card">
              <Award size={20} className="text-brand-700 mb-3" />
              <p className="text-sm font-semibold text-slate-900">Industry recognition</p>
              <p className="mt-1 text-xs text-slate-600">Featured in leading digital marketing publications.</p>
            </div>
            <div className="card">
              <Users size={20} className="text-brand-700 mb-3" />
              <p className="text-sm font-semibold text-slate-900">Senior-led team</p>
              <p className="mt-1 text-xs text-slate-600">Every account is managed by a specialist, not a junior.</p>
            </div>
            <div className="card bg-slate-50">
              <TrendingUp size={20} className="text-brand-700 mb-3" />
              <p className="text-sm font-semibold text-slate-900">Data-first culture</p>
              <p className="mt-1 text-xs text-slate-600">Every decision is backed by analytics, not intuition alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50/70 border-y border-slate-200">
        <div className="container-page py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge mb-4">What we stand for</span>
            <h2 className="text-2xl sm:text-3xl font-semibold">Our values</h2>
            <p className="mt-2 text-slate-600">
              The principles we hire around, build on, and hold ourselves accountable to.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card hover:border-brand-200 hover:shadow-md transition-all">
                <div className="icon-tile">
                  <v.icon size={18} />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50/70 border-t border-slate-200">
        <div className="container-page py-16 sm:py-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Want to work with us?</h3>
              <p className="mt-1.5 text-slate-600">
                We take on a limited number of new clients each quarter to ensure quality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary shrink-0">
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link to="/careers" className="btn-secondary shrink-0">
                Join the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
