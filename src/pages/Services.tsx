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

export default function Services() {
  return (
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
          <div key={s.title} className="card">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700">
              <s.icon size={18} />
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
