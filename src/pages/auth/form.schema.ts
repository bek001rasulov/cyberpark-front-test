import * as yup from "yup";

export const formSchema = yup.object().shape({
  username: yup.string().required('Login kiriting').min(3, "Login kamida 3 ta belgidan iborat bo'lishi kerak"),
  password: yup.string().required('Parol kiriting').min(3, "Parol kamida 3 ta belgidan iborat bo'lishi kerak"),
});
