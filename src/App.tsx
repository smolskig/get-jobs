import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollRestoration />
      <div className="flex flex-col w-full container mx-auto mb-24 lg:px-32 xl:px-60">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
