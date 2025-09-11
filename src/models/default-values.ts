import type {
  DailyPlanSchema,
  DailyProjectSchema,
  TaskSchema,
} from "./validation";

export const defaultTask = (): TaskSchema => {
  return {
    projectId: "",
    taskName: "",
    plannedTime: "",
    actionTime: "",
    progress: 0,
  };
};

export const defaultDailyProject = (): DailyProjectSchema => {
  return {
    projectName: "",
    projectId: "",
    taskList: [defaultTask()],
  };
};

export const dafaultDailyPlan = (): DailyPlanSchema => {
  return {
    date: new Date().toISOString().split("T")[0],
    userId: "kyb",
    projectList: [defaultDailyProject()],
  };
};
