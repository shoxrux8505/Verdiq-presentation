/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe, 
  Cpu, 
  FileText, 
  AlertCircle, 
  TrendingUp, 
  Rocket, 
  Layers,
  Database,
  Search,
  CheckCircle2,
  Workflow,
  Sun,
  Moon,
  Type,
  X
} from 'lucide-react';
import { translations, Language } from './translations';
import verdiqLogo from './verdiq-logwo.png';

// --- Components ---

const Logo = ({ size = 50 , className = "" }: { size?: number, className?: string }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <img 
      src={verdiqLogo} 
      alt="Verdiq Logo" 
      style={{ width: size, height: size }}
      className="object-contain drop-shadow-lg"
    />
  </div>
);

const SettingsBar = ({ 
  language, 
  setLanguage, 
  theme, 
  toggleTheme 
}: { 
  language: Language, 
  setLanguage: (l: Language) => void, 
  theme: 'dark' | 'light',
  toggleTheme: () => void 
}) => (
  <div className="fixed top-8 right-8 flex items-center gap-3 z-50">
    <div className="flex bg-surface/50 border border-border p-1 rounded-xl backdrop-blur-md">
      {(['en', 'uz', 'ru'] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            language === lang ? 'bg-verdiq-accent text-black font-bold' : 'text-text/50 hover:text-text'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
    <button 
      onClick={toggleTheme}
      className="p-3 glass-card hover:bg-surface transition-all text-verdiq-accent border-border"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  </div>
);

const ProgressBar = ({ current, total }: { current: number, total: number }) => (
  <div className="fixed top-0 left-0 w-full h-1 bg-border z-50">
    <motion.div 
      className="h-full bg-verdiq-accent shadow-[0_0_10px_#00ff88]"
      initial={{ width: 0 }}
      animate={{ width: `${((current + 1) / total) * 100}%` }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  </div>
);

const NavControls = ({ onPrev, onNext, current, total }: { onPrev: () => void, onNext: () => void, current: number, total: number }) => (
  <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
    <button 
      onClick={onPrev}
      disabled={current === 0}
      className="p-3 glass-card hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
    >
      <ChevronLeft size={24} className="text-verdiq-accent" />
    </button>
    <div className="font-mono text-sm text-white/40 tabular-nums">
      {String(current + 1).padStart(2, '0')} <span className="mx-1">/</span> {String(total).padStart(2, '0')}
    </div>
    <button 
      onClick={onNext}
      disabled={current === total - 1}
      className="p-3 glass-card hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
    >
      <ChevronRight size={24} className="text-verdiq-accent" />
    </button>
  </div>
);

// --- Slides ---

const SlideCover = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col items-center justify-center h-full text-center p-12">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mb-8"
    >
      <div className="relative inline-block">
        <Logo size={96} className="mb-4" />
        <div className="absolute inset-0 blur-2xl bg-verdiq-accent/20 rounded-full -z-10" />
      </div>
    </motion.div>
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 glow-text bg-gradient-to-br from-text to-text/60 bg-clip-text text-transparent"
    >
      {t.slide1.title}
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-verdiq-accent font-mono tracking-[0.2em] uppercase text-xs md:text-md mb-6"
    >
      {t.slide1.subtitle}
    </motion.p>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="max-w-3xl px-6 py-6 glass-card border-verdiq-accent/20"
    >
      <p className="text-text/60 text-lg md:text-xl italic mb-4">{t.slide1.slogan}</p>
      
      <p className="text-md md:text-lg text-text/90 font-medium leading-relaxed mb-4">
        {t.slide1.description}
      </p>
      
      <div className="w-12 h-px bg-verdiq-accent/30 mx-auto mb-3" />
      
      <p className="text-text/40 font-mono text-[9px] uppercase tracking-[0.3em]">{t.slide1.line}</p>
    </motion.div>
  </div>
);

const SlideProblem = ({ t, common }: { t: any, common: any }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center p-8 md:p-24">
    <div>
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest"
      >
        02. {common.problem}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight"
      >
        {t.slide2.title}
      </motion.h2>
      <div className="space-y-4">
        {[t.slide2.point1, t.slide2.point2, t.slide2.point3].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <AlertCircle className="shrink-0 text-red-500 mt-1" size={18} />
            <p className="text-text/70 text-lg font-light leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="glass-card p-6 md:p-8 border-red-500/10"
      >
        <div className="text-center py-8">
          <p className="text-text/40 font-mono text-[10px] mb-4 uppercase tracking-widest">The Core Obstacle</p>
          <blockquote className="text-2xl md:text-3xl font-medium text-text italic leading-snug">
            {t.slide2.insight}
          </blockquote>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
           <div className="h-1 bg-red-900/30 w-full" />
           <div className="h-1 bg-red-900/30 w-full" />
           <div className="h-1 bg-red-900/30 w-full" />
        </div>
      </motion.div>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-500/5 blur-3xl -z-10" />
    </div>
  </div>
);

const SlideSolution = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24 overflow-y-auto">
    <motion.p 
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest leading-none"
    >
      03. {common.solution}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold mb-10 max-w-4xl tracking-tight leading-tight"
    >
      {t.slide3.title}
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { icon: Database, title: t.slide3.pipeline, desc: t.slide3.pipelineDetail },
        { icon: Cpu, title: t.slide3.processing, desc: t.slide3.processingDetail },
        { icon: CheckCircle2, title: t.slide3.readiness, desc: t.slide3.readinessDetail }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-6 md:p-8 border-verdiq-accent/10 hover:border-verdiq-accent/30 transition-colors group h-full flex flex-col"
        >
          <item.icon className="text-verdiq-accent mb-4 md:mb-6" size={28} />
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-verdiq-accent transition-colors leading-tight">{item.title}</h3>
          <p className="text-text/50 text-base md:text-lg leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-12 text-center"
    >
      <p className="text-text/40 font-mono tracking-widest text-sm uppercase">
        Fragmented Data <span className="mx-4 text-verdiq-accent">→</span> Real-time Intelligence
      </p>
    </motion.div>
  </div>
);

const SlideProduct = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.p className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest leading-none">04. {common.product}</motion.p>
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{t.slide4.title}</motion.h2>
        <ul className="space-y-4">
          {[
            { icon: BarChart3, title: t.slide4.item1, text: t.slide4.item1Detail },
            { icon: Zap, title: t.slide4.item2, text: t.slide4.item2Detail },
            { icon: FileText, title: t.slide4.item3, text: t.slide4.item3Detail },
            { icon: ShieldCheck, title: t.slide4.item4, text: t.slide4.item4Detail },
            { icon: TrendingUp, title: t.slide4.item5, text: t.slide4.item5Detail }
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-2.5 rounded-xl bg-verdiq-accent/5 border border-verdiq-accent/10 group-hover:bg-verdiq-accent/10 transition-colors shrink-0">
                <item.icon className="text-verdiq-accent" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-snug">{item.title}</h4>
                <p className="text-text/40 text-xs">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <motion.div 
          initial={{ rotate: 10, scale: 0.9, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          className="glass-card p-6 aspect-video overflow-hidden border-verdiq-accent/20"
        >
          {/* Mock Dashboard UI */}
          <div className="flex items-center justify-between mb-8">
            <div className="w-24 h-3 bg-text/10 rounded-full" />
            <div className="w-32 h-8 bg-verdiq-accent/20 border border-verdiq-accent/30 rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="h-24 bg-text/5 rounded-xl animate-pulse" />
            <div className="h-24 bg-text/5 rounded-xl" />
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-text/10 w-full rounded-full" />
            <div className="h-4 bg-text/10 w-3/4 rounded-full" />
            <div className="h-4 bg-text/10 w-1/2 rounded-full" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-verdiq-accent text-6xl font-black">
            ESG 8.4
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-verdiq-accent/10 blur-[100px] -z-10 rounded-full" />
      </div>
    </div>
  </div>
);

const SlideHowItWorks = ({ t, common }: { t: any, common: any }) => {
  const iconMap: Record<string, any> = {
    database: Database,
    workflow: Workflow,
    zap: Zap,
    cpu: Cpu,
    shield: ShieldCheck,
    fileText: FileText,
    trendingUp: TrendingUp
  };

  return (
    <div className="flex flex-col h-full justify-center p-6 md:p-16 lg:p-24 overflow-y-auto">
      <motion.p className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest leading-none">
        05. {common.howItWorks}
      </motion.p>
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight leading-tight">
        {t.slide5.title}
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
        {t.slide5.steps.map((step: any, i: number) => {
          const Icon = iconMap[step.icon] || Database;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card p-4 md:p-5 border-verdiq-accent/10 hover:border-verdiq-accent/40 transition-all flex flex-col h-full ${i === 6 ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-verdiq-accent/10 border border-verdiq-accent/20 rounded-lg">
                  <Icon size={16} className="text-verdiq-accent" />
                </div>
                <span className="text-[9px] font-mono text-verdiq-accent/60 uppercase">{step.title.split(' — ')[0]}</span>
              </div>
              <h3 className="text-md font-bold mb-1 leading-tight uppercase">{step.title.split(' — ')[1] || step.title}</h3>
              <p className="text-text/50 text-[13px] mb-2 leading-relaxed">{step.desc}</p>
              
              {step.why && (
                <div className="mt-auto pt-2 border-t border-border/10">
                  <p className="text-[10px] text-verdiq-accent font-medium leading-tight">
                    <span className="opacity-40 uppercase">Why:</span> {step.why}
                  </p>
                </div>
              )}
              {step.example && (
                <div className="mt-auto pt-2 border-t border-border/10">
                  <p className="text-[10px] text-verdiq-blue font-medium leading-tight">
                    <span className="opacity-40 uppercase">Eg:</span> {step.example}
                  </p>
                </div>
              )}
              {step.readiness && (
                <div className="mt-auto pt-2 border-t border-border/20 bg-verdiq-accent/5 -mx-4 -mb-4 p-3 px-4 rounded-b-2xl">
                  <p className="text-[9px] text-text/80 font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="text-[11px] text-verdiq-accent font-mono">{step.readiness}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center bg-surface/40 p-6 rounded-2xl border border-border">
        <div className="lg:col-span-2">
          <p className="text-[10px] font-mono text-text/40 uppercase tracking-[0.3em] mb-4">{t.slide5.logicTitle}</p>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-3">
            {t.slide5.logic.map((item: string, i: number) => (
              <React.Fragment key={i}>
                <div className="px-3 py-1.5 bg-verdiq-accent/5 border border-verdiq-accent/20 rounded-lg text-[13px] font-bold text-verdiq-accent whitespace-nowrap">
                  {item}
                </div>
                {i < t.slide5.logic.length - 1 && (
                  <ChevronRight size={14} className="text-border hidden lg:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="lg:border-l lg:border-border lg:pl-6">
          <p className="text-[13px] font-bold italic text-text/80 mb-2 leading-tight">
            &quot;{t.slide5.onePhrase}&quot;
          </p>
          <div className="flex flex-col gap-0.5">
            <p className="text-[9px] text-verdiq-accent font-mono uppercase tracking-widest leading-none">{t.slide5.forInvestors}</p>
            <p className="text-[9px] text-verdiq-blue font-mono uppercase tracking-widest leading-none">{t.slide5.forCompanies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideMarket = ({ t, common }: { t: any, common: any }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center p-8 md:p-24 overflow-y-auto">
    <div>
      <motion.p className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest leading-none">06. {common.market}</motion.p>
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{t.slide6.title}</motion.h2>
      <div className="space-y-4 md:space-y-6">
        {[t.slide6.point1, t.slide6.point2, t.slide6.point3, t.slide6.point4].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-4">
            <CheckCircle2 size={24} className="text-verdiq-accent shrink-0 mt-0.5" />
            <p className="text-xl md:text-2xl font-light text-text/80 leading-snug">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="bg-surface/30 p-8 md:p-12 rounded-3xl border border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6">
        <Globe size={100} strokeWidth={0.5} className="text-verdiq-accent/10" />
      </div>
      <p className="text-7xl md:text-8xl font-black mb-2 tracking-tighter text-verdiq-accent leading-none">12.5%</p>
      <p className="text-lg md:text-xl font-medium text-text/60 mb-8 uppercase tracking-widest leading-none">{t.slide6.cagr}</p>
      <div className="flex items-end gap-2 h-24 md:h-32">
        <div className="flex-1 bg-text/5 h-1/4 rounded-t-lg" />
        <div className="flex-1 bg-text/10 h-2/4 rounded-t-lg" />
        <div className="flex-1 bg-text/20 h-3/4 rounded-t-lg" />
        <div className="flex-1 bg-verdiq-accent h-full shadow-[0_0_30px_#00ff8844] rounded-t-lg" />
      </div>
      <p className="mt-4 font-mono text-[10px] text-text/20 uppercase tracking-widest text-center">ESG Data & Software Market 2024-2030</p>
    </div>
  </div>
);

const SlideBusinessModel = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24 text-center overflow-y-auto">
    <motion.p className="text-verdiq-accent font-mono mb-2 text-xs tracking-widest uppercase leading-none">{common.businessModel}</motion.p>
    <motion.h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">{t.slide7.title}</motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { title: t.slide7.tier1, sub: t.slide7.tier1Sub, feature: "Compliance Baseline", price: "Tier 1" },
        { title: t.slide7.tier2, sub: t.slide7.tier2Sub, feature: t.slide3.pipeline, price: "Tier 2", highlight: true },
        { title: t.slide7.tier3, sub: t.slide7.tier3Sub, feature: "Portfolio ESG Scoring", price: "Tier 3" }
      ].map((card, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`glass-card p-8 md:p-10 transition-all group hover:-translate-y-2 ${card.highlight ? 'border-verdiq-accent bg-verdiq-accent/5' : 'hover:border-border'}`}
        >
          <p className="text-text/40 font-mono text-[10px] mb-3 uppercase tracking-widest">{card.sub}</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{card.title}</h3>
          <div className="h-px bg-border/20 mb-6" />
          <ul className="text-text/60 mb-8 space-y-3 text-sm md:text-base">
            <li>{card.feature}</li>
            <li>Regulatory Mapping</li>
            <li>Data Connectors</li>
          </ul>
          <p className="text-[11px] font-mono text-verdiq-accent uppercase group-hover:tracking-[0.1em] transition-all">Subscription Based</p>
        </motion.div>
      ))}
    </div>
    <p className="mt-10 text-text/20 font-mono text-[10px] uppercase tracking-widest">{t.slide7.pricingNote}</p>
  </div>
);

const SlideComparison = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24 overflow-y-auto">
    <motion.p className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest leading-none">{common.compAdvantage}</motion.p>
    <motion.h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">{t.slide8.title}</motion.h2>
    
    <div className="overflow-hidden glass-card border-border/30">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-surface/50 border-b border-border/60">
              <th className="p-4 md:p-6 text-text/40 font-mono text-[10px] uppercase tracking-wider">{t.slide8.col1}</th>
              <th className="p-4 md:p-6 text-verdiq-accent font-bold text-base md:text-lg uppercase tracking-widest">{t.slide8.col2}</th>
              <th className="p-4 md:p-6 text-text/20 font-bold text-base md:text-lg">{t.slide8.col3}</th>
              <th className="p-4 md:p-6 text-text/20 font-bold text-base md:text-lg">Legacy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/5">
            {[
              [t.slide8.row1[0], t.slide8.row1[1], t.slide8.row1[2], "Static Data"],
              [t.slide8.row2[0], t.slide8.row2[1], t.slide8.row2[2], "Manual Entry"],
              [t.slide8.row3[0], t.slide8.row3[1], t.slide8.row3[2], "High Fees"],
              ["Scale", "Automated Global", "Limited / Local", "Siloed"]
            ].map((row, i) => (
              <motion.tr 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:bg-text/5 transition-colors h-14"
              >
                <td className="p-4 md:p-6 font-medium text-text/60 text-sm md:text-base">{row[0]}</td>
                <td className="p-4 md:p-6"><span className="text-verdiq-accent font-bold text-sm md:text-base">{row[1]}</span></td>
                <td className="p-4 md:p-6 text-text/20 text-sm md:text-base">{row[2]}</td>
                <td className="p-4 md:p-6 text-text/20 text-sm md:text-base">{row[3]}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const SlideVision = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center items-center text-center p-8 md:p-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-verdiq-accent/5 rounded-full -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-verdiq-accent/10 rounded-full -z-10 animate-pulse" />
    
    <motion.p className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest leading-none">{common.vision}</motion.p>
    <motion.h2 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-6xl md:text-8xl font-black mb-10 flex flex-col items-center gap-2 md:gap-4 text-text leading-tight tracking-tight"
    >
      <span>Global ESG</span>
      <span className="text-verdiq-accent">Infrastructure</span>
    </motion.h2>
    
    <div className="max-w-3xl glass-card p-8 md:p-12 border-verdiq-blue/20">
      <ul className="text-xl md:text-2xl font-light space-y-6 md:space-y-8 text-text/80 leading-relaxed">
        <li className="flex items-center justify-center gap-4 italic">
          <Rocket className="text-verdiq-accent shrink-0" size={22} />
          {t.slide9.item1}
        </li>
        <li className="flex items-center justify-center gap-4 italic">
          <Workflow className="text-verdiq-accent shrink-0" size={22} />
          {t.slide9.item2}
        </li>
        <li className="flex items-center justify-center gap-4 italic">
          <Globe className="text-verdiq-accent shrink-0" size={22} />
          {t.slide9.item3}
        </li>
      </ul>
    </div>
  </div>
);

const SlideManifesto = ({ t }: { t: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24 overflow-y-auto">
    <div className="max-w-4xl mx-auto space-y-8">
      {t.slideManifesto.manifesto.slice(0, 3).map((text: string, i: number) => (
        <motion.p 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className={`text-lg md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight ${i === 2 ? 'text-verdiq-accent' : 'text-text'}`}
        >
          {text}
        </motion.p>
      ))}
      
      <div className="h-px w-16 bg-verdiq-accent/30" />
      
      <div className="space-y-4 md:space-y-5">
        {t.slideManifesto.manifesto.slice(3, 6).map((text: string, i: number) => (
          <motion.p 
            key={i + 3}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="text-base md:text-lg lg:text-xl text-text/70 font-light leading-relaxed"
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="glass-card p-6 md:p-8 border-verdiq-accent/20 bg-verdiq-accent/5"
      >
        <p className="text-md md:text-lg font-bold mb-3 text-verdiq-accent leading-tight uppercase tracking-wide">
          {t.slideManifesto.manifesto[6]}
        </p>
        <div className="flex items-center gap-3">
          <Logo size={28} />
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
            {t.slideManifesto.manifesto[7]}
          </span>
        </div>
      </motion.div>
    </div>
  </div>
);

const SlideVsGlobal = ({ t }: { t: any }) => (
  <div className="flex flex-col h-full justify-center p-6 md:p-12 lg:p-16 overflow-y-auto">
    <motion.p className="text-verdiq-blue font-mono mb-2 text-xs uppercase tracking-widest leading-none">
      🌍 💼 MARKET COMPARISON
    </motion.p>
    <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
      {t.slideVsGlobal.title}
    </motion.h2>
    
    <div className="glass-card overflow-hidden border-border/40 shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-surface/50 border-b border-border">
              <th className="p-5 text-[11px] font-mono text-text/40 uppercase tracking-wider">{t.slideVsGlobal.headers[0]}</th>
              {t.slideVsGlobal.headers.slice(1).map((header: string, i: number) => (
                <th key={header + i} className="p-5 text-[11px] font-mono text-text/40 uppercase tracking-wider text-center border-l border-border/5">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/5">
            {t.slideVsGlobal.rows.map((row: any, i: number) => (
              <motion.tr 
                key={row.name + i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`transition-colors h-16 ${row.highlight ? 'bg-verdiq-accent/[0.12] relative group' : 'hover:bg-text/5'}`}
              >
                <td className={`p-5 font-bold text-base relative ${row.highlight ? 'text-verdiq-accent' : 'text-text/60'}`}>
                  {row.highlight && (
                    <div className="absolute inset-y-0 left-0 w-1.5 bg-verdiq-accent group-hover:w-2 transition-all" />
                  )}
                  {row.name}
                </td>
                {row.values.map((val: string, j: number) => (
                  <td key={j} className="p-5 text-center border-l border-border/5">
                    <span className={`text-xl ${val === '❌' ? 'opacity-20 translate-y-[1px] inline-block' : 'scale-110'}`}>
                      {val}
                    </span>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    <div className="mt-8 flex flex-wrap gap-6 text-[11px] font-mono text-text/40 uppercase tracking-widest">
      <div className="flex items-center gap-2"><span className="text-base">✅</span> Optimized</div>
      <div className="flex items-center gap-2"><span className="text-base">⚠️</span> Limited / Partial</div>
      <div className="flex items-center gap-2"><span className="text-base">❌</span> Not Supported</div>
    </div>
  </div>
);

const SlideFinancials = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24 overflow-y-auto">
    <motion.p className="text-verdiq-accent font-mono mb-2 text-xs uppercase tracking-widest leading-none">{common.financials}</motion.p>
    <motion.h2 className="text-4xl md:text-5xl font-bold mb-10 text-text tracking-tight leading-tight">{t.slideFinancials.title}</motion.h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
      <div className="space-y-6 md:space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-card p-6 md:p-8 border-verdiq-accent/20"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold leading-none">{t.slideFinancials.opex}</h3>
            <span className="text-2xl md:text-3xl font-black text-verdiq-accent leading-none">{t.slideFinancials.opexVal}</span>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <CheckCircle2 size={18} className="text-verdiq-accent shrink-0 mt-1" />
              <div>
                <p className="font-bold text-base md:text-lg leading-tight mb-1">{t.slideFinancials.team}</p>
                <p className="text-text/50 text-xs md:text-sm leading-relaxed">{t.slideFinancials.teamDetail}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 size={18} className="text-verdiq-accent shrink-0 mt-1" />
              <div>
                <p className="font-bold text-base md:text-lg leading-tight mb-1">{t.slideFinancials.infra}</p>
                <p className="text-text/50 text-xs md:text-sm leading-relaxed">{t.slideFinancials.infraDetail}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-border/20 flex justify-between items-center">
            <span className="text-text/40 uppercase font-mono text-[9px] tracking-widest">{t.slideFinancials.annual}</span>
            <span className="text-lg font-bold text-text">{t.slideFinancials.annualVal}</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 border-verdiq-blue/20"
        >
          <h3 className="text-2xl font-bold mb-6">{t.slideFinancials.revenue}</h3>
          <div className="grid grid-cols-2 gap-4">
            {t.slideFinancials.revItems.map((item: string, i: number) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-verdiq-blue" />
                <span className="text-sm text-text/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card p-8 bg-verdiq-accent/5 border-verdiq-accent/30"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="text-verdiq-accent" />
            {t.slideFinancials.arr}
          </h3>
          <div className="space-y-12">
            <div className="relative pt-2">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-mono text-text/60 uppercase">{t.slideFinancials.y1}</span>
                <span className="font-bold text-verdiq-accent">{t.slideFinancials.y1Val}</span>
              </div>
              <div className="h-3 bg-text/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '15%' }} 
                  className="h-full bg-verdiq-accent" 
                />
              </div>
            </div>
            <div className="relative pt-2">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-mono text-text/60 uppercase">{t.slideFinancials.y2}</span>
                <span className="font-extrabold text-verdiq-accent text-2xl">{t.slideFinancials.y2Val}</span>
              </div>
              <div className="h-3 bg-text/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '100%' }} 
                  className="h-full bg-gradient-to-r from-verdiq-accent to-verdiq-blue shadow-[0_0_20px_#00ff8866]" 
                />
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-text/30 font-mono text-center uppercase tracking-tighter">
            * Estimates based on MVP market penetration and enterprise pipeline
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

const WhitepaperModal = ({ onClose, t }: { onClose: () => void, t: any }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
      onClick={onClose}
    />
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="relative w-full max-w-3xl glass-card border-verdiq-accent/30 overflow-hidden flex flex-col max-h-[90vh]"
    >
      <div className="flex items-center justify-between p-6 border-b border-border/50">
        <h3 className="text-2xl font-bold text-text">{t.whitepaperModal.title}</h3>
        <button onClick={onClose} className="p-2 text-text/50 hover:text-text hover:bg-surface rounded-xl transition-colors">
          <X size={24} />
        </button>
      </div>
      
      <div className="p-6 overflow-y-auto space-y-6">
        <p className="text-lg text-text/80 leading-relaxed font-light">{t.whitepaperModal.intro}</p>
        <div className="space-y-4">
          {t.whitepaperModal.items.map((item: any, i: number) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl bg-surface/30 border border-border/30 hover:border-verdiq-accent/30 transition-colors group">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-verdiq-accent/10 text-verdiq-accent font-mono text-sm border border-verdiq-accent/20">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-lg text-text group-hover:text-verdiq-accent transition-colors mb-1">{item.title}</h4>
                <p className="text-text/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 border-t border-border/50 bg-surface/50 flex justify-end">
        <button 
          onClick={onClose}
          className="px-6 py-2.5 rounded-xl border border-border hover:bg-surface text-text transition-colors font-medium"
        >
          {t.whitepaperModal.close}
        </button>
      </div>
    </motion.div>
  </div>
);

const SlideClosing = ({ t, common }: { t: any, common: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full justify-center p-8 md:p-24 text-center items-center overflow-y-auto relative">
    <motion.div 
      initial={{ rotate: -180, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 10 }}
      className="mb-8"
    >
      <Logo size={96} className="mb-0" />
    </motion.div>
    
    <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-4xl md:text-6xl text-text font-extrabold mb-6 tracking-tight leading-tight">{t.slide10.title}</motion.h2>
    
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      className="space-y-2 md:space-y-4 mb-12"
    >
      <p className="text-xl md:text-3xl text-text/50 tracking-tight leading-tight">{t.slide10.slogan}</p>
      <p className="text-verdiq-accent font-mono text-lg md:text-xl uppercase tracking-widest leading-none">{t.slide10.ask}</p>
    </motion.div>
 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-lg">
      <motion.button 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-4 md:px-8 md:py-5 bg-verdiq-accent text-black font-bold text-lg md:text-xl rounded-2xl shadow-[0_0_30px_#00ff8844] transition-shadow uppercase tracking-wide"
      >
        {common.whitepaper}
      </motion.button>
      <motion.a 
        href="https://verdiq-com.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        className="px-6 py-4 md:px-8 md:py-5 glass-card border-border/40 text-text text-lg md:text-xl font-bold hover:bg-surface flex items-center justify-center transition-all uppercase tracking-wide"
      >
        {common.demo}
      </motion.a>
    </div>
    
    <p className="fixed bottom-12 left-12 text-text/20 font-mono text-xs">VERDIQ.AI &copy; {new Date().getFullYear()} &middot; ESG INTELLIGENCE PORTAL v2.0</p>
    
    <AnimatePresence>
      {isModalOpen && <WhitepaperModal onClose={() => setIsModalOpen(false)} t={t} />}
    </AnimatePresence>
  </div>
  );
};

// --- Background Effects ---

const BackgroundEffects = () => {
  const nodes = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base Noise Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      
      {/* Gradient Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-verdiq-blue/10 blur-[130px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-verdiq-accent/10 blur-[130px] rounded-full" 
      />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-verdiq-accent/[0.02] blur-[150px] rounded-full" />

      {/* Floating Data Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            y: ['0%', '-20%', '0%'],
            x: ['0%', '10%', '0%']
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            borderRadius: '50%',
            backgroundColor: node.id % 2 === 0 ? 'var(--verdiq-accent)' : 'var(--verdiq-blue)',
            boxShadow: `0 0 10px ${node.id % 2 === 0 ? 'var(--verdiq-accent)' : 'var(--verdiq-blue)'}`
          }}
        />
      ))}

      {/* Abstract Vector Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--verdiq-accent)" />
            <stop offset="100%" stopColor="var(--verdiq-blue)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-100,200 C200,100 400,300 800,150 S1200,400 1600,200"
          stroke="url(#line-grad)"
          strokeWidth="2"
          fill="none"
          animate={{ 
            d: [
              "M-100,200 C200,100 400,300 800,150 S1200,400 1600,200",
              "M-100,250 C250,150 450,350 850,200 S1250,450 1600,250",
              "M-100,200 C200,100 400,300 800,150 S1200,400 1600,200"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M-200,600 C300,500 500,700 900,550 S1300,800 1700,600"
          stroke="url(#line-grad)"
          strokeWidth="1"
          fill="none"
          animate={{ 
            d: [
              "M-200,600 C300,500 500,700 900,550 S1300,800 1700,600",
              "M-200,650 C350,550 550,750 950,600 S1350,850 1700,650",
              "M-200,600 C300,500 500,700 900,550 S1300,800 1700,600"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const t = useMemo(() => translations[language], [language]);
  const common = t.common;

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (next === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
      return next;
    });
  }, []);

  const slides = [
    SlideCover,
    SlideProblem,
    SlideSolution,
    SlideProduct,
    SlideHowItWorks,
    SlideMarket,
    SlideBusinessModel,
    SlideComparison,
    SlideVision,
    SlideVsGlobal,
    SlideManifesto,
    SlideFinancials,
    SlideClosing
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComp = slides[currentSlide];

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-bg font-sans selection:bg-verdiq-accent selection:text-black transition-colors duration-300`}>
      <ProgressBar current={currentSlide} total={slides.length} />
      <SettingsBar 
        language={language} 
        setLanguage={setLanguage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <BackgroundEffects />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentSlide}-${language}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-full h-full"
        >
          <CurrentSlideComp t={t} common={common} />
        </motion.div>
      </AnimatePresence>

      <NavControls 
        onPrev={prevSlide} 
        onNext={nextSlide} 
        current={currentSlide} 
        total={slides.length} 
      />
      
      <div className="fixed top-8 left-8 flex items-center gap-3">
        <div className="p-2 bg-verdiq-accent/10 border border-verdiq-accent/20 rounded-lg">
          <Logo size={20} />
        </div>
        <span className="font-bold text-xl tracking-tight">Verdiq</span>
      </div>
    </div>
  );
}
