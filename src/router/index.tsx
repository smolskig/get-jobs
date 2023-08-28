import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import JobPage from "../pages/JobItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<JobPage />}></Route>
    </Route>
  )
);

export default router;
