const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-20">
      <span className="text-md font-medium uppercase">Get Jobs</span>
      <ul className="flex gap-6">
        <li className="font-medium p-1">Vagas</li>
        <li className="font-medium p-1">Empresas</li>
        <button className="font-medium text-sm p-1 px-2 rounded-md bg-primary text-white">
          Quero Anunciar
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
