import { object, string } from "yup";

export const validationSchema = object({
  name: string().required("Nome obrigatório"),
  description: string().required("Descrição é obrigatória"),
  size: string().required("O tamanho do planeta é obrigatório"),
});
