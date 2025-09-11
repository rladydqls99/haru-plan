import { progressOptions, projectOptions } from "@/config/select-options";
import RHFInput from "../rhf/rhf-input";
import RHFSelect from "../rhf/rhf-select";
import { Button } from "../ui/button";

const DailyProject = () => {
  return (
    <div className="flex gap-2">
      <RHFSelect
        name="project"
        placeholder="project"
        className="flex-2"
        options={projectOptions}
      />
      <RHFInput
        name="taskName"
        placeholder="enter the task name.."
        className="flex-3"
      />
      <RHFInput
        name="plannedTime"
        placeholder="planned time.."
        className="flex-1"
      />
      <RHFInput
        name="actionTime"
        placeholder="action time.."
        className="flex-1"
      />
      <RHFSelect
        name="progress"
        className="flex-1"
        placeholder="progress"
        options={progressOptions}
      />
      <div className="col-span-1 flex gap-1">
        <Button variant="outline" size="icon">
          -
        </Button>
        <Button size="icon">+</Button>
      </div>
    </div>
  );
};
export default DailyProject;
