import JobList from "../components/JobList";
import Navbar from "../components/Navbar";

const Home = () => {
  const jobData = [
    {
      title: "Frontend Developer",
      company: "2U2",
      image:
        "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1426518294/lhub3cdefsjd70ivt2rm.png",
      tags: ["Remote"],
      info: { isNew: true, timePosted: "3 hours ago" },
    },
    {
      title: "Fullstack Developer",
      company: "Attentiv",
      image: "https://images.prismic.io/brandfetch/562b048d-b273-42e1-bee1-fa0147809aa3_attentive+04.png?auto=compress,format",
      tags: ["Remote", "$3k - $5k", "US Based"],
      info: { isNew: true, timePosted: "4 hours ago" },
    },
    {
      title: "Backend Developer",
      company: "Palantir",
      image: "https://ctovision.com/wp-content/uploads/palantir.png",
      tags: ["Remote", "Latin America", "$8k - $10k"],
      info: { isNew: false, timePosted: "24 hours ago" },
    },
  ];

  return (
    <div className="flex flex-col w-full container mx-auto lg:px-32 xl:px-60">
      <Navbar />
      <div className="h-40 mt-20 flex flex-col justify-between items-center lg:mt-28">
        <h1 className="text-4xl mb-10 font-bold text-black text-center lg:text-5xl">
          Discover new Job Opportunities
        </h1>
        <button className="py-3 px-12 rounded-md bg-primary text-white">
          Search Jobs
        </button>
      </div>

      <h3 className=" text-2xl mt-44 font-bold text-black text-center">
        Last Jobs
      </h3>
      <div className="flex justify-center lg:mx-14">
        <JobList jobs={jobData}></JobList>
      </div>
    </div>
  );
};

export default Home;
