import z from "zod";

// daily 관련 --------------------------------------------------

// 스키마
const taskSchema = z.object({
  projectId: z.string(),
  taskName: z.string(),
  plannedTime: z.string(),
  actionTime: z.string(),
  progress: z.number().min(0).max(100),
});

const projectTaskListSchema = z.object({
  projectName: z.string(),
  projectId: z.string(),
  taskList: z.array(taskSchema),
});

export const dailyListSchema = z.object({
  date: z.string(),
  userId: z.string(),
  projectList: z.array(projectTaskListSchema),
});

// 타입
export type DailyListSchema = z.infer<typeof dailyListSchema>;

// --------------------------------------------------------------------
