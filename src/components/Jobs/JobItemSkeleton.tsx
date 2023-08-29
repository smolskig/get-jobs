const JobItemSkeleton = () => {
  return (
    <div className="md:gap-8 gap-2 px-4 flex">
      <div className="h-14 w-14 rounded-full bg-gray-300 animate-pulse"></div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="h-4 w-32 rounded-md bg-gray-300 animate-pulse"></div>
        <div className="h-4 w-20 rounded-md bg-gray-300 animate-pulse"></div>
        <div className="flex gap-2 mt-2">
          <div className="h-4 w-10 rounded-md bg-gray-300 animate-pulse"></div>
          <div className="h-4 w-10 rounded-md bg-gray-300 animate-pulse"></div>
          <div className="h-4 w-10 rounded-md bg-gray-300 animate-pulse"></div>
        </div>
      </div>
      <div className="flex gap-4 h-full items-center">
        <div className="hidden md:block w-16 h-5 rounded-md bg-gray-300 animate-pulse"></div>
        <div className="w-20 h-5 rounded-md bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};

export default JobItemSkeleton;
