import React from 'react';
import { Button } from './Button';
import { Gift, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in space-y-8 w-full min-h-[60vh]">
      
      {/* Brand / Title Area */}
      <div className="text-center space-y-4 relative z-10 w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pandora-cyan/20 blur-[80px] rounded-full -z-10 animate-pulse-slow"></div>
        
        {/* Host Info */}
        <h2 className="text-pandora-cyan font-display tracking-[0.2em] text-xl uppercase font-bold mb-2 drop-shadow-md">
          INPSYTECH PRESENTS
        </h2>
        
        {/* Main Event Title - Highlighting Company Event */}
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-2xl leading-tight font-display mb-2">
          乾瞻科技<br/>
          <span className="text-4xl md:text-5xl mt-2 block text-white/90">電影欣賞活動</span>
        </h1>

        {/* Movie Context */}
        <div className="inline-block mt-4 px-6 py-3 rounded-2xl glass-panel border-pandora-cyan/30 bg-pandora-cyan/5">
           <span className="text-pandora-cyan font-display font-bold text-xl md:text-2xl tracking-wider drop-shadow-lg">
             阿凡達：火與燼
           </span>
        </div>
      </div>

      {/* Incentive Card */}
      <div className="w-full glass-panel rounded-3xl p-8 text-center space-y-6 border border-pandora-cyan/50 shadow-[0_0_40px_rgba(34,211,238,0.2)] relative overflow-hidden bg-white/10">
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 opacity-50"></div>
        
        <div className="inline-flex items-center justify-center p-5 bg-pandora-purple/30 rounded-full text-pandora-purple ring-2 ring-pandora-purple/70 mb-2 shadow-neon-purple">
          <Gift size={40} className="text-white" />
        </div>

        <div className="space-y-4">
          <div className="text-white leading-relaxed font-normal text-xl space-y-6">
            <p className="font-bold text-2xl">
              為了讓大家更了解我們公司<br/>
              設計了 <span className="text-pandora-cyan font-black text-3xl mx-1">5</span> 個小問答
            </p>
            
            <div className="h-px w-1/2 bg-white/20 mx-auto"></div>

            <p className="text-xl">
              全部回答完成後<br/>
              即可向工作人員領取<br/>
              <span className="text-white font-bold text-3xl border-b-2 border-pandora-cyan pb-1 inline-block mt-3 shadow-[0_4px_0_rgba(34,211,238,0.3)]">🍿 爆米花 & 🥤 飲料</span><br/>
              <span className="text-lg text-white/70 mt-2 block font-display tracking-widest uppercase">兌換券</span>
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full pt-4">
        <Button onClick={onStart}>
          <div className="flex items-center space-x-3">
            <Sparkles size={24} />
            <span>開始挑戰</span>
          </div>
        </Button>
      </div>
      
    </div>
  );
};