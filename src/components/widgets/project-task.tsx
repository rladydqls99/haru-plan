import { progressOptions } from "@/config/select-options";
import RHFInput from "../rhf/rhf-input";
import RHFSelect from "../rhf/rhf-select";
import { Button } from "../ui/button";

interface Props {
  projectIndex: number;
  taskIndex: number;
  onClickAdd: () => void;
  onClickDelete: () => void;
}
const ProjectTask = ({
  projectIndex,
  taskIndex,
  onClickAdd,
  onClickDelete,
}: Props) => {
  return (
    <div className="flex flex-row gap-2">
      <RHFInput
        name={`projectList.${projectIndex}.taskList.${taskIndex}.taskName`}
        placeholder="enter the task name.."
        className="flex-2"
      />
      <RHFInput
        name={`projectList.${projectIndex}.taskList.${taskIndex}.plannedTime`}
        placeholder="planned time.."
        className="flex-1"
      />
      <RHFInput
        name={`projectList.${projectIndex}.taskList.${taskIndex}.actionTime`}
        placeholder="action time.."
        className="flex-1"
      />
      <RHFSelect
        name={`projectList.${projectIndex}.taskList.${taskIndex}.progress`}
        className="flex-1"
        placeholder="progress"
        options={progressOptions}
      />
      <div className="col-span-1 flex gap-1">
        <Button variant="outline" size="icon" onClick={onClickDelete}>
          -
        </Button>
        <Button size="icon" onClick={onClickAdd}>
          +
        </Button>
      </div>
    </div>
  );
};
export default ProjectTask;
