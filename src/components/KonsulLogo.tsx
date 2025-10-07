import konsulLogo from '../assets/logo-konsul.png';

interface KonsulLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function KonsulLogo({ className = '', size = 'md' }: KonsulLogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 md:h-12',
    lg: 'h-14 md:h-16'
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      <img 
        src={konsulLogo} 
        alt="KÔNSUL DIGITAL - Chatbot IA para automatización empresarial" 
        className="h-full w-auto"
        style={{ imageRendering: 'auto' }}
        loading="eager"
        width="200"
        height="40"
        fetchPriority="high"
      />
    </div>
  );
}
