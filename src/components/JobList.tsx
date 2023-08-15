interface JobListProps {
  jobs: Array<{
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
  return (
    <div className="flex flex-col w-full mt-16 gap-14 mb-10">
      {jobs?.map((job) => {
        return (
          <div
            key={job.title}
            className="flex gap-8 rounded-md pb-5 px-4 border-x-0 border-t-0 border border-solid border-secondary"
          >
            <div className="flex items-center justify-center w-20 h-auto bg-gray-300 text-gray-400">
              {job.image}
            </div>
            <div className="flex flex-col flex-1">
              <span>{job.company}</span>
              <span className="font-semibold text-lg">{job.title}</span>
              <div className="flex gap-2 mt-1">
                {job.tags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 border border-solid text-sm border-secondary rounded-md text-gray-500"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              {job.info.isNew && (
                <div className="px-4 py-1 text-sm border border-solid bg-primary rounded-md text-white">
                  New
                </div>
              )}
              <span className="py-1 text-sm text-gray-500">{job.info.timePosted}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobList;
