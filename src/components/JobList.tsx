import { useNavigate } from "react-router";

interface JobListProps {
  jobs: Array<{
    id: number;
    image: string;
    title: string;
    company: string;
    tags: Array<string>;
    info: {
      isNew: boolean;
      timePosted: string;
    };
  }>;
}

const JobList = ({ jobs }: JobListProps) => {
  const navigate = useNavigate();

  const handleOpenJob = (id: number) => {
    navigate(id.toString());
  };

  return (
    <div className="flex flex-col w-full mt-16 gap-12 mb-10">
      {jobs?.map((job) => {
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
