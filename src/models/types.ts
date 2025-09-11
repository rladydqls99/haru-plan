export interface Task {
  projectId: string;
  taskName: string;
  plannedTime: string;
  actionTime: string;
  progress: number;
}

export interface DailyProject {
  projectName: string;
  projectId: string;
  taskList: Task[];
}

export interface DailyPlan {
  date: string;
  userId: string;
  projectList: DailyProject;
}
