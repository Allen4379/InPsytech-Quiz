import React from 'react';
import { Button } from './Button';
import { ArrowRight, Ticket } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative z-10 animate-fade-in overflow-hidden">
      
      {/* Main Glass Card */}
      <div className="w-full relative group perspective-1000">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pandora-cyan/20 via-pandora-purple/20 to-transparent blur-3xl transform scale-110 opacity-60 animate-pulse-slow"></div>
        
        <div className="relative glass-panel p-6 sm:p-8 rounded-[2rem] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl">
           
           {/* Top Label */}
           <div className="flex justify-center mb-6">
             <div className="bg-white/10 px-5 py-2 rounded-full border border-white/10 flex items-center space-x-3 backdrop-blur-md">
               <span className="w-2 h-2 rounded-full bg-pandora-cyan animate-pulse"></span>
               <span className="text-sm text-pandora-cyan font-display tracking-widest uppercase font-bold">
                 員工專屬活動 | Event
               </span>
             </div>
           </div>

           {/* Title Section */}
           <div className="text-center space-y-4 mb-8">
              <h1 className="text-4xl font-display font-bold text-white leading-tight tracking-tight drop-shadow-lg">
                乾瞻科技
                <br />
                電影之夜
                <span className="block text-xl text-white/80 mt-2 font-sans font-normal tracking-wide">
                  InPsytech Movie Night
                </span>
              </h1>
              
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto my-6"></div>
              
              <div className="space-y-1">
                <p className="font-display text-pandora-cyan text-2xl tracking-wide font-bold">
                  阿凡達：火與燼
                </p>
                {/* Updated to use font-display (Cinzel) for the English title */}
                <p className="font-display text-pandora-cyan/80 text-xl tracking-wider">
                  Avatar: Fire and Ash
                </p>
              </div>
           </div>

           {/* Value Proposition */}
           <div className="bg-black/20 rounded-2xl p-4 mb-8 border border-white/5 flex items-center space-x-5">
              <div className="w-14 h-14 rounded-full bg-pandora-cyan/10 flex items-center justify-center shrink-0 border border-pandora-cyan/30">
                <Ticket size={28} className="text-pandora-cyan" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg">回答問題，兌換餐點</p>
                <p className="text-white/60 text-base mt-1">Answer quiz to get meal set</p>
              </div>
           </div>

           {/* Action Button */}
           <Button onClick={onStart} className="!w-full !text-xl !py-5 shadow-neon-cyan/20">
              <div className="flex items-center justify-center space-x-3">
                <span>開始挑戰 | Start</span>
                <ArrowRight size={22} />
              </div>
           </Button>
        </div>
      </div>
      
    </div>
  );
};