import { ButtonProps } from "@mantine/core";
import { Control } from "react-hook-form";

export type IMenuDropdownProps = {
  name: string;
  control: Control<any>;
  label?: string;
  options: IOption[];
  onSelect?: () => void;
} & ButtonProps;

export interface IOption {
  label: string;
  value: string;
}
