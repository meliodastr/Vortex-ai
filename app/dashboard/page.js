"use client";
import { GlobalHub } from '../../components/VortexMedia';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white font-sans">
      <header className="mb-12">
        <h1 className="text-4xl font-black italic text-indigo-500">VORTEX PANEL</h1>
        <p className="text-gray-400 mt-2">Hoş geldin Sinan, bugün her şey otonom!</p>
      </header>
      
      {/* Medya ve Haber Merkezi */}
      <GlobalHub />
      
      <div className="mt-12 p-8 border border-white/10 rounded-[2rem] bg-white/5 text-center italic text-gray-500">
        Analiz modülleri ve AI verileri burada işlenecek...
      </div>
    </div>
  );
}
