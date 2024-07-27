// -> Query lib
import { useMutation } from "react-query";

// -> Input li
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// -> Toast lib
import toast from "react-hot-toast";

// -> API
import EmailServices, { type ISendProps } from "@/services/EmailServices";

// -> Types
import { schemaForm, type FormSchema } from "./schema";

export function useContactController() {
  const {
    reset,
    register,
    formState: { errors, isValid },
    handleSubmit: handleSubmitForm,
  } = useForm<FormSchema>({
    resolver: zodResolver(schemaForm),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (params: ISendProps) => {
      return await EmailServices.send(params);
    },
  });

  const handleSubmit = handleSubmitForm(async (data) => {
    try {
      await mutateAsync(data);
      reset();
      toast.success("E-mail enviado com sucesso :)");
    } catch {
      toast.error("Erro ao enviar o e-mail, tente novamente em instantes :(");
    }
  });

  return {
    errors,
    isValid,
    isLoading,
    register,
    handleSubmit,
  };
}
