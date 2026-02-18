"use client";
import { GlobalHub } from '@/components/VortexMedia';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-white">Dashboard</h1>
        <p className="text-gray-400">Hoş geldin Sinan, bugün neyi otonomlaştıralım?</p>
      </header>
      
      {/* Medya ve Haber Merkezi */}
      <GlobalHub />
      
      {/* Buraya ileride analiz grafikleri gelecek */}
      <div className="mt-12 h-64 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-gray-500 italic">
        Veri Analiz Modülü Yükleniyor...
      </div>
    </div>
  );
}
