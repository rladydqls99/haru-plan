import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface Props {
  name: string;
  placeholder: string;
  className?: string;
  InputClassName?: string;
  label?: string;
  description?: string;
}
const RHFInput = (props: Props) => {
  const { name, placeholder, className, InputClassName, label, description } =
    props;

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              className={cn("w-full", InputClassName)}
              placeholder={placeholder}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default RHFInput;
