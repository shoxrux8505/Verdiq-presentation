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
  Type
} from 'lucide-react';
import { translations, Language } from './translations';

// --- Components ---

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

const SlideCover = ({ t }: { t: any }) => (
  <div className="flex flex-col items-center justify-center h-full text-center p-12">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mb-8"
    >
      <div className="relative inline-block">
        <ShieldCheck className="w-24 h-24 text-verdiq-accent mb-4" strokeWidth={1} />
        <div className="absolute inset-0 blur-2xl bg-verdiq-accent/20 rounded-full -z-10" />
      </div>
    </motion.div>
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-4 glow-text bg-gradient-to-br from-text to-text/60 bg-clip-text text-transparent"
    >
      {t.slide1.title}
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-verdiq-accent font-mono tracking-[0.2em] uppercase text-sm md:text-lg mb-8"
    >
      {t.slide1.subtitle}
    </motion.p>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="max-w-2xl px-6 py-4 glass-card border-verdiq-accent/20"
    >
      <p className="text-text/60 text-lg italic">{t.slide1.slogan}</p>
      <p className="text-text/80 mt-2 font-light">{t.slide1.line}</p>
    </motion.div>
  </div>
);

const SlideProblem = ({ t, common }: { t: any, common: any }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center p-8 md:p-24">
    <div>
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-verdiq-accent font-mono mb-4 text-sm"
      >
        02. {common.problem}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-8 leading-tight tracking-tight"
      >
        {t.slide2.title}
      </motion.h2>
      <div className="space-y-6">
        {[t.slide2.point1, t.slide2.point2, t.slide2.point3].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <AlertCircle className="shrink-0 text-red-500 mt-1" size={20} />
            <p className="text-text/70 text-xl font-light">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 border-red-500/10"
      >
        <div className="text-center py-12">
          <p className="text-text/40 font-mono text-sm mb-4 uppercase">The Core Obstacle</p>
          <blockquote className="text-3xl font-medium text-text italic">
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
  <div className="flex flex-col h-full justify-center p-8 md:p-24">
    <motion.p 
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-verdiq-accent font-mono mb-4 text-sm"
    >
      03. {common.solution}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold mb-12 max-w-4xl tracking-tight"
    >
      {t.slide3.title}
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          className="glass-card p-8 border-verdiq-accent/10 hover:border-verdiq-accent/30 transition-colors group"
        >
          <item.icon className="text-verdiq-accent mb-6" size={32} />
          <h3 className="text-2xl font-bold mb-2 group-hover:text-verdiq-accent transition-colors">{item.title}</h3>
          <p className="text-text/50 text-lg leading-relaxed">{item.desc}</p>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <motion.p className="text-verdiq-accent font-mono mb-4 text-sm uppercase">04. {common.product}</motion.p>
        <motion.h2 className="text-5xl font-bold mb-8">{t.slide4.title}</motion.h2>
        <ul className="space-y-6">
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
              className="flex items-center gap-6 group"
            >
              <div className="p-3 rounded-xl bg-verdiq-accent/5 border border-verdiq-accent/10 group-hover:bg-verdiq-accent/10 transition-colors">
                <item.icon className="text-verdiq-accent" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="text-text/40">{item.text}</p>
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

const SlideHowItWorks = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center items-center text-center p-8 md:p-24">
    <motion.p className="text-verdiq-accent font-mono mb-4 text-sm">05. {common.howItWorks}</motion.p>
    <motion.h2 className="text-5xl font-bold mb-20 tracking-tight">{t.slide5.title}</motion.h2>
    
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="flex-1">
        <div className="w-20 h-20 bg-verdiq-blue/10 border border-verdiq-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Database size={32} className="text-verdiq-blue" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{t.slide5.step1}</h3>
        <p className="text-text/40">{t.slide5.step1Detail}</p>
      </motion.div>
      
      <div className="h-px bg-text/10 w-12 hidden md:block" />

      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex-1 scale-110">
        <div className="w-24 h-24 bg-verdiq-accent/10 border border-verdiq-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
          <Cpu size={40} className="text-verdiq-accent" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border border-dashed border-verdiq-accent/30 rounded-full" 
          />
        </div>
        <h3 className="text-2xl font-bold mb-4">{t.slide5.step2}</h3>
        <p className="text-text/60 font-medium">{t.slide5.step2Detail}</p>
      </motion.div>

      <div className="h-px bg-text/10 w-12 hidden md:block" />

      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex-1">
        <div className="w-20 h-20 bg-verdiq-accent/10 border border-verdiq-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Layers size={32} className="text-verdiq-accent" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{t.slide5.step3}</h3>
        <p className="text-text/40">{t.slide5.step3Detail}</p>
      </motion.div>
    </div>
  </div>
);

const SlideMarket = ({ t, common }: { t: any, common: any }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center p-8 md:p-24">
    <div>
      <motion.p className="text-verdiq-accent font-mono mb-4 text-sm uppercase tracking-widest">{common.market}</motion.p>
      <motion.h2 className="text-5xl font-bold mb-8">{t.slide6.title}</motion.h2>
      <div className="space-y-8">
        {[t.slide6.point1, t.slide6.point2, t.slide6.point3, t.slide6.point4].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-4">
            <CheckCircle2 size={24} className="text-verdiq-accent shrink-0" />
            <p className="text-2xl font-light text-text/80">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="bg-surface/30 p-12 rounded-[40px] border border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8">
        <Globe size={120} strokeWidth={0.5} className="text-verdiq-accent/10" />
      </div>
      <p className="text-8xl font-black mb-4 tracking-tighter text-verdiq-accent">12.5%</p>
      <p className="text-xl font-medium text-text/60 mb-12 uppercase tracking-widest">{t.slide6.cagr}</p>
      <div className="flex items-end gap-2 h-32">
        <div className="flex-1 bg-text/5 h-1/4 rounded-t-lg" />
        <div className="flex-1 bg-text/10 h-2/4 rounded-t-lg" />
        <div className="flex-1 bg-text/20 h-3/4 rounded-t-lg" />
        <div className="flex-1 bg-verdiq-accent h-full shadow-[0_0_40px_#00ff8844] rounded-t-lg" />
      </div>
      <p className="mt-4 font-mono text-xs text-text/20 uppercase tracking-widest">ESG Data & Software Market 2024-2030</p>
    </div>
  </div>
);

const SlideBusinessModel = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24 text-center">
    <motion.p className="text-verdiq-accent font-mono mb-4 text-sm tracking-widest uppercase">{common.businessModel}</motion.p>
    <motion.h2 className="text-5xl font-bold mb-16 underline decoration-verdiq-accent underline-offset-8">{t.slide7.title}</motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          className={`glass-card p-12 transition-all group hover:-translate-y-4 ${card.highlight ? 'border-verdiq-accent bg-verdiq-accent/5' : 'hover:border-border'}`}
        >
          <p className="text-text/40 font-mono text-xs mb-4 uppercase">{card.sub}</p>
          <h3 className="text-3xl font-bold mb-6">{card.title}</h3>
          <div className="h-px bg-border mb-8" />
          <ul className="text-text/60 mb-12 space-y-4">
            <li>{card.feature}</li>
            <li>Regulatory Mapping</li>
            <li>Data Connectors</li>
          </ul>
          <p className="text-sm font-mono text-verdiq-accent uppercase group-hover:tracking-[0.2em] transition-all">Subscription Based</p>
        </motion.div>
      ))}
    </div>
    <p className="mt-16 text-text/30 font-mono text-sm uppercase">{t.slide7.pricingNote}</p>
  </div>
);

