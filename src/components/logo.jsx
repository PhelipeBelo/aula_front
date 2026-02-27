import { ScanEye } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center gap-2">
    {/* O ícone da Lucide */}
    <ScanEye className="text-foreground" size={32} />
    
    {/* O nome Zenith */}
    <span className="text-xl font-bold tracking-tight text-foreground">
      Zenith
    </span>
  </div>
);