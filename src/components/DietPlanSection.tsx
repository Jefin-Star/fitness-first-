import React, { useState } from 'react';
import { Apple, Beef, Droplet, Sparkles, CheckCircle2 } from 'lucide-react';

interface FoodItem {
  name: string;
  serving: string;
  amount: string;
  isBest?: boolean;
}

export const DietPlanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'carbs' | 'protein' | 'fats'>('carbs');

  const carbItems: FoodItem[] = [
    { name: 'Oats', serving: '100g', amount: '66g carbs', isBest: true },
    { name: 'White Rice', serving: '100g', amount: '28g carbs', isBest: true },
    { name: 'Brown Rice', serving: '100g', amount: '23g carbs', isBest: true },
    { name: 'Sweet Potato', serving: '100g', amount: '20g carbs', isBest: true },
    { name: 'Potato', serving: '100g', amount: '17g carbs' },
    { name: 'Banana', serving: '1 medium', amount: '27g carbs' },
    { name: 'Apple', serving: '1 medium', amount: '25g carbs', isBest: true },
    { name: 'Papaya', serving: '100g', amount: '11g carbs', isBest: true },
    { name: 'Berries', serving: '100g', amount: '12g carbs' },
    { name: 'Whole Wheat Bread', serving: '2 slices', amount: '24g carbs' },
    { name: 'Chapati', serving: '1 medium', amount: '18g carbs' },
    { name: 'Quinoa', serving: '100g', amount: '21g carbs', isBest: true },
    { name: 'Corn', serving: '100g', amount: '19g carbs' },
    { name: 'Ragi', serving: '100g', amount: '72g carbs' },
    { name: 'Idli', serving: '1 piece', amount: '15g carbs' },
    { name: 'Dosa', serving: '1 medium', amount: '30g carbs' },
    { name: 'Dates', serving: '100g', amount: '75g carbs' },
    { name: 'Chickpeas', serving: '100g', amount: '27g carbs' },
    { name: 'Lentils', serving: '100g', amount: '20g carbs' },
    { name: 'Kidney Beans', serving: '100g', amount: '22g carbs' },
  ];

  const proteinItems: FoodItem[] = [
    { name: 'Chicken Breast', serving: '100g', amount: '31g protein', isBest: true },
    { name: 'Whole Egg', serving: '1 egg', amount: '6g protein' },
    { name: 'Egg White', serving: '1 white', amount: '3.6g protein', isBest: true },
    { name: 'Fish', serving: '100g', amount: '20–25g protein', isBest: true },
    { name: 'Paneer', serving: '100g', amount: '18–20g protein' },
    { name: 'Soy Chunks', serving: '100g', amount: '52g protein', isBest: true },
    { name: 'Greek Yogurt', serving: '100g', amount: '10g protein', isBest: true },
    { name: 'Whey Protein', serving: '1 scoop (30g)', amount: '24–25g protein', isBest: true },
    { name: 'Turkey Breast', serving: '100g', amount: '29g protein' },
    { name: 'Lean Beef', serving: '100g', amount: '26g protein' },
    { name: 'Prawns', serving: '100g', amount: '24g protein' },
    { name: 'Tofu', serving: '100g', amount: '8–10g protein' },
    { name: 'Milk', serving: '250ml', amount: '8g protein' },
    { name: 'Cottage Cheese', serving: '100g', amount: '11–12g protein' },
  ];

  const fatItems: FoodItem[] = [
    { name: 'Almonds', serving: '30g', amount: '15g fat', isBest: true },
    { name: 'Walnuts', serving: '30g', amount: '20g fat', isBest: true },
    { name: 'Flax Seeds', serving: '30g', amount: '13g fat', isBest: true },
    { name: 'Chia Seeds', serving: '30g', amount: '9g fat', isBest: true },
    { name: 'Olive Oil', serving: '1 tbsp (15ml)', amount: '14g fat', isBest: true },
    { name: 'Peanut Butter', serving: '2 tbsp', amount: '16g fat' },
    { name: 'Avocado', serving: '100g', amount: '15g fat', isBest: true },
    { name: 'Cashews', serving: '30g', amount: '13g fat' },
    { name: 'Pumpkin Seeds', serving: '30g', amount: '14g fat' },
  ];

  return (
    <section id="diet-plan" className="py-24 bg-[#080d0a] relative overflow-hidden border-t border-[#00E85B]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00E85B]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00E85B] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Nutrition & Macronutrient Guide
          </p>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] tracking-tight uppercase">
            Professional <span className="text-[#00E85B]">Diet Plan</span> Sources
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Fuel your hypertrophy, fat loss, and muscle recovery with high-quality carbohydrate, lean protein, and healthy fat sources recommended by Team Fitness First.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-[#0e1711] border border-[#00E85B]/30 shadow-lg">
            <button
              onClick={() => setActiveTab('carbs')}
              className={`px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'carbs'
                  ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Apple className="w-4 h-4" />
              <span>1. Carbohydrates</span>
            </button>
            <button
              onClick={() => setActiveTab('protein')}
              className={`px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'protein'
                  ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Beef className="w-4 h-4" />
              <span>2. Proteins</span>
            </button>
            <button
              onClick={() => setActiveTab('fats')}
              className={`px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'fats'
                  ? 'bg-[#00E85B] text-black shadow-[0_0_20px_rgba(0,230,83,0.45)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Droplet className="w-4 h-4" />
              <span>3. Healthy Fats</span>
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        <div className="max-w-5xl mx-auto">
          {/* CARBS TAB */}
          {activeTab === 'carbs' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Best Recommendation Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0e1b12] to-[#0a140d] border border-[#00E85B]/40 shadow-[0_0_30px_rgba(0,230,83,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#00E85B] tracking-widest block mb-1">
                    Top Recommendations
                  </span>
                  <h4 className="font-orbitron font-bold text-lg sm:text-xl text-[#FFFFFF]">
                    Best Carbs for Energy & Recovery
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Oats', 'Sweet Potato', 'Brown Rice/White Rice', 'Apple', 'Papaya', 'Quinoa'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-black/60 border border-[#00E85B]/40 text-xs font-bold text-[#00E85B]">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid of Carbs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {carbItems.map((food, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl bg-[#0e1611]/80 border transition-all flex items-center justify-between ${
                      food.isBest
                        ? 'border-[#00E85B]/60 shadow-[0_0_20px_rgba(0,230,83,0.15)] bg-[#0e1b12]/90'
                        : 'border-[#00E85B]/20 hover:border-[#00E85B]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base text-[#FFFFFF]">
                          {food.name}
                        </span>
                        {food.isBest && (
                          <span className="px-1.5 py-0.5 rounded bg-[#00E85B]/20 text-[#00E85B] text-[10px] font-extrabold uppercase">
                            Best
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Per {food.serving}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#00E85B] bg-black/50 px-3 py-1.5 rounded-lg border border-[#00E85B]/30">
                      {food.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROTEIN TAB */}
          {activeTab === 'protein' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Best Recommendation Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0e1b12] to-[#0a140d] border border-[#00E85B]/40 shadow-[0_0_30px_rgba(0,230,83,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#00E85B] tracking-widest block mb-1">
                    Top Recommendations
                  </span>
                  <h4 className="font-orbitron font-bold text-lg sm:text-xl text-[#FFFFFF]">
                    Best Proteins for Muscle Synthesis
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Chicken Breast', 'Egg White', 'Fish', 'Whey Protein', 'Greek Yogurt', 'Soy Chunks'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-black/60 border border-[#00E85B]/40 text-xs font-bold text-[#00E85B]">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid of Proteins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {proteinItems.map((food, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl bg-[#0e1611]/80 border transition-all flex items-center justify-between ${
                      food.isBest
                        ? 'border-[#00E85B]/60 shadow-[0_0_20px_rgba(0,230,83,0.15)] bg-[#0e1b12]/90'
                        : 'border-[#00E85B]/20 hover:border-[#00E85B]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base text-[#FFFFFF]">
                          {food.name}
                        </span>
                        {food.isBest && (
                          <span className="px-1.5 py-0.5 rounded bg-[#00E85B]/20 text-[#00E85B] text-[10px] font-extrabold uppercase">
                            Best
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Per {food.serving}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#00E85B] bg-black/50 px-3 py-1.5 rounded-lg border border-[#00E85B]/30">
                      {food.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FATS TAB */}
          {activeTab === 'fats' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Best Recommendation Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0e1b12] to-[#0a140d] border border-[#00E85B]/40 shadow-[0_0_30px_rgba(0,230,83,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#00E85B] tracking-widest block mb-1">
                    Top Recommendations
                  </span>
                  <h4 className="font-orbitron font-bold text-lg sm:text-xl text-[#FFFFFF]">
                    Best Healthy Fats for Hormonal Balance
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Olive Oil', 'Almonds', 'Walnuts', 'Flax Seeds', 'Chia Seeds', 'Avocado'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-black/60 border border-[#00E85B]/40 text-xs font-bold text-[#00E85B]">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid of Fats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fatItems.map((food, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl bg-[#0e1611]/80 border transition-all flex items-center justify-between ${
                      food.isBest
                        ? 'border-[#00E85B]/60 shadow-[0_0_20px_rgba(0,230,83,0.15)] bg-[#0e1b12]/90'
                        : 'border-[#00E85B]/20 hover:border-[#00E85B]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base text-[#FFFFFF]">
                          {food.name}
                        </span>
                        {food.isBest && (
                          <span className="px-1.5 py-0.5 rounded bg-[#00E85B]/20 text-[#00E85B] text-[10px] font-extrabold uppercase">
                            Best
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Per {food.serving}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#00E85B] bg-black/50 px-3 py-1.5 rounded-lg border border-[#00E85B]/30">
                      {food.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
