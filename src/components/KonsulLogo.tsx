import konsulLogo from '../assets/logo-konsul.png';

interface KonsulLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function KonsulLogo({ className = '', size = 'md' }: KonsulLogoProps) {
  const sizeClasses = {
    sm: 'h-20',
    md: 'h-24',
    lg: 'h-28'
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
      />
    </div>
  );
}
