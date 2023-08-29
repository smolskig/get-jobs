import { useNavigate } from "react-router";
import { useGetJobs } from "../hooks/useJobs";

const JobList = () => {
  const { data, isLoading } = useGetJobs();
  const navigate = useNavigate();

  const handleOpenJob = (id: number) => {
    navigate(id.toString());
  };

  return (
    <div className="flex flex-col w-full mt-16 gap-12 mb-10">
      {isLoading && (
        <div className="px-4 flex gap-8">
          <div className="h-20 w-20 rounded-lg bg-gray-300 animate-pulse"></div>
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
            <div className="w-16 h-5 rounded-md bg-gray-300 animate-pulse"></div>
            <div className="w-20 h-5 rounded-md bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      )}
      {!isLoading &&
        data?.data.map((job) => {
          return (
            <div
              key={job.title}
              onClick={() => handleOpenJob(job.id)}
              className="md:gap-8 flex gap-2 rounded-md pb-8 px-4 border-x-0 border-t-0 border border-solid border-secondary cursor-pointer"
            >
              <img
                src={job.image}
                className="flex items-center justify-center w-14 h-14 rounded-full object-cover  "
              />
              <div className="flex flex-col flex-1">
                <span className="text-xs md:text-base">{job.company}</span>
                <span className="font-semibold text-sm md:text-lg">
                  {job.title}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {job.tags.map((tag) => (
                    <div
                      key={tag}
                      className="md:px-2 md:text-sm px-1 border border-solid text-xs border-secondary rounded-md text-gray-500"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                {job.info.isNew && (
                  <div className="hidden md:block px-4 py-1 text-sm border border-solid bg-primary rounded-md text-white">
                    New
                  </div>
                )}
                <span className="py-1 text-sm text-gray-500">
                  {job.info.timePosted}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default JobList;
