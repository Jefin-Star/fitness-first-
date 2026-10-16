import React from 'react';
import { GYM_CONTACT } from '../data/gymData.ts';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageSquare, 
  ExternalLink,
  Navigation,
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0f0c] relative overflow-hidden border-t border-lime-400/10">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[350px] bg-lime-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lime-400 mb-2">
            Get In Touch
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Contact <span className="text-lime-400">Us</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Have questions about personal coaching, memberships, or touring the facility? Reach out anytime via WhatsApp, phone, email, or drop by in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* WhatsApp Card */}
            <a
              href={GYM_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#0e1711] border border-lime-400/25 hover:border-lime-400 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/30 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    WhatsApp Chat
                  </span>
                  <span className="text-lg font-bold text-white group-hover:text-lime-300 transition-colors font-mono tabular-nums">
                    {GYM_CONTACT.phoneDisplay}
                  </span>
                  <span className="text-xs text-lime-400/80 block mt-0.5">
                    Instant response for admission & enquiries
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-lime-400 transition-colors shrink-0" />
            </a>

            {/* Direct Call Card */}
            <a
              href={`tel:+91${GYM_CONTACT.phoneRaw}`}
              className="group p-5 rounded-2xl bg-[#0e1711] border border-lime-400/25 hover:border-lime-400 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Call Direct
                  </span>
                  <span className="text-lg font-bold text-white group-hover:text-lime-300 transition-colors font-mono tabular-nums">
                    {GYM_CONTACT.phoneDisplay}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Speak directly with the team
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-lime-400 transition-colors shrink-0" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${GYM_CONTACT.email}`}
              className="group p-5 rounded-2xl bg-[#0e1711] border border-lime-400/25 hover:border-lime-400 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Email Address
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-lime-300 transition-colors truncate block">
                    {GYM_CONTACT.email}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Official correspondence & inquiries
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-lime-400 transition-colors shrink-0" />
            </a>

            {/* Instagram Card */}
            <a
              href={GYM_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#0e1711] border border-lime-400/25 hover:border-lime-400 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/30 group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Instagram Official
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-lime-300 transition-colors">
                    {GYM_CONTACT.instagramHandle}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Follow member workouts & transformation reels
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-lime-400 transition-colors shrink-0" />
            </a>

            {/* Address summary & hours chip */}
            <div className="p-5 rounded-2xl bg-black/40 border border-lime-400/15 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Gym Location
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {GYM_CONTACT.fullAddress}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-lime-400 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon – Sat: 6:00 AM – 9:30 PM (Sun Closed)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Maps (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#0e1711] border border-lime-400/30 shadow-[0_0_35px_rgba(163,230,53,0.15)] flex flex-col">
            <div className="p-4 bg-[#0a110c] border-b border-lime-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-lime-400" />
                <span className="text-xs font-bold uppercase text-white tracking-wider">
                  Google Maps Location · Fitness First
                </span>
              </div>
              <a
                href={GYM_CONTACT.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-lime-400 hover:text-lime-300 inline-flex items-center gap-1 transition-colors"
              >
                Get Directions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative w-full h-[400px] lg:h-[480px] bg-slate-900">
              <iframe
                src={GYM_CONTACT.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Team Fitness First Google Map Location"
                className="w-full h-full filter invert-[0.88] hue-rotate-180 contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
