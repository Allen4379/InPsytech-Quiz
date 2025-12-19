import React, { useState } from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { AlertTriangle, CheckCircle2, Hexagon } from 'lucide-react';

interface QuizScreenProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onCorrectAnswer: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  question, 
  currentStep, 
  totalSteps, 
  onCorrectAnswer 
}) => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    
    if (option === question.answer) {
      setErrorMsg("");
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedOption(null);
        onCorrectAnswer();
      }, 1500); // Slightly longer delay for reading
    } else {
      setIsSuccess(false);
      setErrorMsg("答錯了，請再試一次！");
    }
  };

  const progressPercentage = ((currentStep - 1) / totalSteps) * 100;

  // SUCCESS VIEW
  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center animate-fade-in text-center p-6 space-y-8 relative overflow-hidden">
         <div className="relative shrink-0">
           <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
           <CheckCircle2 size={120} className="text-green-400 relative z-10" />
         </div>
         <div className="max-w-xs">
            <h2 className="text-4xl font-display font-bold text-white mb-4 tracking-wide">答對了！</h2>
            <p className="text-green-100/50 text-xl font-bold uppercase mb-6">Correct</p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-6"></div>
            <p className="text-green-50 text-xl font-bold leading-relaxed">{question.info}</p>
         </div>
      </div>
    );
  }

  // QUIZ VIEW (No Scroll Layout)
  return (
    <div className="h-full flex flex-col w-full animate-fade-in overflow-hidden">
      
      {/* HEADER SECTION (Shrink 0) */}
      <div className="shrink-0 mb-4">
        {/* HUD */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-pandora-cyan/70">
             <Hexagon size={20} className="animate-spin-slow" />
             <span className="font-display text-sm tracking-widest uppercase font-bold">Question {currentStep}</span>
          </div>
          <div className="font-display text-2xl font-bold text-white/90">
            <span className="text-pandora-cyan">{currentStep}</span><span className="text-white/20 text-lg mx-1">/</span>{totalSteps}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-gradient-to-r from-pandora-cyan to-pandora-purple transition-all duration-500 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* QUESTION AREA (Flex 1 - Centered) */}
      <div className="flex-1 flex flex-col justify-center min-h-0 relative mb-4">
        {/* Error Notification Overlay */}
        {errorMsg && (
          <div className="absolute top-0 left-0 right-0 z-20 bg-red-500/90 text-white p-3 rounded-xl flex items-center justify-center space-x-2 animate-bounce shadow-lg backdrop-blur-md">
            <AlertTriangle size={20} />
            <span className="font-bold text-lg">{errorMsg}</span>
          </div>
        )}

        <div className="glass-panel p-6 rounded-3xl border-l-4 border-l-pandora-cyan w-full">
           <h2 className="text-2xl font-bold text-white leading-relaxed">
            {question.q}
           </h2>
        </div>
      </div>

      {/* OPTIONS AREA (Shrink 0 - Bottom) */}
      <div className="shrink-0 space-y-3 pb-2">
        {question.options.map((option, idx) => (
          <Button 
            key={idx} 
            onClick={() => handleOptionClick(option)}
            disabled={isSuccess}
            variant={selectedOption === option && !isSuccess ? 'secondary' : 'primary'}
            className={`${selectedOption === option && !isSuccess ? '!border-red-500/50 !text-red-200' : ''} !text-xl !py-4`}
          >
            {option}
          </Button>
        ))}
      </div>
      
    </div>
  );
};