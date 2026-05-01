import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Share2,
  Megaphone,
  Sparkles,
  ShieldCheck,
  Gauge,
  Target,
  Globe,
  Lightbulb,
  ClipboardList,
  Rocket,
  LineChart,
  Quote,
  Briefcase,
  Smartphone,
} from 'lucide-react';

const services = [
  { icon: Search,     title: 'SEO',                    desc: 'Rank for what matters with a measured, content-led approach.' },
  { icon: Share2,     title: 'Social Media Marketing',  desc: 'Consistent, on-brand presence across the channels that work.' },
  { icon: Megaphone,  title: 'Paid Ads',                desc: 'Performance campaigns built around real funnels and ROI.' },
  { icon: Sparkles,   title: 'Branding',                desc: 'Identity systems that look sharp and scale across touchpoints.' },
  { icon: Globe,      title: 'Web Development',         desc: 'Fast, responsive websites built for performance and conversions.' },
  { icon: Smartphone, title: 'App Development',         desc: 'Cross-platform mobile apps that deliver smooth iOS & Android experiences.' },
];

const stats = [
  { value: '150+', label: 'Brands served' },
  { value: '2+',   label: 'Years of experience' },
  { value: '3×',   label: 'Average traffic growth' },
  { value: '98%',  label: 'Client retention rate' },
];

const reasons = [
  { icon: ShieldCheck, title: 'Trust',       desc: 'Transparent reporting, clear scope, and honest communication—every engagement.' },
  { icon: Gauge,       title: 'Performance', desc: 'Fast iterations, data-driven decisions, and a focus on what moves the metric.' },
  { icon: Target,      title: 'Results',     desc: 'We measure what matters and optimize until the numbers reflect the goal.' },
];

const process = [
  { icon: ClipboardList, step: '01', title: 'Discovery',   desc: 'We audit your current presence, define your audience, and identify growth gaps.' },
  { icon: Lightbulb,     step: '02', title: 'Strategy',    desc: 'A clear, channel-specific plan tied to your business goals—not a generic playbook.' },
  { icon: Rocket,        step: '03', title: 'Execution',   desc: 'Our team ships campaigns, content, and creative on schedule without hand-holding.' },
  { icon: LineChart,     step: '04', title: 'Optimisation', desc: 'Weekly analysis, A/B testing, and iteration until you see compounding returns.' },
];

const industries = [
  'E-commerce', 'Real Estate', 'Healthcare', 'Education',
  'SaaS & Tech', 'Hospitality', 'Finance', 'Retail', 'Gaming',
];

const testimonials = [
  {
    quote: 'SM Infotech turned our ad spend from a black box into a growth engine. We 3× our qualified leads in four months.',
    name: 'Priya Menon',
    role: 'Founder, StyleCraft India',
  },
  {
    quote: 'Clear strategy, zero fluff. They told us exactly what would work and then delivered it. The SEO results speak for themselves.',
    name: 'Rahul Verma',
    role: 'Marketing Head, EduSpark',
  },
  {
    quote: "Professional, responsive, and genuinely invested in our growth. The best agency partnership we've had.",
    name: 'Anjali Shah',
    role: 'CEO, NestRealty',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white" aria-hidden />
        <div className="container-page relative py-20 sm:py-28 text-center">
          <span className="badge mb-5">IT Services & Digital Marketing</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Marketing that earns trust.
            <br className="hidden sm:block" />
            <span className="text-brand-700"> Performance that compounds.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-600">
            SM Infotech is an IT services and digital marketing company helping businesses grow through software development, web & app solutions, and performance-driven campaigns.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
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

      {/* Services preview */}
      <section className="container-page py-16 sm:py-20">
        <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">What we do</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Focused services designed to compound—each one supports the next.
            </p>
          </div>
          <Link
            to="/services"
            className="text-sm font-medium text-brand-700 hover:text-brand-900 inline-flex items-center gap-1"
          >
            All services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card group hover:border-brand-200 hover:shadow-md transition-all">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-slate-50/70 border-y border-slate-200">
        <div className="container-page py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge mb-4">Our process</span>
            <h2 className="text-2xl sm:text-3xl font-semibold">How we work</h2>
            <p className="mt-2 text-slate-600">
              A repeatable four-step framework that removes guesswork and drives growth.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="card relative overflow-hidden">
                <span className="absolute top-4 right-4 text-4xl font-black text-slate-100 select-none leading-none">{p.step}</span>
                <div className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700">
                  <p.icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-page py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">Why teams choose SM Infotech</h2>
          <p className="mt-2 text-slate-600">Three principles guide every project we take on.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="card">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700">
                <r.icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50/70 border-y border-slate-200">
        <div className="container-page py-14 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
            <div className="sm:w-64 shrink-0">
              <Globe size={22} className="text-brand-700 mb-3" />
              <h2 className="text-xl sm:text-2xl font-semibold">Industries we serve</h2>
              <p className="mt-2 text-sm text-slate-600">
                We've built playbooks across verticals—bringing cross-industry insight to every campaign.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-soft"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge mb-4">Client voices</span>
          <h2 className="text-2xl sm:text-3xl font-semibold">What our clients say</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card flex flex-col gap-4">
              <Quote size={20} className="text-brand-300 shrink-0" />
              <p className="text-sm text-slate-700 leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers teaser */}
      <section className="bg-brand-50/50 border-y border-brand-100">
        <div className="container-page py-14 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand-100 text-brand-700">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Join our growing team</h2>
              <p className="mt-1 text-sm text-slate-600 max-w-md">
                We're always looking for curious, driven people. See if there's a role that fits you.
              </p>
            </div>
          </div>
          <Link to="/careers" className="btn-primary shrink-0">
            View open roles <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 sm:py-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">Ready to grow with clarity?</h3>
            <p className="mt-1.5 text-slate-600">Tell us about your goals—we'll respond within 1 business day.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