const SlideComparison = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24">
    <motion.p className="text-verdiq-accent font-mono mb-4 text-sm uppercase tracking-widest">{common.compAdvantage}</motion.p>
    <motion.h2 className="text-5xl font-bold mb-12 text-text">{t.slide8.title}</motion.h2>
    
    <div className="overflow-hidden glass-card">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="p-8 text-text/40 font-mono text-sm uppercase">{t.slide8.col1}</th>
            <th className="p-8 text-verdiq-accent font-bold text-xl uppercase tracking-widest">{t.slide8.col2}</th>
            <th className="p-8 text-text/20 font-bold text-xl">{t.slide8.col3}</th>
            <th className="p-8 text-text/20 font-bold text-xl">Legacy Platforms</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/5">
          {[
            [t.slide8.row1[0], t.slide8.row1[1], t.slide8.row1[2], "Static Data"],
            [t.slide8.row2[0], t.slide8.row2[1], t.slide8.row2[2], "Manual Entry"],
            [t.slide8.row3[0], t.slide8.row3[1], t.slide8.row3[2], "High Setup Fees"],
            ["Scale", "Automated Global", "Limited / Local", "Siloed"],
            ["Trust", "Audit-Ready (Immutable)", "Sample-based", "Inconsistent"]
          ].map((row, i) => (
            <motion.tr 
              key={i} 
              initial={{ opacity: 0, x: -10 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:bg-text/5 transition-colors"
            >
              <td className="p-8 font-medium text-text/60">{row[0]}</td>
              <td className="p-8"><span className="text-verdiq-accent font-bold">{row[1]}</span></td>
              <td className="p-8 text-text/20">{row[2]}</td>
              <td className="p-8 text-text/20">{row[3]}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SlideVision = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center items-center text-center p-8 md:p-24 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-verdiq-accent/5 rounded-full -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-verdiq-accent/10 rounded-full -z-10 animate-pulse" />
    
    <motion.p className="text-verdiq-accent font-mono mb-4 text-sm uppercase tracking-widest">{common.vision}</motion.p>
    <motion.h2 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-7xl md:text-8xl font-black mb-12 flex flex-col items-center gap-4 text-text"
    >
      <span>Global ESG</span>
      <span className="text-verdiq-accent">Infrastructure</span>
    </motion.h2>
    
    <div className="max-w-3xl glass-card p-12 border-verdiq-blue/20">
      <ul className="text-2xl font-light space-y-8 text-text/80">
        <li className="flex items-center justify-center gap-4 italic italic">
          <Rocket className="text-verdiq-accent flex-shrink-0" size={24} />
          {t.slide9.item1}
        </li>
        <li className="flex items-center justify-center gap-4 italic italic">
          <Workflow className="text-verdiq-accent flex-shrink-0" size={24} />
          {t.slide9.item2}
        </li>
        <li className="flex items-center justify-center gap-4 italic italic">
          <Globe className="text-verdiq-accent flex-shrink-0" size={24} />
          {t.slide9.item3}
        </li>
      </ul>
    </div>
  </div>
);

const SlideClosing = ({ t, common }: { t: any, common: any }) => (
  <div className="flex flex-col h-full justify-center p-8 md:p-24 text-center items-center">
    <motion.div 
      initial={{ rotate: -180, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 10 }}
      className="mb-12"
    >
      <ShieldCheck className="w-32 h-32 text-verdiq-accent" strokeWidth={1} />
    </motion.div>
    
    <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl text-text font-extrabold mb-8">{t.slide10.title}</motion.h2>
    
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      className="space-y-4 mb-20"
    >
      <p className="text-3xl text-text/50 tracking-tight">{t.slide10.slogan}</p>
      <p className="text-verdiq-accent font-mono text-xl uppercase tracking-widest">{t.slide10.ask}</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
      <motion.button 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        className="px-8 py-5 bg-verdiq-accent text-black font-bold text-xl rounded-2xl shadow-[0_0_40px_#00ff8844]"
      >
        {common.whitepaper}
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        className="px-8 py-5 glass-card border-border text-text text-xl font-bold hover:bg-surface"
      >
        {common.demo}
      </motion.button>
    </div>
    
    <p className="fixed bottom-12 left-12 text-text/20 font-mono text-xs">VERDIQ.AI &copy; {new Date().getFullYear()} &middot; ESG INTELLIGENCE PORTAL v2.0</p>
  </div>
);

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
      
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-verdiq-blue/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-verdiq-accent/5 blur-[120px] rounded-full" 
        />
      </div>

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
          <ShieldCheck size={18} className="text-verdiq-accent" />
        </div>
        <span className="font-bold text-xl tracking-tight">Verdiq</span>
      </div>
    </div>
  );
}
