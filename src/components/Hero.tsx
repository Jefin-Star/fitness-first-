import React from 'react';
import { ArrowRight, ChevronDown, Award, Clock, Flame, ShieldCheck } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';
import heroGymImg from '../assets/images/hero_gym_fitness_first_1792079001560.jpg';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080d0a] pt-12 pb-20">
      {/* Background Image with Luminous Green Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGymImg}
          alt="TEAM FITNESS FIRST interior"
          className="w-full h-full object-cover object-center opacity-45 brightness-95"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrims and glowing gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d0a] via-[#080d0a]/75 to-[#080d0a]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d0a] via-transparent to-[#080d0a]/80" />
        
        {/* Ambient Luminous Green Light Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00E85B]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00E85B]/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">


        {/* Primary Gym Name - Clean without glow */}
        <h1 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase max-w-4xl [text-shadow:none]">
          <div className="h-1.5 w-16 bg-[#00E85B] mb-4" />
          <span className="text-white [text-shadow:none]">TEAM</span> <br />
          <span className="text-[#00E85B] [text-shadow:none]">
            FITNESS FIRST
          </span>
          <div className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.2em] text-white/90 mt-4 uppercase">
            FITNESS CENTER | AMALA NAGAR, THRISSUR
          </div>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E85B]/15 border border-[#00E85B]/50 text-[#00E85B] text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-[0_0_15px_rgba(0,232,91,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00E85B]" />
            Unisex & Family Gym
          </div>
        </h1>

        {/* Powerful Fitness Tagline - Clean and Non-Glowing */}
        <p className="font-orbitron mt-6 text-base sm:text-xl md:text-2xl font-bold tracking-wider max-w-3xl text-balance [text-shadow:none]">
          <span className="text-white [text-shadow:none]">Build Your Strength. </span>
          <span className="text-[#00E85B] [text-shadow:none]">Transform Your Life.</span>
        </p>

        {/* Subtitle / Value Proposition */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#E0E0E0] max-w-2xl text-balance font-normal leading-relaxed">
          Professional training, strength equipment, cardio fitness and expert guidance for a healthier, stronger and more confident you.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-8 py-4 text-sm md:text-base font-extrabold uppercase tracking-wider text-black bg-[#00E85B] hover:bg-[#00ff5c] rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={onViewPlansClick}
            className="w-full sm:w-auto px-8 py-4 text-sm md:text-base font-bold uppercase tracking-wider text-[#FFFFFF] hover:text-[#00E85B] bg-black/60 hover:bg-black/80 border border-[#00E85B]/50 hover:border-[#00E85B] rounded-xl transition-all backdrop-blur-md shadow-[0_0_20px_rgba(0,230,83,0.25)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Membership Plans</span>
          </button>
        </div>

        {/* Highlights Row */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl text-left">
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d1610]/80 border border-lime-400/15 backdrop-blur-md">
            <div className="flex items-center gap-2 text-lime-400 mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Training</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">Strength & Cardio</p>
            <p className="text-xs text-slate-400 mt-0.5">Heavy weights & conditioning</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d1610]/80 border border-lime-400/15 backdrop-blur-md">
            <div className="flex items-center gap-2 text-lime-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Leadership</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">State & District</p>
            <p className="text-xs text-slate-400 mt-0.5">BBFAT & BBAK verified</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d1610]/80 border border-lime-400/15 backdrop-blur-md">
            <div className="flex items-center gap-2 text-lime-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Hours</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">6:00 AM – 9:30 PM</p>
            <p className="text-xs text-slate-400 mt-0.5">Mon to Sat (Sun Closed)</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d1610]/80 border border-lime-400/15 backdrop-blur-md">
            <div className="flex items-center gap-2 text-lime-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Value</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">From ₹583 / mo</p>
            <p className="text-xs text-slate-400 mt-0.5">No admission fee on 3M+</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-slate-500 animate-bounce">
          <ChevronDown className="w-5 h-5 mx-auto" />
        </div>
      </div>
    </section>
  );
};
