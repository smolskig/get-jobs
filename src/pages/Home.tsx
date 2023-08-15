import JobList from "../components/JobList";
import Navbar from "../components/Navbar";

const Home = () => {
  const jobData = [
    {
      title: "Frontend Developer",
      company: "2U2",
      image: "Image",
      tags: ["Remote"],
      info: { isNew: true, timePosted: "3 hours ago" },
    },
    {
      title: "Fullstack Developer",
      company: "Attentiv",
      image: "Image",
      tags: ["Remote", "$3k - $5k", "US Based"],
      info: { isNew: true, timePosted: "4 hours ago" },
    },
    {
      title: "Backend Developer",
      company: "Company",
      image: "Image",
      tags: ["Remote", "Latin America", "$8k - $10k"],
      info: { isNew: false, timePosted: "24 hours ago" },
    },
  ];

  return (
    <div className="flex flex-col w-full container mx-auto">
      <Navbar />
      <div className="h-40 mt-28 flex flex-col justify-between items-center">
        <h1 className="text-5xl font-bold text-black text-center">
          Discover new Job Opportunities
        </h1>
        <button className="py-3 px-12 rounded-md bg-primary text-white">
          Search Jobs
        </button>
      </div>

      <h3 className="text-2xl mt-44 font-bold text-black text-center">
        Recent Roles
      </h3>
      <div className="flex justify-center mx-60">
        <JobList jobs={jobData}></JobList>
      </div>
    </div>
  );
};

export default Home;
