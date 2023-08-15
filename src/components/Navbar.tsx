const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-28">
      <span className="text-md font-medium uppercase">Get Jobs</span>
      <ul className="flex gap-4">
        <li className="font-medium p-1">Jobs</li>
        <li className="font-medium p-1">Companies</li>
        <button className="font-medium text-sm p-1 px-4 rounded-md bg-primary text-white">
          I'm hiring
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
