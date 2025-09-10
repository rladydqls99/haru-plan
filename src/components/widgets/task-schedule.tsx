import { Input } from "@/components/ui/input";
import { progressOptions, projectOptions } from "@/config/select-options";
import RHFSelect from "../rhf/rhf-select";
import { Button } from "../ui/button";

const TaskSchedule = () => {
  return (
    <div className="grid grid-cols-9 gap-2 ">
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
      <div className="col-span-1 flex gap-1">
        <Button variant="outline" size="icon">
          -
        </Button>
        <Button size="icon">+</Button>
      </div>
    </div>
  );
};
export default TaskSchedule;
