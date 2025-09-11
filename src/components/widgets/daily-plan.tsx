"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { dafaultDailyPlan, defaultDailyProject } from "@/models/default-values";
import { type DailyPlanSchema, dailyPlanSchema } from "@/models/validation";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { Separator } from "../ui/separator";
import DailyProject from "./daily-project";

const DailyPlan = () => {
  const methods = useForm<DailyPlanSchema>({
    defaultValues: dafaultDailyPlan(),
    resolver: zodResolver(dailyPlanSchema),
  });

  const handleSubmit = methods.handleSubmit((data) => console.log(data));

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "projectList",
  });

  const handleProjectAdd = () => {
    append(defaultDailyProject());
    console.log(fields);
  };

  return (
    <Form {...methods}>
      <form className="w-full space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between m-0">
          <h2 className="text-xl font-semibold text-foreground">
            일일 업무 목록
          </h2>
          <div className="space-x-2">
            <Button onClick={handleProjectAdd} type="button" size="sm">
              프로젝트 추가
            </Button>
            <Button type="submit" size="sm">
              저장
            </Button>
          </div>
        </div>
        <Separator className="mt-4 mb-6" />
        {fields.map((field, index) => (
          <DailyProject key={field.id} projectIndex={index} />
        ))}
      </form>
    </Form>
  );
};
export default DailyPlan;
