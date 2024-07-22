"use client";

// -> NextJS
import Image from "next/image";

// -> Components
import { CircularText } from "@/components/circular-text";
import { Container } from "@/components/container";

// -> Images
import img from "@/assets/img.webp";

export default function Home() {
  return (
    <Container>
      <Image src={img} alt="wdlqkjwd" priority className="" />

      <section className="flex flex-col items-start justify-center px-2 gap-4">
        <h1 className="text-5xl text-white font-semibold w-[615px]">
          Transformando ideias em <br />
          <strong className="text-pallet-red"> aplicações reais </strong>
        </h1>

        <p className="w-full max-w-[615px] text-zinc-300 font-medium tracking-[-0.5px]">
          Como um desenvolvedor full-stack qualificado, me dedico a transformar
          ideias em aplicações web inovadoras. Explore meus projetos e artigos
          mais recentes, mostrando minha experiência em React.js e
          desenvolvimento web
        </p>

        <div className="flex gap-4">
          <button> 1 </button>
          <button> 2 </button>
        </div>
      </section>

      <CircularText />
    </Container>
  );
}
