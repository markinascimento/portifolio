"use client";

// -> NextJS
import Image from "next/image";

// -> Controller
import { useContactController } from "./useContactController";

// -> Components
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { SocialButtonLink } from "@/components/social-button-link";
import { Textarea } from "@/components/text-area";

// -> Images
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import whatsapp from "@/assets/whatsapp.png";

export default function Contact() {
  const {
    user,
    address,
    isLoading,
    disabledButton,
    handleSubmitForm,
    handleChangeInputEmail,
    handleChangeInputName,
    handleChangeInputBody,
    handleChangeInputSubject,
  } = useContactController();

  return (
    <Container className="w-full h-full px-2 lg:px-0">
      <main className="space-y-4 w-full max-w-[568px] px-2">
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col gap-4 w-full mx-auto"
        >
          <h1 className="w-full font-bold text-center text-xl text-pallet-white mb-8 lg:text-3xl">
            Vamos <strong className="text-pallet-red"> conversar ? </strong>
          </h1>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <Input
              placeholder="Nome"
              value={user.name}
              onChange={handleChangeInputName}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={user.email}
              onChange={handleChangeInputEmail}
            />
          </div>

          <Input
            placeholder="Assunto"
            value={address.subject}
            onChange={handleChangeInputSubject}
          />

          <Textarea
            placeholder="Mensagem"
            value={address.body}
            onChange={handleChangeInputBody}
          />

          <div className="mt-4">
            <Button type="submit" loading={isLoading} disabled={disabledButton}>
              <span> Conversar </span>
            </Button>
          </div>
        </form>

        <section className="flex w-full items-center gap-4">
          <div className="w-full h-[2px] bg-pallet-sky rounded-full" />
          <small className="text-pallet-sky font-medium"> ou </small>
          <div className="w-full h-[2px] bg-pallet-sky rounded-full" />
        </section>

        <footer className="flex items-center justify-center gap-8 w-full">
          <SocialButtonLink link="https://github.com/markinascimento">
            <Image src={github} alt="Logo do github" width={32} height={32} />
          </SocialButtonLink>

          <SocialButtonLink link="https://linkedin.com/in/marcos-viniciu5">
            <Image
              src={linkedin}
              alt="Logo do linkedin"
              width={28}
              height={28}
            />
          </SocialButtonLink>

          <SocialButtonLink link="https://wa.me/5583998929330?text=">
            <Image
              src={whatsapp}
              alt="Logo do whatsapp"
              width={32}
              height={32}
            />
          </SocialButtonLink>
        </footer>
      </main>
    </Container>
  );
}
