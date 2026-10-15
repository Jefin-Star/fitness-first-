import React, { useState, useEffect } from 'react';
import { 
  MEMBERSHIP_PLANS, 
  PERSONAL_TRAINING_PLANS, 
  PREMIUM_TRAINING_SESSIONS, 
  GYM_CONTACT 
} from '../data/gymData.ts';
import { 
  Send, 
  CheckCircle, 
  MessageSquare, 
  Mail, 
  Calendar, 
  User, 
  Phone, 
  Check, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface RegistrationFormProps {
  selectedPlan: string;
  onPlanChange: (plan: string) => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  plan: string;
  startDate: string;
  message: string;
  goal: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ 
  selectedPlan, 
  onPlanChange 
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    plan: selectedPlan || '1 Year - Gym + Cardio',
    startDate: defaultDateStr,
    message: '',
    goal: 'Hypertrophy & Muscle Gain'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync plan if updated from pricing cards
  useEffect(() => {
    if (selectedPlan) {
      setForm((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Phone validation (accepts 10 digits or with +91)
    const cleanPhone = form.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!form.plan) {
      newErrors.plan = 'Please select a membership plan.';
    }

    if (!form.startDate) {
      newErrors.startDate = 'Please choose your preferred start date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const refCode = `FF-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(refCode);

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('fitness_first_registrations') || '[]');
      existing.unshift({
        ...form,
        id: refCode,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('fitness_first_registrations', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      fullName: '',
      phone: '',
      email: '',
      plan: '1 Year - Gym + Cardio',
      startDate: defaultDateStr,
      message: '',
      goal: 'Hypertrophy & Muscle Gain'
    });
  };

  // Generate WhatsApp message content
  const getWhatsAppUrl = () => {
    const text = `*New Membership Registration — FITNESS FIRST FITNESS CENTRE*
---------------------------------------
*Registration Ref:* ${submissionId || 'New'}
*Full Name:* ${form.fullName}
*Phone:* ${form.phone}
*Email:* ${form.email}
*Plan:* ${form.plan}
*Start Date:* ${form.startDate}
*Fitness Goal:* ${form.goal}
${form.message ? `*Notes:* ${form.message}` : ''}
---------------------------------------
Please confirm my membership enrollment and slot availability. Thank you!`;
    return `https://wa.me/91${GYM_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Generate Email link
  const getEmailUrl = () => {
    const subject = `Membership Registration: ${form.fullName} (${form.plan})`;
    const body = `Hello Team Fitness First,

Here are my membership registration details:

Full Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email}
Plan: ${form.plan}
Preferred Start Date: ${form.startDate}
Fitness Goal: ${form.goal}
${form.message ? `Message: ${form.message}` : ''}

Looking forward to hearing from you.

Best regards,
${form.fullName}`;
    return `mailto:${GYM_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="register" className="py-24 bg-[#080d0a] relative overflow-hidden">
      {/* Background neon green ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lime-400 mb-2">
            Join Team Fitness First
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Membership <span className="text-lime-400">Registration</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Take the first step toward peak strength and fitness. Fill out the form below to register and secure your spot today.
          </p>
        </div>

        {/* Success Card */}
        {submitted ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0f1b13] border-2 border-lime-400 shadow-[0_0_40px_rgba(163,230,53,0.3)] text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center mb-6 border border-lime-400/40 shadow-[0_0_25px_rgba(163,230,53,0.3)]">
              <Check className="w-8 h-8 text-lime-400 stroke-[3]" />
            </div>

            <span className="text-xs font-mono font-bold uppercase px-3 py-1 bg-lime-400/10 border border-lime-400/30 text-lime-400 rounded-md">
              Ref ID: {submissionId}
            </span>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-4 uppercase">
              Registration Received!
            </h3>

            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
              Thank you, <strong className="text-white">{form.fullName}</strong>. Your registration for <strong className="text-lime-400">{form.plan}</strong> has been logged.
            </p>

            {/* Direct Connect Buttons (WhatsApp & Email) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold uppercase text-xs sm:text-sm tracking-wider text-black bg-[#00E653] hover:bg-[#00ff5c] shadow-[0_0_25px_rgba(0,230,83,0.5)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>

              <a
                href={getEmailUrl()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold uppercase text-xs sm:text-sm tracking-wider text-lime-300 bg-lime-950/60 hover:bg-lime-900/60 border border-lime-400/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-lime-400" />
                <span>Send via Email</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-lime-400/15">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-lime-400 font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Submit Another Registration
              </button>
            </div>
          </div>
        ) : (
          /* Main Registration Form */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-2xl bg-[#0c1510] border border-lime-400/25 shadow-[0_0_35px_rgba(163,230,53,0.12)] space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Full Name <span className="text-lime-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border text-white text-sm focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-lime-400/20 focus:border-lime-400 focus:ring-1 focus:ring-lime-400'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Phone Number <span className="text-lime-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 95443 32213"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border text-white text-sm focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-lime-400/20 focus:border-lime-400 focus:ring-1 focus:ring-lime-400'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Email Address <span className="text-lime-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border text-white text-sm focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-lime-400/20 focus:border-lime-400 focus:ring-1 focus:ring-lime-400'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                )}
              </div>

              {/* Preferred Start Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Preferred Start Date <span className="text-lime-400">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={form.startDate}
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border text-white text-sm focus:outline-none transition-colors ${
                      errors.startDate
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-lime-400/20 focus:border-lime-400 focus:ring-1 focus:ring-lime-400'
                    }`}
                  />
                </div>
                {errors.startDate && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.startDate}</p>
                )}
              </div>
            </div>

            {/* Membership Plan (Dropdown) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Membership Plan <span className="text-lime-400">*</span>
              </label>
              <select
                value={form.plan}
                onChange={(e) => {
                  setForm({ ...form, plan: e.target.value });
                  onPlanChange(e.target.value);
                }}
                className="w-full px-4 py-3 rounded-xl bg-black/70 border border-lime-400/30 text-white text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
              >
                <optgroup label="General Memberships (Gym Only)">
                  <option value="1 Month - Gym Only">1 Month - Gym Only (₹1,800 incl. ₹1,000 admission)</option>
                  <option value="3 Months - Gym Only">3 Months - Gym Only (₹2,000 / No Admission Fee)</option>
                  <option value="6 Months - Gym Only">6 Months - Gym Only (₹3,799 / No Admission Fee)</option>
                  <option value="1 Year - Gym Only">1 Year - Gym Only (₹6,999 / No Admission Fee)</option>
                </optgroup>
                <optgroup label="General Memberships (Gym + Cardio)">
                  <option value="1 Month - Gym + Cardio">1 Month - Gym + Cardio (₹2,500 incl. ₹1,000 admission)</option>
                  <option value="3 Months - Gym + Cardio">3 Months - Gym + Cardio (₹3,750 / No Admission Fee)</option>
                  <option value="6 Months - Gym + Cardio">6 Months - Gym + Cardio (₹7,200 / No Admission Fee)</option>
                  <option value="1 Year - Gym + Cardio">1 Year - Gym + Cardio (₹13,200 / Best Value)</option>
                </optgroup>
                <optgroup label="Personal Training">
                  <option value="Personal Training - 1 Month">Personal Training - 1 Month (₹6,000)</option>
                  <option value="Personal Training - 3 Months (Special Offer)">Personal Training - 3 Months Offer (₹15,000)</option>
                </optgroup>
                <optgroup label="Premium Session Packs">
                  <option value="Premium Training - 15 Sessions">Premium Training - 15 Sessions (₹7,500)</option>
                  <option value="Premium Training - 30 Sessions">Premium Training - 30 Sessions (₹13,500)</option>
                  <option value="Premium Training - 90 Sessions">Premium Training - 90 Sessions (₹31,500)</option>
                </optgroup>
              </select>
            </div>

            {/* Primary Fitness Goal selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Primary Fitness Goal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Hypertrophy & Muscle Gain',
                  'Fat Loss & Conditioning',
                  'Strength & Powerlifting',
                  'General Health & Mobility'
                ].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setForm({ ...form, goal: g })}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                      form.goal === g
                        ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                        : 'bg-black/40 text-slate-300 border border-lime-400/15 hover:border-lime-400/40'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Message / Fitness Goals */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Message / Specific Fitness Goals (Optional)
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about previous lifting experience, target weight, injuries, or preferred training hours..."
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-lime-400/20 text-white text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl text-sm sm:text-base font-extrabold uppercase tracking-wider text-black bg-[#00E653] hover:bg-[#00ff5c] transition-all shadow-[0_0_25px_rgba(0,230,83,0.5)] hover:shadow-[0_0_35px_rgba(0,230,83,0.75)] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Processing Registration...</span>
              ) : (
                <>
                  <span>Submit Registration</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-400">
              Direct confirmation via WhatsApp and official gym record. No online credit card charge required to submit.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
