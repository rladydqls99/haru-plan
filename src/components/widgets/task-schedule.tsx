import { Input } from "@/components/ui/input";
import { progressOptions, projectOptions } from "@/config/select-options";
import RHFSelect from "../rhf/rhf-select";

const TaskSchedule = () => {
  return (
    <div className="grid grid-cols-8 gap-2 ">
      <RHFSelect
        className="col-span-2"
        placeholder="project"
        options={projectOptions}
      />
      <Input className="col-span-3" placeholder="enter the task name.." />
      <Input className="col-span-1" placeholder="planning time.." />
      <Input className="col-span-1" placeholder="action time.." />
      <RHFSelect
        className="col-span-1"
        placeholder="progress"
        options={progressOptions}
      />
    </div>
  );
};
export default TaskSchedule;
