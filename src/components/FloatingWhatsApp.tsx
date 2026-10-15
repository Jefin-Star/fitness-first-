import React from 'react';
import { MessageSquare } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={GYM_CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#00E653] hover:bg-[#00ff5c] text-black rounded-full shadow-[0_0_25px_rgba(0,230,83,0.55)] hover:shadow-[0_0_35px_rgba(0,230,83,0.85)] transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Chat on WhatsApp with FITNESS FIRST"
    >
      <MessageSquare className="w-6 h-6 fill-current text-black" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs uppercase tracking-wider pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
};
