import { Link } from 'react-router-dom';
import {
  Search,
  Share2,
  Megaphone,
  Sparkles,
  PenLine,
  LineChart,
  Globe,
  Smartphone,
  Code2,
  ClipboardList,
  Lightbulb,
  Rocket,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    desc: 'Technical, on-page and off-page SEO that builds durable organic visibility.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Content calendars, community management, and channel-fit creative.',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    desc: 'Google, Meta, and LinkedIn campaigns built around real funnels.',
  },
  {
    icon: Sparkles,
    title: 'Branding & Identity',
    desc: 'Logos, identity systems, and guidelines that scale across touchpoints.',
  },
  {
    icon: PenLine,
    title: 'Content & Copywriting',
    desc: 'Strategic content—from landing pages to long-form—that earns attention.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Reporting',
    desc: 'Clear dashboards and reviews that connect activity to outcomes.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Fast, responsive, and conversion-optimised websites built for performance and scale.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps that deliver smooth experiences on iOS and Android.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom software solutions tailored to your business workflows, integrations, and growth needs.',
  },
];

const process = [
  { icon: ClipboardList, step: '01', title: 'Discovery',    desc: 'We audit your current presence, define your audience, and identify growth gaps.' },
  { icon: Lightbulb,     step: '02', title: 'Strategy',     desc: 'A clear, channel-specific plan tied to your business goals—not a generic playbook.' },
  { icon: Rocket,        step: '03', title: 'Execution',    desc: 'Our team ships campaigns, content, and creative on schedule without hand-holding.' },
  { icon: LineChart,     step: '04', title: 'Optimisation', desc: 'Weekly analysis, A/B testing, and iteration until you see compounding returns.' },
];

export default function Services() {
  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="badge mb-4">Services</span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Focused services. Real outcomes.
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Each engagement is shaped around your goals, audience, and stage—delivered
            with the discipline of a senior team.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={`/contact?service=${encodeURIComponent(s.title)}`}
              className="card group hover:border-brand-200 hover:shadow-md transition-all flex flex-col"
            >
              <div className="icon-tile">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold group-hover:text-brand-700 transition-colors">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed flex-1">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 opacity-0 group-hover:opacity-100 transition-opacity">
                Enquire now <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Our process */}
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
                <span className="absolute top-4 right-4 text-4xl font-black text-slate-100 select-none leading-none">
                  {p.step}
                </span>
                <div className="icon-tile">
                  <p.icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
