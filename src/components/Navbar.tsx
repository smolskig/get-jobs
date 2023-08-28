import Button from "./Button";

const Navbar = () => {
  return (
    <div className="px-4 flex items-center justify-end w-full h-28 md:justify-between">
      <span className="hidden md:block text-md font-medium uppercase">Get Jobs</span>
      <ul className="flex gap-4">
        <Button className="font-medium py-2 px-2 text-sm md:text-base">Jobs</Button>
        <Button className="font-medium py-2 px-2 text-sm md:text-base">Companies</Button>
        <Button className="font-medium text-sm py-2 px-4 rounded-md bg-primary text-white">
          I'm hiring
        </Button>
      </ul>
    </div>
  );
};

export default Navbar;
