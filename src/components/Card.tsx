import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface CardProps {
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;
  headerAction?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'brand' | 'success' | 'accent' | 'warning' | 'danger';
  interactive?: boolean;
}

export function Card({
  title,
  subtitle,
  icon: Icon,
  headerAction,
  children,
  className = '',
  variant = 'default',
  interactive = false
}: CardProps) {
  const getStyles = () => {
    switch (variant) {
      case 'brand': return { indicator: 'bg-nature-brand', iconColor: 'text-nature-brand' };
      case 'success': return { indicator: 'bg-green-500', iconColor: 'text-green-500' };
      case 'accent': return { indicator: 'bg-nature-accent', iconColor: 'text-nature-accent' };
      case 'warning': return { indicator: 'bg-yellow-500', iconColor: 'text-yellow-500' };
      case 'danger': return { indicator: 'bg-red-500', iconColor: 'text-red-500' };
      default: return { indicator: '', iconColor: 'text-gray-400' };
    }
  };

  const styles = getStyles();

  return (
    <div className={`relative bg-nature-surface border border-nature-border rounded-2xl overflow-hidden flex flex-col h-full ${interactive ? 'hover:border-nature-brand transition-all duration-300 cursor-pointer hover:-translate-y-1' : ''} ${className}`}>
      {variant !== 'default' && (
        <div className={`h-1 w-full ${styles.indicator} absolute top-0 left-0`} />
      )}

      {(title || Icon || headerAction) && (
        <div className="px-6 pt-6 pb-4 border-b border-nature-border/50 relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              {Icon && (
                <div className={`p-2 rounded-lg bg-nature-bg border border-nature-border ${styles.iconColor}`}>
                  <Icon className="h-5 w-5" />
                </div>
              )}
              <div>
                {title && (
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-sm text-gray-400 mt-1">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {headerAction && (
              <div className="flex-shrink-0">
                {headerAction}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col relative z-10">
        {children}
      </div>
      
    </div>
  );
}
