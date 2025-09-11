"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { dailyDefaultList } from "@/models/default-values";
import { type DailyListSchema, dailyListSchema } from "@/models/validation";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { Separator } from "../ui/separator";
import ProjectTaskList from "./project-task-list";

const DailyList = () => {
  const methods = useForm<DailyListSchema>({
    defaultValues: dailyDefaultList(),
    resolver: zodResolver(dailyListSchema),
  });

  return (
    <Form {...methods}>
      <form
        className="w-full space-y-6"
        onSubmit={methods.handleSubmit((data) => console.log(data))}
      >
        <div className="flex items-center justify-between m-0">
          <h2 className="text-xl font-semibold text-foreground">
            일일 업무 목록
          </h2>
          <Button type="submit" size="sm">
            저장
          </Button>
        </div>
        <Separator className="mt-4 mb-6" />
        <ProjectTaskList />
      </form>
    </Form>
  );
};
export default DailyList;
