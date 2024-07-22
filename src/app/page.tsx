"use client";

// -> NextJS
import Image from "next/image";
import Link from "next/link";

// -> Components
import { CircularText } from "@/components/circular-text";
import { Container } from "@/components/container";

// -> Images
import img from "@/assets/img.webp";

export default function Home() {
  return (
    <Container>
      <Image src={img} alt="wdlqkjwd" priority className="" />

      <section className="flex flex-col items-center justify-center w-full h-full pr-6 gap-4 lg:items-start lg:w-1/2">
        <h1 className="text-2xl text-white font-semibold lg:text-5xl">
          Transformando ideias em <br />
          <strong className="text-pallet-red"> aplicações reais </strong>
        </h1>

        <p className="w-full text-zinc-300 text-left font-medium tracking-[-0.5px] break-words lg:max-w-[615px]">
          Como um desenvolvedor full-stack qualificado, me dedico a transformar
          ideias em aplicações web inovadoras. Explore meus projetos e artigos
          mais recentes, mostrando minha experiência em React.js e
          desenvolvimento web
        </p>

        <footer className="grid grid-cols-2 gap-2 w-1/2 mx-auto">
          <Link
            href="#"
            className="flex items-center justify-center min-h-12 bg-pallet-red rounded-lg text-zinc-100 font-semibold hover:opacity-80 transition-opacity"
          >
            Download CV
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center min-h-12 rounded-lg text-zinc-100 font-semibold hover:underline"
          >
            Contato
          </Link>
        </footer>
      </section>

      <CircularText />
    </Container>
  );
}
