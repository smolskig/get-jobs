import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/jobs";

const jobKeys = {
  all: ["jobs"] as const,
  lists: () => [...jobKeys.all, "list"] as const,
  list: (params: { id: number }) => [...jobKeys.lists(), { params }] as const,
  details: () => [...jobKeys.all, "details"] as const,
  detail: (params: { id: number }) =>
    [...jobKeys.details(), { params }] as const,
};

export const useGetJobs = () => {
  return useQuery(jobKeys.all, getAllJobs);
};
