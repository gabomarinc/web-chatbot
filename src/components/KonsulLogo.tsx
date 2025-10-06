import konsulLogo from '../assets/logo-konsul.png';

interface KonsulLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function KonsulLogo({ className = '', size = 'md' }: KonsulLogoProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20'
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      <img 
        src={konsulLogo} 
        alt="KÔNSUL DIGITAL" 
        className="h-full w-auto"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
}
