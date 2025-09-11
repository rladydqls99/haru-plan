import type { DailyListSchema } from "./validation";

export const dailyDefaultList = (): DailyListSchema => {
  return {
    date: new Date().toISOString().split("T")[0],
    userId: "kyb",
    projectList: [
      {
        projectName: "",
        projectId: "",
        taskList: [],
      },
    ],
  };
};
