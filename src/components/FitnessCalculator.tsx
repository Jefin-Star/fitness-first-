import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, Flame, ShieldAlert, Sparkles } from 'lucide-react';

interface FitnessCalculatorProps {
  onSelectPlan: (planName: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onSelectPlan }) => {
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(70);
  const [goal, setGoal] = useState<'muscle' | 'fatloss' | 'endurance'>('muscle');

  // Compute BMI
  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? parseFloat((weightKg / (heightM * heightM)).toFixed(1)) : 0;

  let bmiCategory = '';
  let categoryColor = 'text-lime-400';
  let recommendedPlan = '1 Year - Gym + Cardio';

  if (bmi < 18.5) {
    bmiCategory = 'Underweight (Hypertrophy Bulking recommended)';
    categoryColor = 'text-yellow-400';
    recommendedPlan = '3 Months - Gym Only';
  } else if (bmi < 24.9) {
    bmiCategory = 'Optimal Athletic Range (Progressive Overload)';
    categoryColor = 'text-lime-400';
    recommendedPlan = goal === 'fatloss' ? '6 Months - Gym + Cardio' : '1 Year - Gym Only';
  } else if (bmi < 29.9) {
    bmiCategory = 'Overweight (Cardio + Strength Recomposition)';
    categoryColor = 'text-amber-400';
    recommendedPlan = '3 Months - Gym + Cardio';
  } else {
    bmiCategory = 'High Body Mass (Structured Coaching Recommended)';
    categoryColor = 'text-orange-400';
    recommendedPlan = 'Personal Training - 3 Months (Special Offer)';
  }

  // Target daily protein estimation (1.6 - 2.0 g/kg)
  const minProtein = Math.round(weightKg * 1.6);
  const maxProtein = Math.round(weightKg * 2.0);

  return (
    <section className="py-20 bg-[#090f0c] relative overflow-hidden border-t border-lime-400/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1b12] to-[#0a120d] border border-lime-400/30 shadow-[0_0_35px_rgba(163,230,53,0.15)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Inputs */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2 text-lime-400">
                <Calculator className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Fitness Assessment</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
                Find Your Ideal <span className="text-lime-400">Plan & Target</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300">
                Adjust your stats below to calculate your current body mass index and receive a personalized program recommendation.
              </p>

              <div className="space-y-5">
                {/* Height Slider */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/20">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                    <span className="uppercase tracking-wider">Height</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">
                        {heightCm} cm
                      </span>
                      <span className="text-slate-400 text-[11px] font-mono">
                        ({Math.floor(heightCm / 30.48)}' {Math.round((heightCm % 30.48) / 2.54)}")
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setHeightCm((prev) => Math.max(120, prev - 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Decrease height"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="120"
                      max="225"
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => setHeightCm((prev) => Math.min(225, prev + 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Increase height"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>120 cm</span>
                    <span>172 cm</span>
                    <span>225 cm</span>
                  </div>
                </div>

                {/* Weight Slider */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/20">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                    <span className="uppercase tracking-wider">Current Weight</span>
                    <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">
                      {weightKg} kg
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setWeightKg((prev) => Math.max(35, prev - 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Decrease weight"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="35"
                      max="180"
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => setWeightKg((prev) => Math.min(180, prev + 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Increase weight"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>35 kg</span>
                    <span>70 kg</span>
                    <span>180 kg</span>
                  </div>
                </div>

                {/* Primary Objective */}
                <div>
                  <span className="block text-xs font-bold text-slate-300 mb-2">Primary Objective</span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setGoal('muscle')}
                      className={`p-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        goal === 'muscle'
                          ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                          : 'bg-black/50 text-slate-300 border border-lime-400/20'
                      }`}
                    >
                      Muscle Gain
                    </button>
                    <button
                      type="button"
                      onClick={() => setGoal('fatloss')}
                      className={`p-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        goal === 'fatloss'
                          ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                          : 'bg-black/50 text-slate-300 border border-lime-400/20'
                      }`}
                    >
                      Fat Loss
                    </button>
                    <button
                      type="button"
                      onClick={() => setGoal('endurance')}
                      className={`p-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        goal === 'endurance'
                          ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                          : 'bg-black/50 text-slate-300 border border-lime-400/20'
                      }`}
                    >
                      Endurance
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results Card */}
            <div className="w-full lg:w-1/2 p-6 rounded-xl bg-black/60 border border-lime-400/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-lime-400/15">
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">Calculated BMI</span>
                    <span className="font-display font-black text-4xl text-white tabular-nums">
                      {bmi}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase font-bold text-slate-400 block">Status</span>
                    <span className={`text-xs sm:text-sm font-bold ${categoryColor}`}>
                      {bmiCategory}
                    </span>
                  </div>
                </div>

                {/* Target Nutrition Suggestion */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-[#0e1811] border border-lime-400/15">
                    <div className="flex items-center gap-1.5 text-lime-400 text-xs font-bold uppercase mb-1">
                      <Flame className="w-3.5 h-3.5" />
                      Protein Target
                    </div>
                    <p className="text-base font-black text-white font-mono tabular-nums">
                      {minProtein} - {maxProtein}g
                    </p>
                    <p className="text-[11px] text-slate-400">per day for recovery</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0e1811] border border-lime-400/15">
                    <div className="flex items-center gap-1.5 text-lime-400 text-xs font-bold uppercase mb-1">
                      <Activity className="w-3.5 h-3.5" />
                      Workout Split
                    </div>
                    <p className="text-base font-black text-white font-mono">
                      4 - 5 Days
                    </p>
                    <p className="text-[11px] text-slate-400">per week optimal</p>
                  </div>
                </div>

                {/* Recommended Plan */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-lime-950/60 to-[#0e1b12] border border-lime-400/40 mb-6">
                  <span className="text-[11px] uppercase font-bold text-lime-400 tracking-wider flex items-center gap-1 mb-1">
                    <Sparkles className="w-3 h-3" />
                    Recommended Plan For You:
                  </span>
                  <p className="font-display font-extrabold text-lg text-white">
                    {recommendedPlan}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPlan(recommendedPlan)}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#00E85B] hover:bg-[#00ff5c] transition-all shadow-[0_0_20px_rgba(0,230,83,0.45)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Recommended Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
