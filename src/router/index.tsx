import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<JobDetails />}></Route>
    </Route>
  )
);

export default router;
