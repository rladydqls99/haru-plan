import { progressOptions } from "@/config/select-options";
import { cn } from "@/lib/utils";
import RHFInput from "../rhf/rhf-input";
import RHFSelect from "../rhf/rhf-select";
import { Button } from "../ui/button";

interface Props {
  isFirst: boolean;
  taskFieldName: string;
  onClickAdd: () => void;
  onClickDelete: () => void;
}
const ProjectTask = ({
  isFirst,
  taskFieldName,
  onClickAdd,
  onClickDelete,
}: Props) => {
  return (
    <div className="flex flex-row gap-2">
      <RHFInput
        name={`${taskFieldName}.taskName`}
        placeholder="enter the task name.."
        className="flex-2"
      />
      <RHFInput
        name={`${taskFieldName}.plannedTime`}
        placeholder="planned time.."
        className="flex-1"
      />
      <RHFInput
        name={`${taskFieldName}.actionTime`}
        placeholder="action time.."
        className="flex-1"
      />
      <RHFSelect
        name={`${taskFieldName}.progress`}
        className="flex-1"
        placeholder="progress"
        options={progressOptions}
      />
      <div className="col-span-1 flex gap-1">
        <Button variant="outline" size="icon" onClick={onClickDelete}>
          -
        </Button>
        <Button
          className={cn(isFirst ? "visible" : "invisible")}
          size="icon"
          onClick={onClickAdd}
        >
          +
        </Button>
      </div>
    </div>
  );
};
export default ProjectTask;
