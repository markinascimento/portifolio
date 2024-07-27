/* eslint-disable import/no-anonymous-default-export */

// -> Lib
import emailjs from "@emailjs/browser";

// -> Types
export interface ISendProps {
  name: string;
  email: string;
  subject: string;
  body: string;
}

class EmailServices {
  async send(params: ISendProps) {
    const template = {
      name: params.email,
      email: params.email,
      subject: params.subject,
      body: params.body,
    };

    emailjs
      .send(
        "service_94ij9n7",
        "template_w7ea8bz",
        template,
        "SN-J0RsZ6a95EJkJh"
      )
      .then((response) => console.log({ response }))
      .catch((error) => console.log({ error }));
  }
}

export default new EmailServices();
