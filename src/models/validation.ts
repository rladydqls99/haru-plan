import z from "zod";

// daily 관련 --------------------------------------------------

// 스키마
export const taskSchema = z.object({
  projectId: z.string(),
  taskName: z.string(),
  plannedTime: z.string(),
  actionTime: z.string(),
  progress: z.number().min(0).max(100),
});

export const dailyProjectSchema = z.object({
  projectName: z.string(),
  projectId: z.string(),
  taskList: z.array(taskSchema),
});

export const dailyPlanSchema = z.object({
  date: z.string(),
  userId: z.string(),
  projectList: z.array(dailyProjectSchema),
});

// 타입
export type TaskSchema = z.infer<typeof taskSchema>;
export type DailyProjectSchema = z.infer<typeof dailyProjectSchema>;
export type DailyPlanSchema = z.infer<typeof dailyPlanSchema>;

// --------------------------------------------------------------------
