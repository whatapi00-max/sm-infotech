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
  LineChart,
  Quote,
  Smartphone,
  Check,
  Users,
  Cog,
  PackageCheck,
  TrendingUp,
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

const industries = [
  'E-commerce', 'Real Estate', 'Healthcare', 'Education',
  'SaaS & Tech', 'Hospitality', 'Finance', 'Retail', 'Gaming',
];

const clients = [
  'Acme Corp',
  'Lumen Labs',
  'NovaSoft',
  'BrightWave',
  'PixelForge',
  'Zenith Media',
  'Quanta Tech',
  'NorthPeak',
  'Helio Systems',
  'Vertex AI',
  'BlueOrbit',
  'StackHub',
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
      <section className="relative overflow-hidden bg-white">
        {/* Subtle dot grid background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.35) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Soft top wash */}
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-brand-50/40 to-transparent" aria-hidden />

        <div className="container-page relative py-24 sm:py-32 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-medium tracking-[0.15em] uppercase text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            IT Services & Digital Marketing
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Marketing that earns trust.
            <br className="hidden sm:block" />
            <span className="text-brand-700"> Performance that compounds.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            SM Infotech is an IT services and digital marketing company helping
            businesses grow through software development, web &amp; app solutions,
            and performance-driven campaigns.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
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
      <section className="section-alt">
        <div className="container-page py-12">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 divide-y divide-slate-200 sm:divide-y-0 sm:divide-x">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center ${i === 0 ? 'pt-0' : 'pt-8'} sm:pt-0 sm:px-4`}>
                <dt className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-brand-700 to-brand-500 bg-clip-text text-transparent">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-slate-500 uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our Clients — auto-scrolling marquee (minimalist) */}
      <section className="bg-white">
        <div className="py-14 sm:py-16">
          <div className="container-page text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
              Our Clients
            </span>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-slate-900">
              Trusted by ambitious teams worldwide
            </h2>
          </div>

          {/* Marquee — refined edge fade, pauses on hover */}
          <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max gap-10 sm:gap-14 px-6">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="shrink-0 flex items-center justify-center"
                >
                  <span className="text-base sm:text-lg font-semibold tracking-tight text-slate-400 hover:text-slate-700 transition-colors select-none whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
              <div className="icon-tile">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
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
              <div className="icon-tile">
                <r.icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Drive more revenue — embedded specialists */}
      <section className="bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Drive more revenue
                <br />
                <span className="text-brand-700">…without increasing in-house headcount</span>
              </h2>
              <p className="mt-3 text-sm text-slate-500">
                Hire managed specialists who work as part of your team.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Dedicated, embedded specialists</h3>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      'Hire entire teams or FTEs',
                      'Work inside your tools, workflows, and time zone',
                      'Retain context and continuity',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-brand-100 text-brand-700 shrink-0">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-8">
                  <h3 className="text-base font-semibold text-slate-900">Flexible capacity, zero hiring drag</h3>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      'Scale up or down as needed',
                      'No recruitment delays or fixed overhead',
                      'Adjust team mix as priorities change',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-brand-100 text-brand-700 shrink-0">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-8">
                  <h3 className="text-base font-semibold text-slate-900">Control with accountability</h3>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      'You set priorities & direction',
                      'We manage quality, delivery & SLAs',
                      'Single point of coordination',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-brand-100 text-brand-700 shrink-0">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right visual — stat card with growth metric */}
            <div className="relative">
              <p className="text-center text-sm text-slate-700 mb-6">
                What a <span className="text-brand-700 font-semibold">dedicated resource team</span>
                <br />
                can do for your brand
              </p>
              <div className="relative rounded-3xl bg-gradient-to-br from-brand-100 via-brand-50 to-white p-4 sm:p-6 shadow-soft">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="A dedicated team collaborating in a modern office"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating metric card */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 w-56">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-emerald-50 text-emerald-600">
                      <TrendingUp size={14} />
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Growth</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">+1,900%</p>
                  <p className="text-xs text-slate-500 mt-1">Average revenue lift across cohorts</p>
                </div>
              </div>
              <div className="mt-16 text-center">
                <Link to="/contact" className="btn-primary">
                  Book a strategy call <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bringing strategy, execution, and scale together */}
      <section className="bg-slate-50/70 border-y border-slate-200">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="text-brand-700">Bringing strategy, execution, and scale</span>
              <br />
              <span className="text-slate-900">together</span>
              <span className="text-slate-600"> —so each channel drives higher ROI</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Column group 1 */}
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-50 text-brand-700">
                    <Lightbulb size={13} />
                  </span>
                  Lifecycle &amp; Strategy
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="hover:text-brand-700 cursor-default">Lifecycle Marketing</li>
                  <li className="hover:text-brand-700 cursor-default">Strategy &amp; Consultation</li>
                  <li className="hover:text-brand-700 cursor-default">Marketing Automation</li>
                  <li className="hover:text-brand-700 cursor-default">Platform Migration / Support</li>
                  <li className="hover:text-brand-700 cursor-default">Email Design &amp; Development</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-50 text-brand-700">
                    <Globe size={13} />
                  </span>
                  Web &amp; Martech
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="hover:text-brand-700 cursor-default">CMS Development</li>
                  <li className="hover:text-brand-700 cursor-default">Web &amp; Mobile Apps</li>
                  <li className="hover:text-brand-700 cursor-default">Digital Assets</li>
                  <li className="hover:text-brand-700 cursor-default">UI / UX</li>
                </ul>
              </div>
            </div>

            {/* Column group 2 */}
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-50 text-brand-700">
                    <Users size={13} />
                  </span>
                  Platform Expertise
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="hover:text-brand-700 cursor-default">SFMC</li>
                  <li className="hover:text-brand-700 cursor-default">Braze</li>
                  <li className="hover:text-brand-700 cursor-default">HubSpot</li>
                  <li className="hover:text-brand-700 cursor-default">Marketo</li>
                  <li className="hover:text-brand-700 cursor-default">Klaviyo</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-50 text-brand-700">
                    <LineChart size={13} />
                  </span>
                  Digital Marketing
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="hover:text-brand-700 cursor-default">SEO Services</li>
                  <li className="hover:text-brand-700 cursor-default">Paid Media</li>
                  <li className="hover:text-brand-700 cursor-default">LLM &amp; AI SEO</li>
                  <li className="hover:text-brand-700 cursor-default">GA4 &amp; Analytics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-primary">
              Let's talk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How we're structured */}
      <section className="container-page py-16 sm:py-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                How We're Structured
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our setup is built around documented SOPs that systemise daily execution and
                maintain delivery consistency. This ensures every deliverable we provide is
                predictable, scalable and most importantly reliable.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
                  <Cog size={18} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Operations</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Defined processes with review checkpoints so all your projects stay on track from start to finish.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
                  <PackageCheck size={18} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Delivery</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    A 50+ in-house team, fully synced with you and completely invisible to your end-clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
