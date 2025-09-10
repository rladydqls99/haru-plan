import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { SelectOption } from "@/types/common-type";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface Props {
  name: string;
  placeholder: string;
  className?: string;
  selectClassName?: string;
  label?: string;
  description?: string;
  options: SelectOption[];
}
const RHFSelect = (props: Props) => {
  const {
    name,
    placeholder,
    className,
    selectClassName,
    label,
    description,
    options,
  } = props;

  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className={cn("w-full", selectClassName)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default RHFSelect;
