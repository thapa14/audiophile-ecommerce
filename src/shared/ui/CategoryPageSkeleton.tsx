import { ShimmerImage, ShimmerText } from './ShimmerLoader';
import clsx from 'clsx';

export const CategoryPageSkeleton = () => {
  return (
    <div className="">
      {/* Category Header */}
      <div className="flex h-48 w-full items-center justify-center bg-black pt-[90px] text-white sm:h-84">
        <ShimmerText className="h-20 w-48" />
      </div>

      {/* Product List */}
      <div className="my-16 flex flex-col gap-y-32 sm:my-30">
        {[1, 2, 3].map((item, index) => (
          <div 
            key={item} 
            className={clsx(
                           'container flex flex-col items-center gap-y-8 sm:gap-y-[52px] lg:flex-row lg:gap-x-20',
                           (index ?? 0) % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                       )}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <ShimmerImage className="h-80 w-full rounded-lg" />
            </div>

            {/* Product Info */}
            <div className="flex w-full flex-col items-center gap-y-6 sm:w-[572px] lg:w-1/2 lg:items-start">
              <ShimmerText className="h-6 w-32" />
              <ShimmerText className="h-12 w-3/4" />
              {[...Array(3)].map((_, i) => (
                <ShimmerText key={i} className="h-4 w-full" />
              ))}
              <div className="h-12 w-40 rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Category List */}
      <div className="container my-20">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="relative mb-8 h-40 w-full">
                <ShimmerImage className="h-full w-full rounded-lg" />
              </div>
              <ShimmerText className="mb-4 h-6 w-32" />
              <div className="h-12 w-32 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
