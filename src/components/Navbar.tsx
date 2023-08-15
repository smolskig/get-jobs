const Navbar = () => {
  return (
    <div className="px-4 flex items-center justify-end w-full h-28 md:justify-between">
      <span className="hidden md:block text-md font-medium uppercase">Get Jobs</span>
      <ul className="flex gap-4">
        <li className="font-medium p-1 text-sm md:text-base">Jobs</li>
        <li className="font-medium p-1 text-sm md:text-base">Companies</li>
        <button className="font-medium text-sm p-1 px-4 rounded-md bg-primary text-white">
          I'm hiring
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
