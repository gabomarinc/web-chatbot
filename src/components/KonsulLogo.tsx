interface KonsulLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function KonsulLogo({ className = '', size = 'md' }: KonsulLogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 200 40" 
        className="h-full w-auto"
        fill="none"
      >
        {/* CONSUL DIGITAL text above */}
        <text 
          x="100" 
          y="8" 
          textAnchor="middle" 
          className="text-[8px] font-bold fill-[#00D1C7]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '8px', fontWeight: '700' }}
        >
          CONSUL DIGITAL
        </text>
        
        {/* K */}
        <text 
          x="15" 
          y="32" 
          className="text-[24px] font-bold fill-white"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '24px', fontWeight: '700' }}
        >
          K
        </text>
        
        {/* Ô with accent */}
        <g>
          {/* O circle */}
          <circle 
            cx="45" 
            cy="26" 
            r="8" 
            fill="#00D1C7"
          />
          {/* Accent circumflex */}
          <path 
            d="M39 20 L41 18 L43 20 L41 22 Z" 
            fill="#00D1C7"
          />
        </g>
        
        {/* N with wave effect */}
        <g>
          <path 
            d="M60 32 L60 18 L65 18 L65 25 L70 18 L75 18 L75 32 L70 32 L70 25 L65 32 Z" 
            fill="white"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '24px', fontWeight: '700' }}
          />
        </g>
        
        {/* SUL */}
        <text 
          x="95" 
          y="32" 
          className="text-[24px] font-bold fill-white"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '24px', fontWeight: '700' }}
        >
          SUL
        </text>
      </svg>
    </div>
  );
}
