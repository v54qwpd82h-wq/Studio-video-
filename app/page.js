"use client";
import React, { useState } from 'react';
import { Video, Sparkles, Smile, Layers, CheckCircle2, ShieldCheck, Wallet, ArrowRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0F]/70 border-b border-white/5 dynamic-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              G.L TIKOMIK <span className="text-purple-500 font-black">STUDIO</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#studio" className="hover:text-white transition-colors">Studio</a>
            <a href="#features" className="hover:text-white transition-colors">Karakteristik</a>
            <a href="#pricing" className="hover:text-white transition-colors">Plan Pri</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#pricing" className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold border border-white/10 transition-all">
              Koneksyon
            </a>
            <a href="#studio" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all">
              Kòmanse Gratis
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0B0B0F]/95 backdrop-blur-lg border-b border-white/5 px-6 py-6 flex flex-col gap-4">
            <a href="#studio" onClick={() => setIsMenuOpen(false)} className="text-gray-300 py-2">Studio</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-300 py-2">Karakteristik</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-gray-300 py-2">Plan Pri</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 py-2">Kontak</a>
            <hr className="border-white/5 my-2" />
            <a href="#pricing" className="text-center py-3 rounded-xl bg-white/5 border border-white/10">Koneksyon</a>
            <a href="#studio" className="text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">Kòmanse Gratis</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-8">
          <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Video Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.15] bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
          Kreyasyon Video Anime Ki Pi Rapid Sou Mache A
        </h1>
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Kreye animasyon pwofesyonèl ak vwa AI an Kreyòl, Franse, ak Anglè nan kèk segond. Pa gen eksperyans teknik ki nesesè.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#studio" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 font-bold shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all flex items-center justify-center gap-2">
            Ouvri G.L Studio <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#pricing" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 font-semibold border border-white/10 transition-all block">
            Gade Plan Pri Yo
          </a>
        </div>
      </section>

      {/* INTERACTIVE STUDIO DEMO PREVIEW */}
      <section id="studio" className="py-12 px-6 max-w-6xl mx-auto scroll-mt-24">
        <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/40" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <span className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="text-xs text-gray-500 ml-2 font-mono">workspace_v2.0.studio</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs border border-purple-500/30">
              Live Preview
            </div>
          </div>

          {/* Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Tools */}
            <div className="lg:col-span-1 bg-black/40 rounded-xl p-4 border border-white/5 flex flex-col gap-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Zouti Kreyasyon</h3>
              <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-200 text-sm font-medium text-left">
                <Smile className="w-4 h-4 text-purple-400" /> Karaktè Anime (Lip-Sync)
              </button>
              <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 text-sm font-medium text-left transition-colors">
                <Layers className="w-4 h-4 text-blue-400" /> Stickè & Grafik Custom
              </button>
              <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 text-sm font-medium text-left transition-colors">
                <Sparkles className="w-4 h-4 text-amber-400" /> Vwa AI Multi-Lang
              </button>
            </div>

            {/* Canvas/Video Player Simulation */}
            <div className="lg:col-span-3 aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-white/5 relative flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Simulated Character Sticker */}
              <div className="relative z-10 text-center animate-pulse">
                <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.4)] mb-4">
                  <Smile className="w-14 h-14 text-white" />
                </div>
                <p className="text-sm font-mono text-purple-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 inline-block">
                  Mouvement Naturel Active ⚡
                </p>
              </div>

              {/* Control bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">00:04 / 00:30</span>
                <div className="w-2/3 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
                <span className="text-xs font-bold text-purple-400">1080p Export</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Chwazi Plan Pa W La</h2>
          <p className="mt-4 text-gray-400">Eksplore opsyon fleksib nou yo pou kòmanse kreye videyo san limit kounye a.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* PLAN LIMITÉ */}
          <div className={`rounded-3xl p-8 bg-gradient-to-b from-white/[0.05] to-white/[0.01] border transition-all relative ${selectedPlan === 'limite' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/10'}`} onClick={() => setSelectedPlan('limite')}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold">Plan Limité</h3>
                <p className="text-gray-400 text-sm mt-1">Pou moun k ap teste platfòm lan</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">Debutan</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-gray-400 text-sm"> / mwa</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> 5 Kreyasyon videyo pa mwa</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Karaktè anime estanda yo</li>
              <li className="flex items-center gap-3 text-gray-500"><X className="w-4 h-4 shrink-0" /> Vwa AI Premium ak Lip-Sync avanse</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold transition-all">
              Kòmanse Gratis
            </button>
          </div>

          {/* PLAN ILLIMITÉ */}
          <div className={`rounded-3xl p-8 bg-gradient-to-b from-purple-500/[0.08] to-transparent border transition-all relative overflow-hidden ${selectedPlan === 'illimite' ? 'border-purple-500 ring-2 ring-purple-500/30' : 'border-purple-500/30'}`} onClick={() => setSelectedPlan('illimite')}>
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] uppercase font-black tracking-widest px-4 py-1 rounded-bl-xl">
              POPILÈ
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Plan Illimité</h3>
                <p className="text-purple-300/70 text-sm mt-1">Pou kreyatè pwofesyonèl yo</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-semibold">Pro Ultra</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">$29</span>
              <span className="text-purple-300/50 text-sm"> / mwa</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Videyo ak ekspòtasyon san limit</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Aksè ak tout Stickè & Karaktè</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Lip-Sync natirèl ak vwa AI ultra-reyèl</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 font-bold shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all">
              Achte Kounye a
            </button>

            {/* GATEWAY PAYMENTS INTEGRATION INFO */}
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Peman Sekirize:</span>
              <div className="flex items-center gap-3 font-mono font-bold text-gray-300">
                <span className="text-blue-400">Natcash</span>
                <span className="text-amber-400">PayPal</span>
                <span>Kredi Kado</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight">Kontakte Administrasyon an</h2>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Ou gen yon kesyon teknik, biznis, oubyen bezwen yon plan Customized? Ekri sipò G-Legacy a dirèkteman.
              </p>
              <div className="mt-6 space-y-3 text-xs text-gray-400">
                <p className="flex items-center gap-2"><Wallet className="w-4 h-4 text-purple-400" /> Sipò 24/7 Disponib</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={(e) => e.preventDefault()} className="md:col-span-3 space-y-4 w-full">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Non konplè</label>
                <input type="text" placeholder="Jan Jak" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Adrès Imel</label>
                <input type="email" placeholder="example@glegacy.com" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Mesaj ou</label>
                <textarea rows="3" placeholder="Kisa ou ta renmen di nou..." className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none text-sm transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all text-sm shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
                Voye Mesaj la
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-gray-500">
        <p>&copy; 2026 G-Legacy Organization. Tout dwa rezève. Tout nan on sèl klik.</p>
      </footer>

    </div>
  );
}
