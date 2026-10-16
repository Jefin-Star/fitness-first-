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
  const [goalType, setGoalType] = useState<'lose' | 'maintain' | 'gain'>('maintain');

  const bmr = kcalGender === 'male'
    ? (10 * kcalWeightKg) + (6.25 * kcalHeightCm) - (5 * kcalAge) + 5
    : (10 * kcalWeightKg) + (6.25 * kcalHeightCm) - (5 * kcalAge) - 161;

  const tdee = Math.round(bmr * activityLevel);
  let targetKcal = tdee;
  if (goalType === 'lose') targetKcal = tdee - 400;
  if (goalType === 'gain') targetKcal = tdee + 350;

  const macroProteinG = Math.round(kcalWeightKg * 2.0);
  const proteinCalories = macroProteinG * 4;
  const macroFatG = Math.round((targetKcal * 0.27) / 9);
  const fatCalories = macroFatG * 9;
  const remainingCarbCal = Math.max(0, targetKcal - (proteinCalories + fatCalories));
  const macroCarbG = Math.round(remainingCarbCal / 4);

  // Male & Female Session Tab State
  const [activeSessionTab, setActiveSessionTab] = useState<'male' | 'female'>('male');

  return (
    <section id="health-guide" className="py-24 bg-[#080d0a] relative overflow-hidden border-t border-[#00E653]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#00E653]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00E653] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Comprehensive Wellness Tools
          </p>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] tracking-tight uppercase">
            Quick Health & <span className="text-[#00E653]">Macro Guide</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Designed for both adult men and women. Calculate ideal weight ranges, daily hydration, personalized caloric targets, and specialized training sessions.
          </p>
        </div>

        {/* MALE & FEMALE SESSIONS SPECIALIZED SECTION */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E653]/40 shadow-[0_0_40px_rgba(0,230,83,0.2)]">
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00E653]/10 text-[#00E653] text-xs font-bold uppercase tracking-wider mb-3">
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
            <div className="inline-flex p-1.5 rounded-xl bg-black/60 border border-[#00E653]/30 mt-6 shadow-lg">
              <button
                onClick={() => setActiveSessionTab('male')}
                className={`px-8 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSessionTab === 'male'
                    ? 'bg-[#00E653] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Male Sessions (Hypertrophy & Strength)
              </button>
              <button
                onClick={() => setActiveSessionTab('female')}
                className={`px-8 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSessionTab === 'female'
                    ? 'bg-[#00E653] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
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
              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E653]/20 text-[#00E653] flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Heavy Compound Overload</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focus on barbell squats, deadlifts, bench press, and overhead presses. Designed for maximum testosterone response and upper-body muscle density.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> 4–5 Days / Week Split</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Progressive overload tracking</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E653]/20 text-[#00E653] flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">High-Protein Hypertrophy Diet</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Targeting 2.0g–2.2g of protein per kg bodyweight. Emphasizing chicken breast, whole eggs, fish, and oats for sustained mass building.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Clean caloric surplus</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Post-workout whey & carbs</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E653]/20 text-[#00E653] flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Core & Functional Stamina</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Incorporate weighted abdominal work and cardiovascular conditioning to maintain low body fat while building thick muscle armor.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> 20 min HIIT cardio sessions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Joint mobility & recovery</li>
                </ul>
              </div>
            </div>
          )}

          {/* FEMALE SESSION CONTENT */}
          {activeSessionTab === 'female' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E653]/20 text-[#00E653] flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Glute & Core Sculpting</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialized lower-body routines focusing on hip thrusts, romanian deadlifts, lunges, and functional core stabilization for tone and posture.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Glute activation supersets</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Posture & spine health</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E653]/20 text-[#00E653] flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Lean Body Recomposition</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Balanced macronutrient distribution emphasizing lean protein (paneer, egg whites, Greek yogurt) and complex carbs for sustained energy.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Sustainable calorie targets</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Healthy fats for hormone balance</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#00E653]/20 text-[#00E653] flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-orbitron font-bold text-lg text-[#FFFFFF]">Metabolic & Fat Burn Suite</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Combination of resistance training and treadmill/elliptical conditioning to accelerate fat loss, improve stamina, and tone arms and shoulders.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Circuit training workouts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#00E653]" /> Flexibility & yoga stretching</li>
                </ul>
              </div>
            </div>
          )}
        </div>


        {/* TOOL 1: IDEAL WEIGHT, HEIGHT & DAILY WATER GUIDE */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E653]/35 shadow-[0_0_35px_rgba(0,230,83,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00E653]/10 text-[#00E653] text-xs font-bold uppercase tracking-wider">
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
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                    <span>Height:</span>
                    <span className="text-[#00E653] font-mono">{hwHeightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={hwHeightCm}
                    onChange={(e) => setHwHeightCm(Number(e.target.value))}
                    className="w-full accent-[#00E653] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                    <span>Weight:</span>
                    <span className="text-[#00E653] font-mono">{hwWeightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={hwWeightKg}
                    onChange={(e) => setHwWeightKg(Number(e.target.value))}
                    className="w-full accent-[#00E653] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00E653] uppercase tracking-wider flex items-center gap-1 mb-2">
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

              <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00E653] uppercase tracking-wider flex items-center gap-1 mb-2">
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
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E653]/35 shadow-[0_0_35px_rgba(0,230,83,0.15)]">
          <div className="flex items-center gap-2 text-[#00E653] mb-2">
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
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Sex</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setKcalGender('male')}
                    className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      kcalGender === 'male' ? 'bg-[#00E653] text-black' : 'bg-black/50 text-slate-300 border border-white/10'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setKcalGender('female')}
                    className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      kcalGender === 'female' ? 'bg-[#00E653] text-black' : 'bg-black/50 text-slate-300 border border-white/10'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Age ({kcalAge} yrs)</label>
                <input
                  type="number"
                  value={kcalAge}
                  onChange={(e) => setKcalAge(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[#00E653]/30 text-white text-sm focus:outline-none focus:border-[#00E653]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Height ({kcalHeightCm} cm)</label>
                <input
                  type="number"
                  value={kcalHeightCm}
                  onChange={(e) => setKcalHeightCm(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[#00E653]/30 text-white text-sm focus:outline-none focus:border-[#00E653]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Weight ({kcalWeightKg} kg)</label>
                <input
                  type="number"
                  value={kcalWeightKg}
                  onChange={(e) => setKcalWeightKg(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[#00E653]/30 text-white text-sm focus:outline-none focus:border-[#00E653]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Activity Level</label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-[#00E653]/30 text-white text-sm focus:outline-none focus:border-[#00E653]"
                >
                  <option value={1.2}>Sedentary (little or no exercise)</option>
                  <option value={1.375}>Lightly Active (light exercise 1-3 days/week)</option>
                  <option value={1.55}>Moderately Active (moderate exercise 3-5 days/week)</option>
                  <option value={1.725}>Very Active (hard exercise 6-7 days/week)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Fitness Goal</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoalType('lose')}
                    className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      goalType === 'lose' ? 'bg-[#00E653] text-black' : 'bg-black/50 text-slate-300 border border-white/10'
                    }`}
                  >
                    Fat Loss
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoalType('maintain')}
                    className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      goalType === 'maintain' ? 'bg-[#00E653] text-black' : 'bg-black/50 text-slate-300 border border-white/10'
                    }`}
                  >
                    Maintain
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoalType('gain')}
                    className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      goalType === 'gain' ? 'bg-[#00E653] text-black' : 'bg-black/50 text-slate-300 border border-white/10'
                    }`}
                  >
                    Muscle Gain
                  </button>
                </div>
              </div>
            </div>

            {/* Output Display */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-black/60 border border-[#00E653]/40 text-center">
              <div>
                <span className="text-xs uppercase font-bold text-[#00E653] tracking-widest block mb-2">
                  Estimated Daily Target
                </span>
                <div className="font-orbitron font-black text-4xl sm:text-5xl text-[#FFFFFF] my-4">
                  {targetKcal} <span className="text-xl text-[#00E653]">kcal / day</span>
                </div>
                <p className="text-xs text-slate-300">
                  {goalType === 'lose' && 'Caloric deficit (~400 kcal below maintenance) for steady fat loss.'}
                  {goalType === 'maintain' && 'Weight maintenance calories based on your daily activity.'}
                  {goalType === 'gain' && 'Caloric surplus (~350 kcal above maintenance) to fuel hypertrophy.'}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => onSelectPlan('1 Year - Gym + Cardio')}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00E653] hover:bg-[#00ff5c] shadow-[0_0_20px_rgba(0,230,83,0.4)] transition-all cursor-pointer"
                >
                  Join With This Goal
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* TOOL 3: DAILY MACRO GUIDE · MALE & FEMALE */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1711] to-[#09110d] border border-[#00E653]/35 shadow-[0_0_35px_rgba(0,230,83,0.15)]">
          <div className="flex items-center gap-2 text-[#00E653] mb-2">
            <Dumbbell className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Macronutrient Breakdown</span>
          </div>
          <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-[#FFFFFF] uppercase mb-4">
            Daily Macro Guide · Male & Female
          </h3>
          <p className="text-sm text-slate-300 max-w-3xl mb-8">
            Enter sex, body weight and estimated daily calories for a general daily guide. Protein and carbohydrate ranges are based on body weight; fat grams are estimated from 20–35% of daily calories. These broad training ranges are the same starting point for adult men and women; individual needs vary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Protein Target (Muscle Repair)
              </span>
              <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] my-2">
                {macroProteinG}g
              </div>
              <p className="text-xs text-[#00E653]">~2.0g per kg body weight ({kcalWeightKg} kg)</p>
            </div>

            <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Healthy Fats (Hormones)
              </span>
              <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] my-2">
                {macroFatG}g
              </div>
              <p className="text-xs text-[#00E653]">~27% of daily target ({targetKcal} kcal)</p>
            </div>

            <div className="p-6 rounded-xl bg-black/50 border border-[#00E653]/30 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Carbohydrates (Training Fuel)
              </span>
              <div className="font-orbitron font-extrabold text-3xl text-[#FFFFFF] my-2">
                {macroCarbG}g
              </div>
              <p className="text-xs text-[#00E653]">Remaining daily energy calories</p>
            </div>
          </div>
        </div>


        {/* TOOL 4: NUTRITION BASICS (Protein, Carbs & Fats Health Tips) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#09110d] border border-white/10">
          <div className="flex items-center gap-2 text-[#00E653] mb-2">
            <Apple className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Nutrition Basics</span>
          </div>
          <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-[#FFFFFF] uppercase mb-4">
            Health Tips: Protein, Carbs & Fats
          </h3>
          <p className="text-sm text-slate-300 mb-8">
            Build a balanced diet to support training, recovery and everyday health. Your needs depend on body weight, activity, goals and total calories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300 text-sm">
            <div className="p-6 rounded-xl bg-black/40 border border-[#00E653]/20 space-y-2">
              <h4 className="font-orbitron font-bold text-[#FFFFFF] text-base">1. Proteins</h4>
              <p className="text-xs leading-relaxed text-slate-300">
                Essential amino acids for muscle tissue repair, immune defense, and enzyme creation. Prioritize chicken breast, egg whites, fish, paneer, and whey protein.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-[#00E653]/20 space-y-2">
              <h4 className="font-orbitron font-bold text-[#FFFFFF] text-base">2. Carbohydrates</h4>
              <p className="text-xs leading-relaxed text-slate-300">
                Primary fuel source for high-intensity lifting and explosive athletic performance. Choose complex options like oats, sweet potato, brown rice, and quinoa.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-[#00E653]/20 space-y-2">
              <h4 className="font-orbitron font-bold text-[#FFFFFF] text-base">3. Healthy Fats</h4>
              <p className="text-xs leading-relaxed text-slate-300">
                Critical for testosterone regulation, joint lubrication, and hormone synthesis. Include almonds, walnuts, flax seeds, chia seeds, and extra virgin olive oil.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
