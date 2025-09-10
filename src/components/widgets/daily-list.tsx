"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import ProjectTaskList from "./project-task-list";

const DailyList = () => {
  const methods = useForm();

  return (
    <Form {...methods}>
      <form
        className="w-full"
        onSubmit={methods.handleSubmit((data) => console.log(data))}
      >
        <ProjectTaskList />
      </form>
    </Form>
  );
};
export default DailyList;
