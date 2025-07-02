import { cn } from '../lib/utils';
import type { HTMLAttributes } from 'react';

interface ShimmerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  height?: number | string;
  width?: number | string;
}

export const Shimmer = ({
  className,
  rounded = 'md',
  height = '100%',
  width = '100%',
  ...props
}: ShimmerProps) => {
  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }[rounded];

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gray-100 dark:bg-gray-800',
        roundedClass,
        className
      )}
      style={{ height, width }}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </div>
  );
};

// Shimmer Effect Component
export const ShimmerEffect = () => (
  <div className="space-y-4">
    <Shimmer height={24} width="60%" className="mb-2" />
    <Shimmer height={16} width="90%" />
    <Shimmer height={16} width="80%" />
    <Shimmer height={16} width="85%" />
  </div>
);
