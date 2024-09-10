import { type Control, Controller } from "react-hook-form";
import { type PasswordInputProps } from "@mantine/core";
import {MantinePasswordInput} from "./style";
import { useDisclosure } from "@mantine/hooks";

type IPasswordInput = PasswordInputProps & {
    name: string;
    control: Control<any>;
};

export const InputPassword = ({
                                  control,
                                  ...props
                              }: Omit<IPasswordInput, "type">) => {
    const [visible, { toggle }] = useDisclosure(false);

    return (
        <Controller
            name={props.name}
            control={control}
            render={({ field, formState: { errors } }) => {
                return (
                    <MantinePasswordInput
                        {...props}
                        {...field}
                        value={field.value ?? ""}
                        error={
                            errors[props.name] ? (errors[props.name]?.message as string) : ""
                        }
                        visible={visible}
                        onVisibilityChange={toggle}
                        styles={{
                            input: errors[props.name] && {
                                border: "0.795144px solid #fa5252 !important",
                            },
                        }}
                    />
                );
            }}
        />
    );
};
