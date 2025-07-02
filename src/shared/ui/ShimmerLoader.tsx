import { cn } from '../lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface ShimmerTextProps extends HTMLAttributes<HTMLDivElement> {
  lines?: number;
  className?: string;
}

interface ShimmerImageProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  circle?: boolean;
}

interface ShimmerLoaderProps extends HTMLAttributes<HTMLDivElement> {
  fullScreen?: boolean;
  className?: string;
  type?: 'default' | 'product' | 'category' | 'home';
}

interface ShimmerBaseProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const ShimmerBase = ({ children, className = '', ...props }: ShimmerBaseProps) => (
  <div className={cn('animate-pulse', className)} {...props}>
    {children}
  </div>
);

const ProductShimmer = () => (
  <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
    <div className="mb-8">
      <ShimmerBase className="h-6 w-32 bg-gray-200 rounded mb-6" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image Gallery */}
      <div className="space-y-4">
        <ShimmerBase className="h-96 bg-gray-100 rounded-lg" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <ShimmerBase key={i} className="h-24 bg-gray-100 rounded-lg" />
          ))}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-6">
        <ShimmerBase className="h-10 w-3/4 bg-gray-200 rounded" />
        <ShimmerBase className="h-6 w-1/2 bg-gray-200 rounded" />
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <ShimmerBase key={i} className="h-4 bg-gray-100 rounded" />
          ))}
        </div>
        <ShimmerBase className="h-8 w-24 bg-gray-200 rounded" />
        <div className="flex space-x-4 pt-4">
          <ShimmerBase className="h-12 w-32 bg-gray-200 rounded" />
          <ShimmerBase className="h-12 w-40 bg-amber-500 rounded" />
        </div>
      </div>
    </div>
  </div>
);

const CategoryShimmer = () => (
  <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
    <div className="h-48 bg-gray-200 mb-12 rounded-lg flex items-center justify-center">
      <ShimmerBase className="h-8 w-48 bg-gray-300 rounded" />
    </div>
    <div className="space-y-32">
      {[1, 2, 3].map((item) => (
        <div key={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`order-${item % 2 === 0 ? '2' : '1'}`}>
            <ShimmerBase className="h-96 bg-gray-100 rounded-lg" />
          </div>
          <div className={`order-${item % 2 === 0 ? '1' : '2'} space-y-6`}>
            <ShimmerBase className="h-10 w-1/2 bg-gray-200 rounded" />
            <ShimmerBase className="h-8 w-3/4 bg-gray-200 rounded" />
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <ShimmerBase key={i} className="h-4 bg-gray-100 rounded" />
              ))}
            </div>
            <ShimmerBase className="h-12 w-40 bg-amber-500 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HomeShimmer = () => (
  <div className="w-full">
    {/* Hero Section */}
    <div className="h-[600px] bg-gray-100 mb-24 relative overflow-hidden">
      <div className="container h-full flex items-center">
        <div className="max-w-md space-y-6">
          <ShimmerBase className="h-6 w-48 bg-gray-300 rounded-full" />
          <ShimmerBase className="h-14 w-96 bg-gray-300 rounded" />
          <div className="space-y-3">
            <ShimmerBase className="h-4 w-full bg-gray-200 rounded" />
            <ShimmerBase className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>
          <ShimmerBase className="h-12 w-40 bg-amber-500 rounded" />
        </div>
      </div>
    </div>
    
    {/* Categories */}
    <div className="container mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="h-40 bg-gray-200 rounded-lg mb-6"></div>
            <ShimmerBase className="h-6 w-32 mx-auto bg-gray-200 rounded mb-4" />
            <ShimmerBase className="h-12 w-32 mx-auto bg-amber-500 rounded" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ShimmerLoader = ({ fullScreen = true, className, type = 'default', ...props }: ShimmerLoaderProps) => {
  const wrapperClasses = cn(
    'bg-white/95 backdrop-blur-sm transition-opacity duration-300',
    fullScreen ? 'fixed inset-0 top-[90px] z-50 overflow-y-auto' : '',
    className
  );

  const renderContent = () => {
    switch (type) {
      case 'product':
        return <ProductShimmer />;
      case 'category':
        return <CategoryShimmer />;
      case 'home':
        return <HomeShimmer />;
      default:
        return (
          <div className="w-full max-w-md p-8 mx-auto">
            <ShimmerBase className="h-10 w-48 bg-gray-200 rounded mb-6 mx-auto" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <ShimmerBase key={i} className="h-4 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={wrapperClasses} {...props}>
      {renderContent()}
    </div>
  );
};

export const ShimmerText = ({ lines = 1, className = '' }: ShimmerTextProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-100 rounded animate-pulse" />
      ))}
    </div>
  );
};

export const ShimmerImage = ({ className = '', circle = false, ...props }: ShimmerImageProps) => {
  return (
    <div 
      className={cn(
        'bg-gray-100 animate-pulse', 
        circle ? 'rounded-full' : 'rounded-lg',
        className
      )} 
      style={circle ? { aspectRatio: '1/1' } : {}}
      {...props}
    />
  );
};
