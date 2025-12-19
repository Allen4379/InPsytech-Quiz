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

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] animate-fade-in text-center p-6 space-y-8">
         <div className="relative">
           <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
           <CheckCircle2 size={120} className="text-green-400 relative z-10" />
         </div>
         <div>
            <h2 className="text-5xl font-display font-bold text-white mb-6 tracking-wide">答對了！</h2>
            <p className="text-green-100/50 text-xl font-bold uppercase mb-8">Correct</p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-8"></div>
            {/* Increased info text size */}
            <p className="text-green-50 text-2xl font-bold leading-relaxed px-4">{question.info}</p>
         </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      {/* HUD Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3 text-pandora-cyan/70">
           <Hexagon size={24} className="animate-spin-slow" />
           <span className="font-display text-base tracking-widest uppercase font-bold">Question {currentStep}</span>
        </div>
        <div className="font-display text-3xl font-bold text-white/90">
          <span className="text-pandora-cyan">{currentStep}</span><span className="text-white/20 text-xl mx-2">/</span>{totalSteps}
        </div>
      </div>

      {/* Progress Bar HUD */}
      <div className="mb-12 relative h-3 w-full bg-white/10 rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-gradient-to-r from-pandora-cyan to-pandora-purple transition-all duration-500 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="glass-panel p-8 rounded-3xl mb-8 border-l-4 border-l-pandora-cyan relative">
        {/* Increased question text size significantly (text-3xl to text-4xl on larger screens, ensuring readability) */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">
          {question.q}
        </h2>
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-5 rounded-xl mb-8 flex items-center justify-center space-x-4 animate-bounce">
          <AlertTriangle size={28} />
          <span className="font-display tracking-wide text-xl font-bold">{errorMsg}</span>
        </div>
      )}

      {/* Options */}
      <div className="space-y-6">
        {question.options.map((option, idx) => (
          <Button 
            key={idx} 
            onClick={() => handleOptionClick(option)}
            disabled={isSuccess}
            variant={selectedOption === option && !isSuccess ? 'secondary' : 'primary'}
            className={`${selectedOption === option && !isSuccess ? '!border-red-500/50 !text-red-200' : ''} !text-2xl !py-6`}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};