"use client";

// -> NextJS
import Image from "next/image";
import Link from "next/link";

// -> Components
import { CircularText } from "@/components/circular-text";
import { Container } from "@/components/container";
import { TextGenerateEffect } from "@/components/text-generate-effect";

// -> Images
import img from "@/assets/images/img.webp";

export default function Home() {
  return (
    <Container className="overflow-hidden">
      <Image src={img} alt="wdlqkjwd" priority />

      <aside className="flex flex-col items-center justify-center w-full h-full px-4 gap-4 lg:items-start lg:w-1/2">
        <h1 className="text-2xl text-white font-semibold lg:text-5xl">
          Transformando ideias em <br />
          <strong className="text-pallet-red">aplicações reais</strong>
        </h1>

        <TextGenerateEffect
          className="w-full text-zinc-300 text-left font-medium tracking-[-0.5px] break-words lg:max-w-[615px]"
          words="Como desenvolvedor frontend com +3 anos de experiência, meu foco é transformar ídeias em 
          interfaces web atrativas e funcionais. Utilizando as melhores tecnologias e práticas do mercado, como ReactJS,
          me dedico a criar experiência envolventes e cativantes para os usuários."
        />

        <footer className="grid grid-cols-2 gap-2 w-full mx-auto lg:w-1/2">
          <a
            type="button"
            download="currículo - Marcos Vinicius.pdf"
            href="/currículo.pdf"
            className="flex items-center justify-center min-h-12 bg-pallet-red rounded-lg text-zinc-100 font-semibold hover:opacity-80 transition-opacity"
          >
            Download CV
          </a>

          <Link
            href="/contact"
            className="flex items-center justify-center min-h-12 rounded-lg text-zinc-100 font-semibold hover:underline"
          >
            Contato
          </Link>
        </footer>
      </aside>

      <CircularText />
    </Container>
  );
}
