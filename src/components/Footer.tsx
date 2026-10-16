import React from 'react';
import { MpLogo } from './MpLogo.tsx';
import { GYM_CONTACT } from '../data/gymData.ts';
import { 
  Instagram, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050806] text-slate-300 border-t border-lime-400/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle bottom green glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-lime-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-lime-400/15">
          {/* Col 1 & 2: Brand Lockup & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 flex items-center justify-center">
                <MpLogo className="h-8 w-auto" glow={true} />
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight uppercase">
                Team <span className="text-[#00E85B]">Fitness First</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {GYM_CONTACT.tagline} Thrissur's premier gym for strength training, cardio conditioning, and bodybuilding mastery.
            </p>

            <div className="pt-2 text-xs text-lime-400/90 font-medium space-y-1">
              <p>• District Secretary — Bodybuilding and Fitness Association of Thrissur (BBFAT)</p>
              <p>• State Treasurer — Bodybuilding Association of Kerala (BBAK)</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={GYM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 flex items-center justify-center transition-all border border-lime-400/20"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <a
                href={GYM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 flex items-center justify-center transition-all border border-lime-400/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${GYM_CONTACT.email}`}
                className="w-10 h-10 rounded-lg bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 flex items-center justify-center transition-all border border-lime-400/20"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:+91${GYM_CONTACT.phoneRaw}`}
                className="w-10 h-10 rounded-lg bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 flex items-center justify-center transition-all border border-lime-400/20"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-lime-400 transition-colors">
                  About Our Gym
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-lime-400 transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#coaching" className="hover:text-lime-400 transition-colors">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-lime-400 transition-colors">
                  Operating Hours
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-lime-400 transition-colors">
                  Join & Register
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lime-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Gym Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div>
                <p className="text-white font-medium">Monday – Saturday</p>
                <p className="text-lime-400 font-mono text-xs tabular-nums">6:00 AM – 9:30 PM</p>
              </div>
              <div className="pt-2">
                <p className="text-white font-medium">Sunday</p>
                <p className="text-red-400 font-medium text-xs">Closed (Rest Day)</p>
              </div>
              <div className="pt-2 text-xs text-slate-500">
                Admission Fee: ₹1,000 on 1M plans only. Free admission on 3M+ plans.
              </div>
            </div>
          </div>

          {/* Col 5: Location Details */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Location
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>Near Amala, Thrissur, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="font-mono tabular-nums">{GYM_CONTACT.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="truncate">{GYM_CONTACT.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Team Fitness First. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Team Fitness First · Amala, Thrissur
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
