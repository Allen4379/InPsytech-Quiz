import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = true, 
  className = '',
  ...props 
}) => {
  // Base: Glassmorphism, smooth transitions, font display
  // UPDATED: Increased text size (text-2xl) and padding (py-6) for senior friendly usage
  const baseStyles = "relative overflow-hidden py-6 px-8 rounded-2xl text-2xl font-display font-bold tracking-wide transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md";
  
  const variants = {
    // Primary: Cyan gradient border, glowing text
    primary: "bg-white/10 border-2 border-pandora-cyan/50 text-white hover:bg-pandora-cyan/20 hover:border-pandora-cyan shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] group",
    
    // Secondary: Subtle white/glass
    secondary: "bg-white/5 border-2 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30 hover:text-white",
    
    // Reset: Minimalist
    reset: "bg-transparent border border-white/20 text-white/60 hover:text-white hover:bg-white/5 mt-8 text-lg py-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">{children}</span>
      {/* Shine effect on hover for primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine z-0" />
      )}
    </button>
  );
};