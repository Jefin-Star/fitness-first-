import React, { useState } from 'react';
import { Activity, Flame, Droplet, Calculator, Sparkles, Heart, Apple, Dumbbell, UserCheck, CheckCircle2 } from 'lucide-react';

export const QuickHealthAndMacroCalculator: React.FC<{ onSelectPlan: (plan: string) => void }> = ({ onSelectPlan }) => {
  // 1. Health & Water Guide State
  const [hwHeightCm, setHwHeightCm] = useState<number>(170);
  const [hwWeightKg, setHwWeightKg] = useState<number>(68);

  const idealMinKg = Math.round(18.5 * Math.pow(hwHeightCm / 100, 2));
  const idealMaxKg = Math.round(24.9 * Math.pow(hwHeightCm / 100, 2));
  const dailyWaterLiters = ((hwWeightKg * 35) / 1000).toFixed(1);

  // 2. Kcal Guide State
  const [kcalAge, setKcalAge] = useState<number>(25);
  const [kcalGender, setKcalGender] = useState<'male' | 'female'>('male');
  const [kcalHeightCm, setKcalHeightCm] = useState<number>(172);
  const [kcalWeightKg, setKcalWeightKg] = useState<number>(70);
  const [activityLevel, setActivityLevel] = useState<number>(1.375);
  const [goalType, setGoalType] = useState<'muscle' | 'recomp' | 'fatloss'>('muscle');

  const bmr = kcalGender === 'male'
    ? (10 * kcalWeightKg) + (6.25 * kcalHeightCm) - (5 * kcalAge) + 5
    : (10 * kcalWeightKg) + (6.25 * kcalHeightCm) - (5 * kcalAge) - 161;

  const tdee = Math.round(bmr * activityLevel);
  let targetKcal = tdee;
  if (goalType === 'fatloss') targetKcal = tdee - 450;
  if (goalType === 'muscle') targetKcal = tdee + 350;

  const macroProteinG = Math.round(kcalWeightKg * 2.0);
  const proteinCalories = macroProteinG * 4;
  const macroFatG = Math.round((targetKcal * 0.27) / 9);
  const fatCalories = macroFatG * 9;
  const remainingCarbCal = Math.max(0, targetKcal - (proteinCalories + fatCalories));
  const macroCarbG = Math.round(remainingCarbCal / 4);

  // 3. Daily Macro Guide Dedicated Interactive State
  const [macroGender, setMacroGender] = useState<'male' | 'female'>('male');
  const [macroAge, setMacroAge] = useState<number>(25);
  const [macroHeightCm, setMacroHeightCm] = useState<number>(172);
  const [macroWeightKg, setMacroWeightKg] = useState<number>(70);
  const [macroGoal, setMacroGoal] = useState<'muscle' | 'recomp' | 'fatloss'>('muscle');
  const [macroActivityMultiplier, setMacroActivityMultiplier] = useState<number>(1.375);

  // Daily Macro Guide dynamic calculations
  const macroBmr = macroGender === 'male'
    ? (10 * macroWeightKg) + (6.25 * macroHeightCm) - (5 * macroAge) + 5
    : (10 * macroWeightKg) + (6.25 * macroHeightCm) - (5 * macroAge) - 161;

  const macroTdee = Math.round(macroBmr * macroActivityMultiplier);
  let dedicatedTargetKcal = macroTdee;
  let proteinRatio = 2.2;

  if (macroGoal === 'muscle') {
    dedicatedTargetKcal = macroTdee + 350;
    proteinRatio = 2.2;
  } else if (macroGoal === 'fatloss') {
    dedicatedTargetKcal = macroTdee - 450;
    proteinRatio = 2.4;
  } else {
    dedicatedTargetKcal = macroTdee;
    proteinRatio = 2.0;
  }

  const dedicatedProteinG = Math.round(macroWeightKg * proteinRatio);
  const dedicatedProteinCal = dedicatedProteinG * 4;
  const dedicatedFatG = Math.round((dedicatedTargetKcal * 0.25) / 9);
  const dedicatedFatCal = dedicatedFatG * 9;
  const dedicatedCarbCal = Math.max(0, dedicatedTargetKcal - (dedicatedProteinCal + dedicatedFatCal));
  const dedicatedCarbG = Math.round(dedicatedCarbCal / 4);

  const proteinPct = Math.round((dedicatedProteinCal / dedicatedTargetKcal) * 100);
  const fatPct = Math.round((dedicatedFatCal / dedicatedTargetKcal) * 100);
  const carbPct = Math.max(0, 100 - (proteinPct + fatPct));

  // Male & Female Session Tab State
  const [activeSessionTab, setActiveSessionTab] = useState<'male' | 'female'>('male');

  return (
    <section id="health-guide" className="py-24 bg-[#080d0a] relative overflow-hidden border-t border-[#00E85B]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#00E85B]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00E85B] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Comprehensive Wellness Tools
          </p>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] tracking-tight uppercase">
            Quick Health & <span className="text-[#00E85B]">Macro Guide</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Designed for both adult men and women. Calculate ideal weight ranges, daily hydration, personalized caloric targets, and specialized training sessions.
          </p>
        </div>

        {/* MALE & FEMALE SESSIONS SPECIALIZED SECTION */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E85B]/40 shadow-[0_0_40px_rgba(0,230,83,0.2)]">
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00E85B]/10 text-[#00E85B] text-xs font-bold uppercase tracking-wider mb-3">
              <UserCheck className="w-4 h-4" />
              <span>Specialized Training & Diet Programs</span>
            </div>
            <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-[#FFFFFF] uppercase text-center">
              Male & Female Training Sessions
            </h3>
            <p className="text-sm text-slate-300 text-center mt-2 max-w-2xl">
              Tailored workout frameworks and nutritional periodization designed specifically for men and women achieving peak physique and fitness.
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex p-1.5 rounded-xl bg-black/60 border border-[#00E85B]/30 mt-6 shadow-lg">
              <button
                onClick={() => setActiveSessionTab('male')}
                className={`px-8 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSessionTab === 'male'
                    ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Male Sessions (Hypertrophy & Strength)
              </button>
              <button
                onClick={() => setActiveSessionTab('female')}
                className={`px-8 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSessionTab === 'female'
                    ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Female Sessions (Toning & Conditioning)
              </button>
            </div>
          </div>

          {/* MALE SESSION CONTENT */}
          {activeSessionTab === 'male' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E85B]/20 text-[#00E85B] flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Heavy Compound Overload</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focus on barbell squats, deadlifts, bench press, and overhead presses. Designed for maximum testosterone response and upper-body muscle density.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> 4–5 Days / Week Split</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Progressive overload tracking</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E85B]/20 text-[#00E85B] flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">High-Protein Hypertrophy Diet</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Targeting 2.0g–2.2g of protein per kg bodyweight. Emphasizing chicken breast, whole eggs, fish, and oats for sustained mass building.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Clean caloric surplus</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Post-workout whey & carbs</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E85B]/20 text-[#00E85B] flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Core & Functional Stamina</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Incorporate weighted abdominal work and cardiovascular conditioning to maintain low body fat while building thick muscle armor.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> 20 min HIIT cardio sessions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Joint mobility & recovery</li>
                </ul>
              </div>
            </div>
          )}

          {/* FEMALE SESSION CONTENT */}
          {activeSessionTab === 'female' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E85B]/20 text-[#00E85B] flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Glute & Core Sculpting</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialized lower-body routines focusing on hip thrusts, romanian deadlifts, lunges, and functional core stabilization for tone and posture.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Glute activation supersets</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Posture & spine health</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E85B]/20 text-[#00E85B] flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Lean Body Recomposition</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Balanced macronutrient distribution emphasizing lean protein (paneer, egg whites, Greek yogurt) and complex carbs for sustained energy.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Sustainable calorie targets</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Healthy fats for hormone balance</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E85B]/20 text-[#00E85B] flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Metabolic & Fat Burn Suite</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Combination of resistance training and treadmill/elliptical conditioning to accelerate fat loss, improve stamina, and tone arms and shoulders.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Circuit training workouts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E85B]" /> Flexibility & yoga stretching</li>
                </ul>
              </div>
            </div>
          )}
        </div>


        {/* TOOL 1: IDEAL WEIGHT, HEIGHT & DAILY WATER GUIDE */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E85B]/35 shadow-[0_0_35px_rgba(0,230,83,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00E85B]/10 text-[#00E85B] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4" />
                <span>Hydration & Weight Range</span>
              </div>
              <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-[#FFFFFF] uppercase">
                Ideal Weight & Water Calculator
              </h3>
              <p className="text-sm text-slate-300">
                Use your height and weight for a general adult healthy-weight range (BMI 18.5 – 24.9) and a daily hydration estimate. The same BMI screening range is used for adult men and women.
              </p>

              <div className="space-y-4 pt-2">
                {/* Height Slider */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                    <span className="uppercase tracking-wider">Height</span>
                    <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">
                      {hwHeightCm} cm
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setHwHeightCm((prev) => Math.max(120, prev - 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Decrease height"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="120"
                      max="225"
                      value={hwHeightCm}
                      onChange={(e) => setHwHeightCm(Number(e.target.value))}
                      className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => setHwHeightCm((prev) => Math.min(225, prev + 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Increase height"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>120 cm</span>
                    <span>170 cm</span>
                    <span>225 cm</span>
                  </div>
                </div>

                {/* Weight Slider */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                    <span className="uppercase tracking-wider">Weight</span>
                    <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">
                      {hwWeightKg} kg
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setHwWeightKg((prev) => Math.max(35, prev - 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Decrease weight"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="35"
                      max="180"
                      value={hwWeightKg}
                      onChange={(e) => setHwWeightKg(Number(e.target.value))}
                      className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => setHwWeightKg((prev) => Math.min(180, prev + 1))}
                      className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Increase weight"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>35 kg</span>
                    <span>68 kg</span>
                    <span>180 kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00E85B] uppercase tracking-wider flex items-center gap-1 mb-2">
                    <Activity className="w-4 h-4" />
                    Healthy Weight Range
                  </span>
                  <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] mt-2">
                    {idealMinKg} kg – {idealMaxKg} kg
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  Based on standard clinical BMI 18.5–24.9 guidelines for adult men and women.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00E85B] uppercase tracking-wider flex items-center gap-1 mb-2">
                    <Droplet className="w-4 h-4" />
                    Daily Water Intake Guide
                  </span>
                  <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] mt-2">
                    ~{dailyWaterLiters} Liters
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  Estimated at ~35ml per kg body weight daily. Increase during intense gym training.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* TOOL 2: QUICK DAILY KCAL GUIDE · MALE & FEMALE */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E85B]/35 shadow-[0_0_35px_rgba(0,230,83,0.15)]">
          <div className="flex items-center gap-2 text-[#00E85B] mb-2">
            <Flame className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Caloric Estimator</span>
          </div>
          <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-[#FFFFFF] uppercase mb-4">
            Quick Daily kcal Guide · Male & Female
          </h3>
          <p className="text-sm text-slate-300 max-w-3xl mb-8">
            Estimate daily calories using age, height, weight, sex and activity level. Choose your goal to get a starting estimate for losing, maintaining or gaining weight.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Inputs */}
            <div className="lg:col-span-7 space-y-4">
              {/* Sex & Training Focus Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Sex</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setKcalGender('male')}
                      className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        kcalGender === 'male' ? 'bg-[#00E85B] text-black font-extrabold shadow-[0_0_15px_rgba(0,230,83,0.3)]' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setKcalGender('female')}
                      className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        kcalGender === 'female' ? 'bg-[#00E85B] text-black font-extrabold shadow-[0_0_15px_rgba(0,230,83,0.3)]' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Training Focus</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setGoalType('muscle')}
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all cursor-pointer text-center ${
                        goalType === 'muscle' ? 'bg-[#00E85B] text-black font-extrabold' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Muscle
                    </button>
                    <button
                      type="button"
                      onClick={() => setGoalType('recomp')}
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all cursor-pointer text-center ${
                        goalType === 'recomp' ? 'bg-[#00E85B] text-black font-extrabold' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Recomp
                    </button>
                    <button
                      type="button"
                      onClick={() => setGoalType('fatloss')}
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all cursor-pointer text-center ${
                        goalType === 'fatloss' ? 'bg-[#00E85B] text-black font-extrabold' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Fat Loss
                    </button>
                  </div>
                </div>

                {/* Activity Level Dropdown */}
                <div className="sm:col-span-2 pt-1">
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Activity Level</label>
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[#00E85B]/30 text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-[#00E85B] cursor-pointer"
                  >
                    <option value={1.2}>Sedentary (little or no exercise)</option>
                    <option value={1.375}>Lightly Active (light exercise 1-3 days/week)</option>
                    <option value={1.55}>Moderately Active (moderate exercise 3-5 days/week)</option>
                    <option value={1.725}>Very Active (hard exercise 6-7 days/week)</option>
                  </select>
                </div>
              </div>

              {/* Age Slider */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">Age (Interactive Slider)</span>
                  <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">{kcalAge} yrs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setKcalAge((prev) => Math.max(15, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Decrease age"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    value={kcalAge}
                    onChange={(e) => setKcalAge(Number(e.target.value))}
                    className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setKcalAge((prev) => Math.min(80, prev + 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Increase age"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>15 yrs</span>
                  <span>25 yrs</span>
                  <span>80 yrs</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">Height (Interactive Slider)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">{kcalHeightCm} cm</span>
                    <span className="text-slate-400 text-[11px] font-mono">({Math.floor(kcalHeightCm / 30.48)}' {Math.round((kcalHeightCm % 30.48) / 2.54)}")</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setKcalHeightCm((prev) => Math.max(120, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Decrease height"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="120"
                    max="225"
                    value={kcalHeightCm}
                    onChange={(e) => setKcalHeightCm(Number(e.target.value))}
                    className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setKcalHeightCm((prev) => Math.min(225, prev + 1))}
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
              <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">Weight (Interactive Slider)</span>
                  <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">{kcalWeightKg} kg</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setKcalWeightKg((prev) => Math.max(35, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Decrease weight"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="35"
                    max="180"
                    value={kcalWeightKg}
                    onChange={(e) => setKcalWeightKg(Number(e.target.value))}
                    className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setKcalWeightKg((prev) => Math.min(180, prev + 1))}
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
            </div>

            {/* Output Display */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-black/60 border border-[#00E85B]/40 text-center">
              <div>
                <span className="text-xs uppercase font-bold text-[#00E85B] tracking-widest block mb-2">
                  Estimated Daily Caloric Target
                </span>
                <div className="font-orbitron font-black text-4xl sm:text-5xl text-[#FFFFFF] my-4">
                  {targetKcal} <span className="text-xl text-[#00E85B]">kcal / day</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-left space-y-1.5 mb-4 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Basal Metabolic Rate (BMR):</span>
                    <span className="font-mono text-white">{Math.round(bmr)} kcal</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Maintenance TDEE:</span>
                    <span className="font-mono text-white">{tdee} kcal</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Goal Adjustment:</span>
                    <span className={`font-mono font-bold ${goalType === 'fatloss' ? 'text-amber-400' : goalType === 'muscle' ? 'text-[#00E85B]' : 'text-slate-300'}`}>
                      {goalType === 'fatloss' ? '-450 kcal (Deficit)' : goalType === 'muscle' ? '+350 kcal (Surplus)' : '±0 kcal (Maintenance)'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {goalType === 'fatloss' && 'Caloric deficit (~450 kcal below maintenance) for steady, sustainable fat loss.'}
                  {goalType === 'recomp' && 'Weight maintenance calories based on your personal activity level.'}
                  {goalType === 'muscle' && 'Caloric surplus (~350 kcal above maintenance) to fuel athletic hypertrophy.'}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => onSelectPlan('1 Year - Gym + Cardio')}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00E85B] hover:bg-[#00ff5c] shadow-[0_0_20px_rgba(0,230,83,0.4)] transition-all cursor-pointer"
                >
                  Join With This Goal
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* TOOL 3: DAILY MACRO GUIDE · MALE & FEMALE */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E85B]/35 shadow-[0_0_35px_rgba(0,230,83,0.15)]">
          <div className="flex items-center gap-2 text-[#00E85B] mb-2">
            <Dumbbell className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Macronutrient Breakdown</span>
          </div>
          <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-[#FFFFFF] uppercase mb-4">
            Daily Macro Guide · Male & Female
          </h3>
          <p className="text-sm text-slate-300 max-w-3xl mb-8">
            Adjust your height, weight, sex, and fitness target using the interactive sliders below to receive customized protein, healthy fats, and carbohydrate gram targets calibrated for your athletic goals.
          </p>

          {/* Interactive Controls Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left: Sliders & Selectors */}
            <div className="lg:col-span-7 space-y-4">
              {/* Sex & Target Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Sex</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMacroGender('male')}
                      className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        macroGender === 'male' ? 'bg-[#00E85B] text-black font-extrabold shadow-[0_0_15px_rgba(0,230,83,0.3)]' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setMacroGender('female')}
                      className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        macroGender === 'female' ? 'bg-[#00E85B] text-black font-extrabold shadow-[0_0_15px_rgba(0,230,83,0.3)]' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Training Focus</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setMacroGoal('muscle')}
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all cursor-pointer text-center ${
                        macroGoal === 'muscle' ? 'bg-[#00E85B] text-black font-extrabold' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Muscle
                    </button>
                    <button
                      type="button"
                      onClick={() => setMacroGoal('recomp')}
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all cursor-pointer text-center ${
                        macroGoal === 'recomp' ? 'bg-[#00E85B] text-black font-extrabold' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Recomp
                    </button>
                    <button
                      type="button"
                      onClick={() => setMacroGoal('fatloss')}
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all cursor-pointer text-center ${
                        macroGoal === 'fatloss' ? 'bg-[#00E85B] text-black font-extrabold' : 'bg-black/50 text-slate-300 border border-white/10'
                      }`}
                    >
                      Fat Loss
                    </button>
                  </div>
                </div>

                {/* Activity Level Dropdown */}
                <div className="sm:col-span-2 pt-1">
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Activity Level</label>
                  <select
                    value={macroActivityMultiplier}
                    onChange={(e) => setMacroActivityMultiplier(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[#00E85B]/30 text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-[#00E85B] cursor-pointer"
                  >
                    <option value={1.2}>Sedentary (little or no exercise)</option>
                    <option value={1.375}>Lightly Active (light exercise 1-3 days/week)</option>
                    <option value={1.55}>Moderately Active (moderate exercise 3-5 days/week)</option>
                    <option value={1.725}>Very Active (hard exercise 6-7 days/week)</option>
                  </select>
                </div>
              </div>

              {/* Age Slider */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">Age (Interactive Slider)</span>
                  <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">{macroAge} yrs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setMacroAge((prev) => Math.max(15, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Decrease age"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    value={macroAge}
                    onChange={(e) => setMacroAge(Number(e.target.value))}
                    className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setMacroAge((prev) => Math.min(80, prev + 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Increase age"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>15 yrs</span>
                  <span>25 yrs</span>
                  <span>80 yrs</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">Height (Interactive Slider)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">{macroHeightCm} cm</span>
                    <span className="text-slate-400 text-[11px] font-mono">({Math.floor(macroHeightCm / 30.48)}' {Math.round((macroHeightCm % 30.48) / 2.54)}")</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setMacroHeightCm((prev) => Math.max(120, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Decrease height"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="120"
                    max="225"
                    value={macroHeightCm}
                    onChange={(e) => setMacroHeightCm(Number(e.target.value))}
                    className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setMacroHeightCm((prev) => Math.min(225, prev + 1))}
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
              <div className="p-3.5 rounded-xl bg-black/40 border border-[#00E85B]/25">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">Weight (Interactive Slider)</span>
                  <span className="text-[#00E85B] font-mono text-sm font-extrabold tabular-nums">{macroWeightKg} kg</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setMacroWeightKg((prev) => Math.max(35, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-black/70 hover:bg-[#00E85B] text-slate-300 hover:text-black border border-white/10 hover:border-[#00E85B] text-xs font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Decrease weight"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="35"
                    max="180"
                    value={macroWeightKg}
                    onChange={(e) => setMacroWeightKg(Number(e.target.value))}
                    className="w-full accent-[#00E85B] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setMacroWeightKg((prev) => Math.min(180, prev + 1))}
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
            </div>

            {/* Right: Macro Distribution & Energy Target */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-black/60 border border-[#00E85B]/35">
              <div>
                <span className="text-xs uppercase font-bold text-[#00E85B] tracking-widest block mb-1">
                  Estimated Caloric Fuel Target
                </span>
                <div className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white my-1">
                  {dedicatedTargetKcal} <span className="text-lg text-[#00E85B]">kcal / day</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Calibrated for {macroWeightKg} kg body weight at {macroGoal === 'muscle' ? 'hypertrophy surplus' : macroGoal === 'fatloss' ? 'deficit for fat reduction' : 'recomposition balance'}.
                </p>
              </div>

              {/* Macro % Visual Bar */}
              <div className="my-5">
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>Macronutrient Ratio</span>
                  <span className="text-[#00E85B] font-mono">{proteinPct}% P · {fatPct}% F · {carbPct}% C</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div style={{ width: `${proteinPct}%` }} className="bg-[#00E85B] transition-all duration-300" title={`Protein: ${proteinPct}%`} />
                  <div style={{ width: `${fatPct}%` }} className="bg-amber-400 transition-all duration-300" title={`Fats: ${fatPct}%`} />
                  <div style={{ width: `${carbPct}%` }} className="bg-sky-400 transition-all duration-300" title={`Carbs: ${carbPct}%`} />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00E85B]" /> Protein</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Fats</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-400" /> Carbs</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-black/40 p-2.5 rounded-lg border border-white/5">
                💡 <span className="text-slate-300 font-semibold">Trainer Note:</span> Drink at least {((macroWeightKg * 35) / 1000).toFixed(1)}L water daily to optimize protein synthesis and glycogen loading.
              </div>
            </div>
          </div>

          {/* Three Macro Output Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-black/50 border border-[#00E85B]/30 text-center hover:border-[#00E85B]/60 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Protein Target (Muscle Synthesis)
              </span>
              <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] my-2">
                {dedicatedProteinG}g
              </div>
              <p className="text-xs text-[#00E85B]">
                {dedicatedProteinCal} kcal ({proteinRatio}g/kg of {macroWeightKg} kg)
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/50 border border-amber-400/30 text-center hover:border-amber-400/60 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Healthy Fats (Hormone Health)
              </span>
              <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] my-2">
                {dedicatedFatG}g
              </div>
              <p className="text-xs text-amber-400">
                {dedicatedFatCal} kcal (~25% total energy)
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/50 border border-sky-400/30 text-center hover:border-sky-400/60 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Carbohydrates (Workout Fuel)
              </span>
              <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] my-2">
                {dedicatedCarbG}g
              </div>
              <p className="text-xs text-sky-400">
                {dedicatedCarbCal} kcal (glycogen replenishment)
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
