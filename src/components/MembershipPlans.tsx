import React, { useState } from 'react';
import { 
  MEMBERSHIP_PLANS, 
  PERSONAL_TRAINING_PLANS, 
  PREMIUM_TRAINING_SESSIONS, 
  PricingPlan 
} from '../data/gymData.ts';
import { Check, Sparkles, ArrowRight, Award, Zap, AlertCircle } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  // Main tab: 'all' | 'gym-only' | 'gym-cardio' | 'personal-training' | 'premium-sessions'
  const [activeCategory, setActiveCategory] = useState<'memberships' | 'personal' | 'premium'>('memberships');
  const [membershipFilter, setMembershipFilter] = useState<'all' | 'gym-only' | 'gym-cardio'>('all');

  const filteredMemberships = MEMBERSHIP_PLANS.filter((plan) => {
    if (membershipFilter === 'all') return true;
    return plan.type === membershipFilter;
  });

  return (
    <section id="plans" className="py-24 bg-[#080d0a] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-lime-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lime-400 mb-2">
            Gym Fees – Team Fitness First
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Membership <span className="text-lime-400">Plans & Pricing</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Transparent pricing with zero hidden fees. Save more with longer-term plans and enjoy admission fee waivers on plans of 3 months or more!
          </p>

          {/* Admission Fee Banner Note */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lime-950/40 border border-lime-400/25 text-slate-200 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-lime-400 shrink-0" />
            <span>
              <strong>Admission Fee Note:</strong> ₹1,000 admission fee applies to 1-month plans only. <strong className="text-lime-400">NO admission fee</strong> applies to plans of 3 months or longer.
            </span>
          </div>
        </div>

        {/* Primary Category Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-[#0e1711] border border-lime-400/20 shadow-lg">
            <button
              onClick={() => setActiveCategory('memberships')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'memberships'
                  ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              General Memberships
            </button>
            <button
              onClick={() => setActiveCategory('personal')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'personal'
                  ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Personal Training
            </button>
            <button
              onClick={() => setActiveCategory('premium')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'premium'
                  ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Premium Sessions
            </button>
          </div>
        </div>

        {/* Tab 1: General Memberships */}
        {activeCategory === 'memberships' && (
          <div>
            {/* Sub-filter: All / Gym Only / Gym + Cardio */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-xs text-slate-400 uppercase font-semibold mr-2">Filter By:</span>
              <button
                onClick={() => setMembershipFilter('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                  membershipFilter === 'all'
                    ? 'bg-lime-400/20 text-lime-300 border border-lime-400/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Options ({MEMBERSHIP_PLANS.length})
              </button>
              <button
                onClick={() => setMembershipFilter('gym-only')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                  membershipFilter === 'gym-only'
                    ? 'bg-lime-400/20 text-lime-300 border border-lime-400/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Gym Only
              </button>
              <button
                onClick={() => setMembershipFilter('gym-cardio')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                  membershipFilter === 'gym-cardio'
                    ? 'bg-lime-400/20 text-lime-300 border border-lime-400/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Gym + Cardio
              </button>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {filteredMemberships.map((plan) => {
                const isOneMonth = plan.duration === '1 Month';
                const isYearly = plan.duration === '1 Year';
                return (
                  <div
                    key={plan.id}
                    className={`rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 relative ${
                      isYearly
                        ? 'bg-gradient-to-b from-[#132217] to-[#0c1510] border-2 border-lime-400 shadow-[0_0_35px_rgba(163,230,53,0.25)]'
                        : 'bg-[#0d1610] border border-lime-400/20 hover:border-lime-400/50 shadow-md'
                    }`}
                  >
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                        {plan.duration}
                      </span>
                      {plan.savings && plan.savings > 0 && (
                        <span className="text-[11px] font-bold text-lime-300 bg-lime-950/80 border border-lime-400/40 px-2 py-0.5 rounded">
                          Save ₹{plan.savings.toLocaleString('en-IN')}
                        </span>
                      )}
                      {isYearly && (
                        <span className="text-[11px] font-black uppercase text-black bg-lime-400 px-2 py-0.5 rounded shadow-sm">
                          Best Value
                        </span>
                      )}
                    </div>

                    {/* Plan Title & Type */}
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-white">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {plan.description}
                      </p>

                      {/* Pricing block */}
                      <div className="mt-6 mb-6 p-4 rounded-xl bg-black/40 border border-lime-400/15">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-display font-black text-white tabular-nums">
                            ₹{plan.totalPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-400">
                            total
                          </span>
                        </div>

                        {/* Breakdown */}
                        {isOneMonth ? (
                          <div className="mt-2 text-xs text-slate-300">
                            <span>Base: ₹{plan.basePrice}</span>
                            <span className="text-lime-400"> + ₹{plan.admissionFee} admission</span>
                          </div>
                        ) : (
                          <div className="mt-2 space-y-1">
                            {plan.monthlyEquivalent && (
                              <p className="text-xs text-lime-400 font-semibold">
                                Just ₹{plan.monthlyEquivalent}/month
                              </p>
                            )}
                            <p className="text-[11px] text-emerald-400 font-medium">
                              ✓ Zero Admission Fee
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                        {plan.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Join CTA */}
                    <button
                      onClick={() => onSelectPlan(plan.name)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isYearly
                          ? 'bg-[#00E85B] hover:bg-[#00ff5c] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
                          : 'bg-lime-950/60 hover:bg-lime-900/60 text-lime-300 border border-lime-400/30 hover:border-lime-400'
                      }`}
                    >
                      <span>Join Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Personal Training */}
        {activeCategory === 'personal' && (
          <div id="coaching" className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                1-on-1 Dedicated Personal Coaching
              </h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
                Fast-track your transformation with personalized hypertrophy, fat-loss, and strength programs customized to your genetics and schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PERSONAL_TRAINING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative ${
                    plan.isSpecialOffer
                      ? 'bg-gradient-to-br from-[#122316] via-[#0d1811] to-[#080d0a] border-2 border-lime-400 shadow-[0_0_35px_rgba(163,230,53,0.3)]'
                      : 'bg-[#0d1610] border border-lime-400/20 shadow-lg'
                  }`}
                >
                  {plan.badge && (
                    <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-md bg-lime-400/20 text-lime-300 text-xs font-bold uppercase mb-4 border border-lime-400/30">
                      <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      {plan.name}
                    </h3>

                    {/* Price with strikethrough for special offer */}
                    <div className="mt-5 mb-6 p-4 rounded-xl bg-black/40 border border-lime-400/15">
                      {plan.isSpecialOffer ? (
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-lg line-through text-slate-500 font-semibold tabular-nums">
                              ₹{plan.originalPrice.toLocaleString('en-IN')}
                            </span>
                            <span className="text-3xl font-display font-black text-lime-400 tabular-nums">
                              ₹{plan.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <p className="text-xs text-lime-300 font-bold mt-1">
                            Special Offer: Save ₹{plan.savings.toLocaleString('en-IN')} on 3 Months
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-display font-black text-white tabular-nums">
                            ₹{plan.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-400">/ month</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#00E85B] hover:bg-[#00ff5c] transition-all shadow-[0_0_20px_rgba(0,230,83,0.45)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Personal Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Premium Training Sessions */}
        {activeCategory === 'premium' && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Leadership Credential Callout */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d1b11] via-[#0f2214] to-[#0a140d] border border-lime-400/40 shadow-[0_0_35px_rgba(163,230,53,0.2)]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/20 text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/40 shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-center md:text-left space-y-2">
                  <div className="inline-block px-3 py-1 rounded bg-[#00E85B]/10 text-[#00E85B] text-xs font-bold uppercase tracking-wider">
                    Official Executive Leadership & Certifications
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Premium Training Sessions Conducted Under Association Leadership
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Direct mentorship by BBFAT District Secretary & BBAK State Treasurer with verified national credentials:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start text-xs font-semibold">
                    <span className="px-3 py-1 rounded bg-black/50 border border-[#00E85B]/30 text-white font-bold">
                      CCPFT
                    </span>
                    <span className="px-3 py-1 rounded bg-black/50 border border-[#00E85B]/30 text-white font-bold">
                      CCBBC
                    </span>
                    <span className="px-3 py-1 rounded bg-black/50 border border-[#00E85B]/30 text-white">
                      Skill India Level 4
                    </span>
                    <span className="px-3 py-1 rounded bg-black/50 border border-[#00E85B]/30 text-white">
                      EREPS Level 4
                    </span>
                    <span className="px-3 py-1 rounded bg-black/50 border border-[#00E85B]/30 text-[#00E85B] font-bold">
                      Junior National Medalist
                    </span>
                    <span className="px-3 py-1 rounded bg-black/50 border border-[#00E85B]/30 text-[#00E85B] font-bold">
                      BBAK State Judge
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start text-xs text-slate-300">
                    <span className="px-3 py-1 rounded bg-black/30 border border-white/10">
                      District Secretary — BBFAT
                    </span>
                    <span className="px-3 py-1 rounded bg-black/30 border border-white/10">
                      State Treasurer — BBAK
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Session Packs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PREMIUM_TRAINING_SESSIONS.map((pack) => (
                <div
                  key={pack.id}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                    pack.popular
                      ? 'bg-gradient-to-b from-[#132217] to-[#0c1510] border-2 border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.25)]'
                      : 'bg-[#0d1610] border border-lime-400/20 hover:border-lime-400/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase text-lime-400 tracking-wider">
                        {pack.sessions} Sessions
                      </span>
                      {pack.popular && (
                        <span className="text-[11px] font-black uppercase text-black bg-lime-400 px-2 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-white">
                      {pack.name}
                    </h3>

                    {/* Price Block */}
                    <div className="mt-4 mb-6 p-4 rounded-xl bg-black/40 border border-lime-400/15">
                      <div className="text-3xl font-display font-black text-white tabular-nums">
                        ₹{pack.price.toLocaleString('en-IN')}
                      </div>
                      <p className="text-xs text-lime-400 font-semibold mt-1">
                        ₹{pack.perSession} / session
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                      {pack.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(pack.name)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#00E85B] hover:bg-[#00ff5c] transition-all shadow-[0_0_20px_rgba(0,230,83,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
