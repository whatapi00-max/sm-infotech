import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SM Infotech" className="h-12 w-auto mix-blend-multiply" />
          </div>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            An IT services and digital marketing company delivering software solutions,
            web & app development, and performance-driven marketing.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link to="/about" className="hover:text-slate-900">About</Link></li>
            <li><Link to="/services" className="hover:text-slate-900">Services</Link></li>
            <li><Link to="/careers" className="hover:text-slate-900">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Reach us</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2"><Mail size={14} /> hello@sminfotech.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between py-4 text-xs text-slate-500">
          <span>© {year} SM Infotech. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">Built with care for clarity and trust.</span>
        </div>
      </div>
    </footer>
  );
}
