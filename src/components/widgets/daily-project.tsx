import { useFieldArray, useFormContext } from "react-hook-form";
import { projectOptions } from "@/config/select-options";
import { defaultTask } from "@/models/default-values";
import RHFSelect from "../rhf/rhf-select";
import ProjectTask from "./project-task";

interface Props {
  projectIndex: number;
  onClickDelete: () => void;
}
const DailyProject = ({ projectIndex, onClickDelete }: Props) => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `projectList.${projectIndex}.taskList`,
  });

  const handleTaskAdd = () => {
    append(defaultTask());
  };

  const handleTaskDelete = (taskIndex: number) => {
    if (taskIndex === 0) {
      onClickDelete();
      return;
    }

    remove(taskIndex);
  };
  return (
    <div className="grid grid-cols-8 gap-2">
      <RHFSelect
        name={`projectList.${projectIndex}.projectName`}
        placeholder="project"
        className="col-span-2"
        options={projectOptions}
      />
      <div className="flex flex-col space-y-2 col-span-6">
        {fields.map((field, taskIndex) => (
          <ProjectTask
            key={field.id}
            isFirst={field.id === fields[0].id}
            taskFieldName={`projectList.${projectIndex}.taskList.${taskIndex}`}
            onClickAdd={handleTaskAdd}
            onClickDelete={() => handleTaskDelete(taskIndex)}
          />
        ))}
      </div>
    </div>
  );
};
export default DailyProject;
