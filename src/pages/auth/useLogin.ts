import { useForm } from "react-hook-form";
import { formSchema } from "./form.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import {postRequest} from "@/shared/modules/postAllRequiest.ts";

export const useLogin = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: yupResolver(formSchema),
  });

    const { mutate, isLoading } = useMutation((data) => postRequest("/auth/login", data), {
      onSuccess: async (res) => {
        navigate("/");
        localStorage.setItem("token", res?.data?.access);
        notifications.show({
          title: "Tizimga kirish",
          message: "Tizimga muvaffaqiyatli kirdingiz",
          color: "teal",
        });
      },
      onError: (err: any) => {
        notifications.show({
          title: "Error",
          message: err?.message,
          color: "red",
        });
      },
    });

  const onSubmit = (data: any) => {
    mutate(data)
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
};
