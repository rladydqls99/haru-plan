export interface Task {
  projectId: string;
  taskName: string;
  plannedTime: string;
  actionTime: string;
  progress: number;
}

export interface projectTaskList {
  projectName: string;
  projectId: string;
  taskList: Task[];
}

export interface DailyList {
  date: string;
  userId: string;
  projectList: projectTaskList;
}
