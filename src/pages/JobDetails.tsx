import { useParams } from "react-router";
import Button from "../components/Button";

const JobDetails = () => {
  const param = useParams();
  return (
    <div className="flex flex-col gap-14 mt-20 px-4">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-400">{param.id}</div>
        <div className="flex flex-col flex-1">
          <span>2U</span>
          <span className="text-2xl font-bold">Frontend Developer</span>
        </div>
        <div>
          <Button className="py-3 px-4 bg-primary text-white">Apply Now</Button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
        pharetra elit. Nullam ullamcorper dui in nunc pharetra tincidunt. Cras
        eleifend fringilla libero, ac vehicula ex placerat et. Maecenas enim
        justo, consequat sit amet nisi sed, dignissim elementum dolor. Ut
        rhoncus velit id tempor iaculis. Phasellus feugiat finibus augue nec
        sagittis. Vivamus pulvinar auctor nisi at lobortis. Praesent iaculis leo
        sit amet sollicitudin sodales. Integer sit amet risus tempus, bibendum
        purus in, malesuada lorem. Aliquam feugiat nulla orci. Nulla venenatis
        eleifend ex, sit amet commodo nulla. Nulla varius vitae magna vitae
        pulvinar. Donec lorem orci, bibendum nec vulputate eget, molestie in
        nisi.
      </p>
      <p>
        Curabitur imperdiet nisi vel tincidunt tincidunt. Integer faucibus nisl
        quam, eu iaculis urna molestie quis. Cras imperdiet pulvinar dui, at
        vulputate orci pretium id. Ut sed interdum enim, non sodales nulla.
        Aliquam vehicula ac diam vestibulum eleifend. Integer orci elit, mollis
        nec velit eu, hendrerit porttitor lacus. Phasellus at tincidunt diam.
        Suspendisse sed lectus sit amet elit tincidunt fringilla. Vivamus
        rhoncus arcu sed mauris hendrerit interdum.
      </p>
      <ul className="list-disc pl-8">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Donec dapibus elit in lorem semper dictum.</li>
        <li>Proin gravida turpis eu condimentum venenatis.</li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
          pariatur.
        </li>
        <li>Proin gravida turpis eu condimentum venenatis.</li>
      </ul>
      <p>
        Curabitur imperdiet nisi vel tincidunt tincidunt. Integer faucibus nisl
        quam, eu iaculis urna molestie quis. Cras imperdiet pulvinar dui, at
        vulputate orci pretium id. Ut sed interdum enim, non sodales nulla.
        Aliquam vehicula ac diam vestibulum eleifend. Integer orci elit, mollis
        nec velit eu, hendrerit porttitor lacus. Phasellus at tincidunt diam.
        Suspendisse sed lectus sit amet elit tincidunt fringilla. Vivamus
        rhoncus arcu sed mauris hendrerit interdum.
      </p>
      <div className="flex gap-4">
        <Button className="py-3 px-4 bg-primary text-white">Apply Now</Button>
        <Button className="py-3 px-4  text-primary border-2 border-primary rounded-md">
          More Jobs
        </Button>
      </div>
    </div>
  );
};

export default JobDetails;
