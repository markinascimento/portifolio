"use client";

import { Button } from "@/components/button";
// -> Components
import { Container } from "@/components/container";
import { Input } from "@/components/input";

export default function Contact() {
  return (
    <Container className="flex w-full h-full px-2 lg:px-0">
      <form className="flex flex-col gap-4 w-full max-w-[500px] px-4 mx-auto">
        <Input placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Button>
          <span> Enviar </span>
        </Button>
      </form>
    </Container>
  );
}
