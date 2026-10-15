import React, { useMemo } from 'react';
import { OPERATING_HOURS } from '../data/gymData.ts';
import { Clock, Calendar, CheckCircle2, XCircle, Info, Sparkles } from 'lucide-react';

export const OperatingHours: React.FC = () => {
  // Check live open/closed status
  const currentStatus = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday...
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    // Gym opens 6:00 AM (360 mins) and closes 9:30 PM (21:30 = 1290 mins)
    const openMinutes = 6 * 60; // 360
    const closeMinutes = 21 * 60 + 30; // 1290

    const isSunday = day === 0;
    const isWithinHours = totalMinutes >= openMinutes && totalMinutes < closeMinutes;
    const isOpen = !isSunday && isWithinHours;

    let message = "";
    if (isSunday) {
      message = "Closed today (Sunday). Reopens Monday at 6:00 AM";
    } else if (totalMinutes < openMinutes) {
      const waitHrs = Math.floor((openMinutes - totalMinutes) / 60);
      const waitMins = (openMinutes - totalMinutes) % 60;
      message = `Opens today at 6:00 AM (in ${waitHrs > 0 ? `${waitHrs}h ` : ''}${waitMins}m)`;
    } else if (isWithinHours) {
      const remHrs = Math.floor((closeMinutes - totalMinutes) / 60);
      const remMins = (closeMinutes - totalMinutes) % 60;
      message = `Open today until 9:30 PM (${remHrs}h ${remMins}m remaining)`;
    } else {
      message = "Closed for the night. Reopens tomorrow at 6:00 AM";
    }

    return {
      isOpen,
      isSunday,
      message,
      todayDayIndex: day
    };
  }, []);

  return (
    <section id="schedule" className="py-20 bg-[#0a0f0c] relative overflow-hidden border-t border-b border-lime-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lime-400 mb-2">
            Gym Schedule & Timings
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Operating <span className="text-lime-400">Hours</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Train before work or hit high-energy evening sets. We are open early and late to fit your daily lifestyle.
          </p>
        </div>

        {/* Live Status Pill Card */}
        <div className="max-w-2xl mx-auto mb-10 p-5 rounded-2xl bg-gradient-to-r from-[#0d1c12] via-[#102417] to-[#0c1810] border border-lime-400/30 shadow-[0_0_25px_rgba(163,230,53,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              currentStatus.isOpen 
                ? 'bg-lime-400/20 text-lime-400 border border-lime-400/40 shadow-[0_0_15px_rgba(163,230,53,0.3)]' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {currentStatus.isOpen ? (
                <CheckCircle2 className="w-6 h-6 animate-pulse" />
              ) : (
                <XCircle className="w-6 h-6" />
              )}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${currentStatus.isOpen ? 'bg-lime-400' : 'bg-red-400'}`} />
                <h4 className="text-sm sm:text-base font-extrabold uppercase text-white tracking-wide">
                  {currentStatus.isOpen ? 'Gym Is Currently Open' : 'Gym Is Currently Closed'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {currentStatus.message}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-semibold text-lime-400 block">Mon – Sat</span>
            <span className="text-sm font-bold text-white font-mono tabular-nums">6:00 AM – 9:30 PM</span>
          </div>
        </div>

        {/* 7 Days Schedule Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {OPERATING_HOURS.map((hour) => {
            const isToday = hour.dayIndex === currentStatus.todayDayIndex;
            return (
              <div
                key={hour.day}
                className={`p-4 rounded-xl flex flex-col justify-between transition-all duration-200 ${
                  isToday
                    ? 'bg-gradient-to-b from-[#142618] to-[#0c1811] border-2 border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.3)] scale-[1.02]'
                    : hour.isOpen
                    ? 'bg-[#0d1610] border border-lime-400/15'
                    : 'bg-[#121312] border border-slate-800 opacity-75'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      {hour.day.slice(0, 3)}
                    </span>
                    {isToday && (
                      <span className="text-[10px] font-bold uppercase bg-lime-400 text-black px-1.5 py-0.5 rounded">
                        Today
                      </span>
                    )}
                  </div>
                  <h4 className="font-display font-bold text-sm text-white mb-2">
                    {hour.day}
                  </h4>
                </div>

                <div className="pt-2 border-t border-white/5">
                  {hour.isOpen ? (
                    <div>
                      <span className="block text-xs font-mono font-bold text-lime-400 tabular-nums">
                        6:00 AM
                      </span>
                      <span className="block text-xs text-slate-400 font-mono tabular-nums">
                        to 9:30 PM
                      </span>
                    </div>
                  ) : (
                    <span className="inline-block text-xs font-bold text-red-400 uppercase tracking-wide">
                      Closed
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Member Tips & Peak Times */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-black/40 border border-lime-400/15 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
          <Info className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Pro Tip:</strong> Early morning sessions (6:00 AM – 8:30 AM) and mid-day hours (11:00 AM – 4:00 PM) offer optimum floor spaciousness. Evening peak energy runs from 5:30 PM to 8:30 PM.
          </p>
        </div>
      </div>
    </section>
  );
};
