import Button from "../components/Button";
import JobList from "../components/JobList";

const Home = () => {
  return (
    <>
      <div className="h-40 mt-20 flex flex-col justify-between items-center lg:mt-28">
        <h1 className="text-4xl mb-10 font-bold text-black text-center lg:text-5xl">
          Discover new Job Opportunities
        </h1>
        <Button className="bg-primary text-white">Search Jobs</Button>
      </div>

      <h3 className=" text-2xl mt-44 font-bold text-black text-center">
        Last Jobs
      </h3>
      <div className="flex justify-center lg:mx-14">
        <JobList></JobList>
      </div>
      <div className="mt-8 w-full flex justify-center">
        <Button className="border-2 border-solid border-primary text-primary hover:bg-gray-50">
          See More
        </Button>
      </div>
    </>
  );
};

export default Home;
