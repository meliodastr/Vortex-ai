"use client";
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Play, Music, Newspaper, Send, Moon, Sun, 
  MessageCircle, X, Star, Quote, Gift, Zap, Shield, Cloud 
} from 'lucide-react';

export default function VortexAllInOne() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [wheelReward, setReward] = useState(null);
  const [email, setEmail] = useState('');

  // 1. MODAL & TEMA AYARI
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans">
        
        {/* --- NAVBAR --- */}
        <nav className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-slate-800 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
          <div className="text-2xl font-black italic text-indigo-600">VORTEX AI</div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-slate-800">
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
            </button>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700 transition">Başla</button>
          </div>
        </nav>

        {/* --- HERO SECTION (A SLOGANLARI) --- */}
        <section className="text-center py-20 px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            İşinizi Yapay Zekayla Yönetin
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            Vortex AI ile veri analizinden içerik üretimine kadar tüm süreçlerinizi tek panelden, her cihazda profesyonelce yönetin. Zamanı kendinize ayırın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-indigo-500/20">Ücretsiz Dene</button>
            <button className="border border-gray-200 dark:border-slate-700 px-10 py-4 rounded-2xl text-lg font-bold">Demoyu İzle</button>
          </div>
        </section>

        {/* --- MULTIMEDYA HUB (VİDEO, MÜZİK, HABER) --- */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Video */}
          <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-[2rem] border border-gray-100 dark:border-slate-800">
            <h3 className="flex items-center gap-2 mb-4 font-bold"><Play size={20} className="text-indigo-600"/> AI Akademi</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"></iframe>
            </div>
          </div>
          {/* Müzik */}
          <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-[2rem] border border-gray-100 dark:border-slate-800 flex flex-col justify-center">
            <h3 className="flex items-center gap-2 mb-4 font-bold"><Music size={20} className="text-indigo-600"/> Odaklanma Modu</h3>
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-xl text-center">
              <p className="text-sm mb-4">Lofi Hip Hop - AI Çalışma Ritmi</p>
              <audio controls className="w-full h-8 opacity-80">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
          {/* Haber Akışı */}
          <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-[2rem] border border-gray-100 dark:border-slate-800 overflow-hidden">
            <h3 className="flex items-center gap-2 mb-4 font-bold"><Newspaper size={20} className="text-indigo-600"/> Canlı Akış</h3>
            <div className="space-y-4 animate-pulse">
              <p className="text-sm border-l-2 border-indigo-600 pl-2"># Yeni: Görsel Analiz yayında!</p>
              <p className="text-sm border-l-2 border-gray-400 pl-2 opacity-50"># Global AI pazarı %40 büyüdü.</p>
              <p className="text-sm border-l-2 border-indigo-600 pl-2"># Vortex v2.0 çok yakında.</p>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS (C YORUMLARI) --- */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 italic">Kullanıcılarımız Ne Diyor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { n: "Ahmet Y.", r: "Freelancer", c: "Haftalık işimi 10 dakikada bitiriyorum." },
              { n: "Selin D.", r: "Şirket Sahibi", c: "Karanlık mod ve mobil hız harika!" },
              { n: "Caner Ö.", r: "Girişimci", c: "Otonom sistemi sayesinde uyurken kazanıyorum." }
            ].map((t, i) => (
              <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl">
                <Quote className="text-indigo-200 dark:text-slate-700 mb-4" />
                <p className="italic mb-6 text-gray-600 dark:text-gray-400">"{t.c}"</p>
                <div className="font-bold">{t.n}</div>
                <div className="text-xs text-indigo-500">{t.r}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- HEDİYE ÇARKI (GAMIFICATION) --- */}
        <section className="mx-6 my-20 bg-indigo-600 dark:bg-indigo-800 p-12 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <Gift className="mx-auto mb-4 animate-bounce" size={48} />
            <h2 className="text-3xl font-black mb-4">Şansını Dene, AI Kredisi Kazan!</h2>
            {!wheelReward ? (
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="E-posta adresin" 
                  className="px-6 py-3 rounded-full text-gray-900 outline-none w-full md:w-80"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={() => setReward("100 AI Kredisi!")} className="bg-yellow-400 text-indigo-900 px-8 py-3 rounded-full font-bold">ÇEVİR</button>
              </div>
            ) : (
              <div className="text-2xl font-bold animate-pulse text-yellow-300">Tebrikler! Kazandın: {wheelReward}</div>
            )}
          </div>
        </section>

        {/* --- OTONOM AI DESTEK BOTU --- */}
        <div className="fixed bottom-6 right-6 z-[100]">
          {isChatOpen && (
            <div className="w-80 h-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-indigo-100 dark:border-slate-800 flex flex-col mb-4 animate-in slide-in-from-bottom-5">
              <div className="p-4 bg-indigo-600 text-white rounded-t-2xl flex justify-between items-center font-bold">
                <span>Vortex AI Destek</span>
                <X onClick={() => setIsChatOpen(false)} className="cursor-pointer" />
              </div>
              <div className="flex-1 p-4 text-sm overflow-y-auto">
                <div className="bg-indigo-50 dark:bg-slate-800 p-3 rounded-xl mb-2 text-indigo-600 dark:text-indigo-400">
                  Merhaba Sinan! Ben Vortex AI. Sana nasıl yardımcı olabilirim?
                </div>
              </div>
              <div className="p-4 border-t border-gray-100 dark:border-slate-800">
                <div className="flex gap-2">
                  <input className="flex-1 text-sm outline-none dark:bg-transparent" placeholder="Sorunu buraya yaz..." />
                  <Send size={18} className="text-indigo-600" />
                </div>
              </div>
            </div>
          )}
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          >
            <MessageCircle size={28} />
          </button>
        </div>

      </div>
    </div>
  );
}
