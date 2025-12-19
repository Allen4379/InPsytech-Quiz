import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Ticket, Calendar, Clock, MapPin, Info, UserCheck, Linkedin, ExternalLink, Film, Gift, CheckCircle, ArrowRightCircle } from 'lucide-react';

interface CouponScreenProps {
  onReset: () => void;
}

export const CouponScreen: React.FC<CouponScreenProps> = ({ onReset }) => {
  const [activeTab, setActiveTab] = useState<'voucher' | 'info'>('voucher');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-TW', { hour12: false });
  };

  const handleSafeReset = () => {
    const isConfirmed = window.confirm(
      "⚠️ 警告：確定要重新開始嗎？\n\n這將會清除目前的兌換券畫面。\n如果尚未兌換，請勿執行此操作。\n\n(僅供工作人員或測試使用)"
    );
    
    if (isConfirmed) {
      onReset();
    }
  };

  return (
    <div className="flex flex-col items-center animate-fade-in w-full h-full pt-1 overflow-hidden">
      
      {/* Top Toggle / Tabs */}
      <div className="flex w-full bg-white/5 rounded-xl p-1 mb-4 border border-white/10 shrink-0 backdrop-blur-md z-20">
        <button 
          onClick={() => setActiveTab('voucher')}
          className={`flex-1 py-3 rounded-lg text-base font-bold flex items-center justify-center space-x-2 transition-all duration-300 ${activeTab === 'voucher' ? 'bg-pandora-cyan text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
        >
          <Ticket size={20} />
          <span>兌換券 Voucher</span>
        </button>
        <button 
          onClick={() => setActiveTab('info')}
          className={`flex-1 py-3 rounded-lg text-base font-bold flex items-center justify-center space-x-2 transition-all duration-300 ${activeTab === 'info' ? 'bg-pandora-purple text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
        >
          <Film size={20} />
          <span>資訊 Info</span>
        </button>
      </div>

      {/* Content Container - Flex centered to avoid scrolling */}
      <div className="w-full flex-1 relative flex flex-col justify-center">
        
        {/* VIEW 1: VOUCHER */}
        {activeTab === 'voucher' && (
          <div className="animate-fade-in w-full flex flex-col gap-4">
             
             {/* Card 1: Main Meal Voucher */}
             <div className="w-full relative group">
                <div className="absolute inset-0 bg-pandora-cyan/20 blur-xl opacity-50 rounded-3xl"></div>
                
                <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-pandora-cyan/20 to-transparent p-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-pandora-cyan text-black text-xs font-bold px-3 py-1 rounded-md tracking-wider">
                        PASSED
                      </div>
                      <span className="font-display font-bold text-white tracking-wide text-lg">
                        餐點兌換券
                      </span>
                    </div>
                    <Ticket className="text-pandora-cyan opacity-80" size={24} />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-5">
                     {/* Items */}
                     <div className="flex items-center justify-between px-2">
                        <div className="text-center flex-1">
                           <span className="text-5xl block mb-2">🍿</span>
                           <span className="text-xl font-bold text-white block">爆米花</span>
                           <span className="text-sm text-white/60 uppercase block">Popcorn</span>
                        </div>
                        <div className="h-16 w-px bg-white/10"></div>
                        <div className="text-center flex-1">
                           <span className="text-5xl block mb-2">🥤</span>
                           <span className="text-xl font-bold text-white block">飲料</span>
                           <span className="text-sm text-white/60 uppercase block">Drink</span>
                        </div>
                     </div>
                     
                     {/* Dynamic Verification Area */}
                     <div className="bg-black/40 rounded-xl p-3 border border-white/10 relative overflow-hidden flex items-center justify-between">
                        <div className="flex flex-col space-y-0.5">
                           <span className="text-[10px] text-pandora-cyan font-bold uppercase tracking-widest">
                             工作人員確認
                           </span>
                           <span className="text-white font-bold text-base">Staff Verify</span>
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-display font-bold text-white tabular-nums tracking-widest">
                             {formatTime(currentTime)}
                           </div>
                        </div>
                        {/* Scanning line effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pandora-cyan/10 to-transparent h-[200%] w-full animate-[shine_3s_infinite] pointer-events-none"></div>
                     </div>
                  </div>
                </div>
             </div>

             {/* Card 2: Bonus Mission - Explicit CTA Version */}
             <div className="glass-panel rounded-2xl p-4 border border-pandora-purple/30 bg-pandora-purple/10">
                 <div className="flex items-center justify-between gap-3">
                     <div className="flex flex-col justify-center">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-1">
                           <Gift size={20} className="text-pandora-purple animate-pulse" />
                           <span>追蹤領好禮</span>
                        </h3>
                        <p className="text-white/70 text-xs font-medium">
                           Follow for a special gift
                        </p>
                     </div>
                     
                     <a 
                        href="https://tw.linkedin.com/company/inpsytech-inc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="shrink-0"
                      >
                        <button className="bg-[#0077b5] hover:bg-[#006097] text-white px-5 py-3 rounded-xl transition-all shadow-lg shadow-[#0077b5]/20 border border-white/10 flex items-center gap-2 group active:scale-95">
                           <Linkedin size={20} className="fill-current" />
                           <span className="font-bold text-sm tracking-wide">前往追蹤 Follow</span>
                        </button>
                      </a>
                 </div>
             </div>
             
          </div>
        )}

        {/* VIEW 2: INFO */}
        {activeTab === 'info' && (
          <div className="animate-fade-in w-full">
            <div className="glass-panel rounded-3xl p-6 space-y-6 border border-white/10 bg-white/5 relative overflow-hidden">
               {/* Background deco */}
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-pandora-cyan/5 rounded-full blur-3xl"></div>

               {/* Title */}
               <div className="text-center border-b border-white/10 pb-4 relative z-10">
                  <h2 className="text-3xl font-bold text-white leading-tight font-display mb-1">
                    阿凡達：火與燼
                  </h2>
                  <p className="text-pandora-cyan text-lg font-display tracking-wide opacity-90">Avatar: Fire and Ash</p>
               </div>

               {/* Info Grid */}
               <div className="space-y-6 relative z-10">
                  {/* Date & Time Grouped */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-start gap-4 mb-4">
                         <Calendar size={20} className="text-pandora-cyan mt-1" />
                         <div>
                            <p className="text-xs text-white/50 uppercase font-bold">日期 Date</p>
                            <p className="text-white font-bold text-lg">2025.12.19 (五)</p>
                         </div>
                      </div>
                      
                      <div className="h-px bg-white/10 w-full mb-4"></div>

                      <div className="flex items-start gap-4">
                         <Clock size={20} className="text-pandora-cyan mt-1" />
                         <div className="w-full">
                            <p className="text-xs text-white/50 uppercase font-bold mb-1">時間 Time</p>
                            <p className="text-white font-bold text-lg mb-2">20:20 - 23:47</p>
                            
                            {/* Emphasized Admission Time */}
                            <div className="bg-pandora-cyan/20 border border-pandora-cyan/50 rounded-lg p-3 text-center w-full animate-pulse-slow">
                              <p className="text-pandora-cyan text-xl font-bold font-display tracking-widest">
                                20:10 開放入場
                              </p>
                            </div>
                         </div>
                      </div>
                  </div>

                  {/* Venue Highlighted */}
                  <div className="flex items-start gap-4 px-2">
                     <MapPin size={28} className="text-pandora-cyan mt-1 shrink-0" />
                     <div>
                        <p className="text-xs text-white/50 uppercase font-bold mb-1">地點 Venue</p>
                        {/* Emphasized Big City IMAX */}
                        <p className="text-pandora-cyan font-bold text-2xl font-display tracking-wide leading-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                          Big City IMAX 3廳
                        </p>
                        {/* De-emphasized Cinema Name */}
                        <p className="text-white/40 text-sm mt-1">威秀影城 新竹巨城店</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Reset Link (Bottom) */}
      <div className="mt-2 shrink-0 z-20">
        <button 
          onClick={handleSafeReset}
          className="text-[10px] text-white/20 hover:text-white/50 transition-colors py-3 px-4 font-display tracking-widest uppercase"
        >
          System Reset
        </button>
      </div>
    </div>
  );
};