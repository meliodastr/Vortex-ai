import { Play, Music, Newspaper } from 'lucide-react';

export const GlobalHub = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 1. Video Oynatıcı */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl">
        <h3 className="flex items-center gap-2 mb-4 text-indigo-400 font-bold"><Play size={20}/> Akademi</h3>
        <div className="aspect-video bg-black rounded-2xl overflow-hidden">
           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"></iframe>
        </div>
      </div>

      {/* 2. Müzik */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl flex flex-col justify-center text-center">
        <h3 className="flex items-center gap-2 mb-4 text-indigo-400 font-bold self-center"><Music size={20}/> Focus Lofi</h3>
        <audio controls className="w-full opacity-60">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* 3. Haber Akışı */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl overflow-hidden h-48">
        <h3 className="flex items-center gap-2 mb-4 text-indigo-400 font-bold"><Newspaper size={20}/> Vortex News</h3>
        <div className="space-y-3 animate-pulse">
          <p className="text-xs text-indigo-300 font-mono"># Yeni: Görsel Analiz Modülü aktif.</p>
          <p className="text-xs text-gray-400 font-mono"># AI sektörü %40 büyüme kaydetti.</p>
          <p className="text-xs text-indigo-300 font-mono"># Pro kullanıcılar için yeni API hazır.</p>
        </div>
      </div>
    </div>
  );
};
