import Button from "../components/Button";
import JobList from "../components/JobList";
import Navbar from "../components/Navbar";

const Home = () => {
  const jobData = [
    {
      id: 0,
      title: "Frontend Developer",
      company: "2U2",
      image:
        "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1426518294/lhub3cdefsjd70ivt2rm.png",
      tags: ["Remote"],
      info: { isNew: true, timePosted: "3 hours ago" },
    },
    {
      id: 1,
      title: "Fullstack Developer",
      company: "Attentiv",
      image:
        "https://images.prismic.io/brandfetch/562b048d-b273-42e1-bee1-fa0147809aa3_attentive+04.png?auto=compress,format",
      tags: ["Remote", "$3k - $5k", "US Based"],
      info: { isNew: true, timePosted: "4 hours ago" },
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Palantir",
      image: "https://ctovision.com/wp-content/uploads/palantir.png",
      tags: ["Remote", "Latin America", "$8k - $10k"],
      info: { isNew: false, timePosted: "24 hours ago" },
    },
  ];

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
        <JobList jobs={jobData}></JobList>
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
