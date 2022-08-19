import { object, string } from "yup";

export const validationSchema = object({
  name: string().required("Nome obrigatório"),
  description: string().required("Descrição é obrigatória"),
  durationDay: string().required("Campo obrigatório"),
  surfaceArea: string().required("Campo obrigatório"),
  gravity: string().required("Campo obrigatório"),
  sunDistance: string().required("Campo obrigatório"),
});
