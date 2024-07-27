// -> ReactJS
import { useState, type ChangeEvent, type FormEvent } from "react";

// -> Query lib
import { useMutation } from "react-query";

// -> API
import EmailServices, { type ISendProps } from "@/services/EmailServices";

// -> Utils
import { isValidEmail } from "@/lib/isValidEmail";

// -> Types
export interface IUserProps {
  name: string;
  email: string;
}
export interface IAddressProps {
  subject: string;
  body: string;
}

export function useContactController() {
  const [user, setUser] = useState<IUserProps>({
    name: "",
    email: "",
  });

  const [address, setAddress] = useState<IAddressProps>({
    body: "",
    subject: "",
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (params: ISendProps) => {
      return await EmailServices.send(params);
    },
  });

  function handleChangeInputName(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      name: event.target.value,
    });
  }

  function handleChangeInputEmail(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      email: event.target.value,
    });
  }

  function handleChangeInputBody(event: ChangeEvent<HTMLTextAreaElement>) {
    setAddress({
      ...address,
      body: event.target.value,
    });
  }

  function handleChangeInputSubject(event: ChangeEvent<HTMLInputElement>) {
    setAddress({
      ...address,
      subject: event.target.value,
    });
  }

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    try {
      const params = {
        name: user.name,
        email: user.email,
        body: address.body,
        subject: address.subject,
      };

      await mutateAsync(params);
    } catch (error) {
      console.log({ error });
    }
  }

  const disabledButton =
    !user.email ||
    !user.name ||
    !address.body ||
    !address.subject ||
    !isValidEmail(user.email);

  return {
    user,
    address,
    isLoading,
    disabledButton,
    handleSubmitForm,
    handleChangeInputName,
    handleChangeInputEmail,
    handleChangeInputBody,
    handleChangeInputSubject,
  };
}
