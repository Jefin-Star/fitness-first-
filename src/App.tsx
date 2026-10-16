import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { MembershipPlans } from './components/MembershipPlans.tsx';
import { FitnessCalculator } from './components/FitnessCalculator.tsx';
import { OperatingHours } from './components/OperatingHours.tsx';
import { DietPlanSection } from './components/DietPlanSection.tsx';
import { QuickHealthAndMacroCalculator } from './components/QuickHealthAndMacroCalculator.tsx';
import { RegistrationForm } from './components/RegistrationForm.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('1 Year - Gym + Cardio');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-[#080d0a] text-slate-100 flex flex-col font-sans selection:bg-lime-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar onSelectPlanClick={() => scrollToSection('register')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onJoinClick={() => scrollToSection('register')}
          onViewPlansClick={() => scrollToSection('plans')}
        />

        {/* 2. About Our Gym & Leadership */}
        <AboutSection />

        {/* 3. Membership Plans & Personal Training */}
        <MembershipPlans onSelectPlan={handleSelectPlan} />

        {/* Interactive BMI & Program Recommender */}
        <FitnessCalculator onSelectPlan={handleSelectPlan} />

        {/* Diet Plan & Macro Guide */}
        <DietPlanSection />

        {/* Quick Health & Macro Guide · Male & Female */}
        <QuickHealthAndMacroCalculator onSelectPlan={handleSelectPlan} />

        {/* Operating Hours & Timings */}
        <OperatingHours />

        {/* 4. Membership Registration Form */}
        <RegistrationForm
          selectedPlan={selectedPlan}
          onPlanChange={(plan) => setSelectedPlan(plan)}
        />

        {/* 5. Contact Us & Google Map */}
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Quick Access Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
