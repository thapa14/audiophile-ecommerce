import { ShimmerImage, ShimmerText } from './ShimmerLoader';

export const ProductDetailsSkeleton = () => {
  return (
    <div className="container pt-[90px]">
      <div className="mt-4 mb-6 md:mt-20 md:mb-14">
        <div className="h-8 w-24 rounded bg-gray-200"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="w-full md:w-1/2 space-y-4">
          <ShimmerImage className="h-80 w-full rounded-lg" />
          <div className="grid grid-cols-3 gap-4">
            <ShimmerImage className="h-20 w-full rounded-lg" />
            <ShimmerImage className="h-20 w-full rounded-lg" />
            <ShimmerImage className="h-20 w-full rounded-lg" />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <ShimmerText className="h-8 w-1/3" />
          <ShimmerText className="h-12 w-3/4" />
          {[...Array(4)].map((_, i) => (
            <ShimmerText key={i} className="h-4 w-full" />
          ))}
          <ShimmerText className="h-6 w-20" />
          <div className="flex items-center space-x-4 pt-4">
            <div className="h-12 w-32 rounded bg-gray-200"></div>
            <div className="h-12 w-40 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-bold">Features</h3>
          {[...Array(8)].map((_, i) => (
            <ShimmerText key={i} className="h-4 w-full mb-2" />
          ))}
        </div>
        <div>
          <h3 className="mb-6 text-2xl font-bold">In the Box</h3>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center">
                <ShimmerText className="mr-4 h-4 w-4" />
                <ShimmerText className="h-4 w-32" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="my-20 grid grid-cols-1 gap-4 md:grid-cols-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center space-y-4">
            <ShimmerImage className="h-40 w-full rounded-lg" />
            <ShimmerText className="h-6 w-3/4" />
            <div className="h-10 w-32 rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
