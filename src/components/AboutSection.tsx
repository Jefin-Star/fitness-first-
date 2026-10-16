import React from 'react';
import { MpLogo } from './MpLogo.tsx';
import { Award, Dumbbell, Activity, Users, Shield, CheckCircle2 } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0f0c] relative overflow-hidden border-t border-b border-lime-400/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lime-400 mb-2">
            About Our Gym
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Elevating Fitness in <span className="text-lime-400">Thrissur</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Welcome to <strong className="text-white">FITNESS FIRST FITNESS CENTRE</strong> — where raw athletic passion meets modern biomechanical precision. We foster an inclusive, high-energy environment built for champions, fitness enthusiasts, and beginners alike.
          </p>
        </div>

        {/* Leadership & Credential Spotlight Card */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0f1b13] via-[#0d1711] to-[#080d0a] border border-lime-400/30 shadow-[0_0_35px_rgba(163,230,53,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Logo & Embellishment */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-[#080d0a]/70 rounded-xl border border-lime-400/20">
              <div className="mb-4 flex items-center justify-center">
                <MpLogo className="h-14 w-auto" glow={true} />
              </div>
              <h3 className="font-display font-black text-xl text-white tracking-wider uppercase">
                Team Fitness First
              </h3>
              <p className="text-xs text-lime-400 font-semibold tracking-widest uppercase mt-1">
                Official Athletic Emblem
              </p>
            </div>

            {/* Credential Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-lime-400/10 text-lime-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                State & District Bodybuilding Leadership
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Guided by Proven Bodybuilding Leadership
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                FITNESS FIRST is directed with certified state-level acumen, bringing authentic competitive bodybuilding standards, injury-free lifting techniques, and elite conditioning knowledge right to our members:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-black/40 border border-[#00E653]/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E653] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      District Secretary
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Bodybuilding and Fitness Association of Thrissur (BBFAT)
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-[#00E653]/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E653] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      State Treasurer
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Bodybuilding Association of Kerala (BBAK)
                    </p>
                  </div>
                </div>
              </div>

              {/* Certified Accreditations & Honors */}
              <div className="pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00E653] block mb-2.5">
                  Official Certifications & Competitive Laurels
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 hover:border-[#00E653]/50 transition-colors">
                    <p className="text-xs font-extrabold text-[#FFFFFF] tracking-wider uppercase">CCPFT</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Certified Personal Fitness Trainer</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 hover:border-[#00E653]/50 transition-colors">
                    <p className="text-xs font-extrabold text-[#FFFFFF] tracking-wider uppercase">CCBBC</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Certified Bodybuilding Coach</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 hover:border-[#00E653]/50 transition-colors">
                    <p className="text-xs font-extrabold text-[#FFFFFF] tracking-wider uppercase">Skill India Level 4</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Govt. NSDC Certified</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 hover:border-[#00E653]/50 transition-colors">
                    <p className="text-xs font-extrabold text-[#FFFFFF] tracking-wider uppercase">EREPS Level 4</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">European Register of Exercise Pro</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 hover:border-[#00E653]/50 transition-colors">
                    <p className="text-xs font-extrabold text-[#00E653] tracking-wider uppercase">Junior National Medalist</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">National Bodybuilding Podium</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 hover:border-[#00E653]/50 transition-colors">
                    <p className="text-xs font-extrabold text-[#00E653] tracking-wider uppercase">BBAK State Judge</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Kerala Bodybuilding Judge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Strength Training */}
          <div className="group rounded-2xl bg-[#0e1611] border border-lime-400/20 hover:border-lime-400/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/src/assets/images/gym_strength_training_1792079002410.jpg"
                alt="Strength Training Zone at FITNESS FIRST"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1611] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-md text-lime-400 text-xs font-bold uppercase tracking-wider border border-lime-400/30">
                Strength Arena
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-lime-400 mb-2">
                  <Dumbbell className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Heavy Duty Equipment</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                  Modern Strength & Hypertrophy Arena
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Engineered for progressive overload. Equipped with heavy-duty squat cages, Olympic lifting platforms, calibrated bumper plates, and a comprehensive dumbbell range tailored for beginners and competitive lifters.
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Heavy-duty power racks & bench press stations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Dumbbells from 2.5 kg up to 50 kg
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Isolated selectorized cable towers
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Cardio & Conditioning */}
          <div className="group rounded-2xl bg-[#0e1611] border border-lime-400/20 hover:border-lime-400/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/src/assets/images/regenerated_image_1792130781489.webp"
                alt="Cardio Conditioning Floor at FITNESS FIRST"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1611] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-md text-lime-400 text-xs font-bold uppercase tracking-wider border border-lime-400/30">
                Cardio Suite
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-lime-400 mb-2">
                  <Activity className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Endurance & Fat Burn</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                  High-Performance Cardio & Conditioning
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Maximize stamina, burn fat, and boost cardiovascular health on high-end commercial treadmills, cross-trainers, and spin bikes with luminous ambient fitness lighting.
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Commercial motor-driven incline treadmills
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Low-impact ellipticals & stationary bikes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Targeted heart-rate zone conditioning programs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-[#09100b] border border-lime-400/15 hover:border-lime-400/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-1">Supportive Community</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              A welcoming, encouraging environment where lifters of all levels push each other forward.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#09100b] border border-lime-400/15 hover:border-lime-400/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-1">Elite Mentorship</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Direct access to guidance from Kerala State and Thrissur District bodybuilding authorities.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#09100b] border border-lime-400/15 hover:border-lime-400/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-1">Safe Biomechanics</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Focus on strict form, injury mitigation, and sustainable long-term athletic health.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#09100b] border border-lime-400/15 hover:border-lime-400/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-1">Result-Driven Plans</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Transparent pricing with no hidden charges and massive savings on multi-month passes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
