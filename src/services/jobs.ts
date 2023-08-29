interface IJobData {
  id: number;
  image: string;
  title: string;
  company: string;
  tags: Array<string>;
  info: {
    isNew: boolean;
    timePosted: string;
  };
}

export const getAllJobs = (): Promise<{ data: Array<IJobData> }> => {
  return new Promise((resolve) => {
    return setTimeout(
      () =>
        resolve({
          data: [
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
          ],
        }),
      2000
    );
  });
};
