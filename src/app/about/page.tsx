"use client";

// -> Components
import { Skills } from "@/components/skills";
import Image from "next/image";
import { TimelineExperience } from "./components/timeline-experience";

import img from '@/assets/images/img.webp';

export default function About() {
  return (
    <main className="w-full h-full overflow-y-auto lg:pr-16">
      <h1 className="w-full text-center text-2xl text-white font-semibold tracking-[1px] mb-12 lg:text-4xl">
        A ação transforma intenção em realidade!
      </h1>

      <section className="flex flex-col-reverse items-center justify-center w-full gap-4 mb-12 lg:flex-row">
        <div className="space-y-2 w-full lg:w-1/2">
          <strong className="text-lg text-zinc-100/50 tracking-[1px]"> Biografia </strong>

          <p className="tracking-[1px] leading-6 text-sm">
            Olá, eu sou Marcos Vinicius, desenvolvedor frontend apaixonado por transformar 
            ideias em experiências digitais que fazem a diferença. <br /> <br /> 
            
            Com mais de 3 anos de experiência no desenvolvimento web, tenho como foco criar 
            interfaces funcionais, acessíveis e que encantem os usuários. Embora meu trabalho 
            esteja principalmente no frontend, adoro explorar o backend em projetos 
            pessoais, o que me ajuda a ter uma visão mais completa e integrada do que 
            desenvolvo. <br /> <br />
            
            Para mim, programação é mais do que escrever código; é sobre 
            resolver problemas e criar experiências que realmente importam. Gosto de 
            cada detalhe, desde o design da interface até a performance da aplicação, 
            sempre buscando novas formas de melhorar e aprender. Estou sempre pronto 
            para novos desafios e animado para contribuir com minha experiência e 
            criatividade no seu próximo projeto. <br /> <br /> 
            
            <strong className="text-pallet-red text-sm"> Vamos criar algo incrível juntos? </strong>
          </p>
        </div>

        <Image 
          src={img}
          alt="Image"
          className="w-full h-auto lg:w:1/2"
        />
      </section>

      <section className="flex flex-col items-center gap-4 mb-12">
        <h2 className="text-2xl text-white font-semibold tracking-[1px] lg:text-4xl">
          Skills
        </h2>
        
        <Skills />
      </section>

      <section className="flex flex-col mb-12">
        <h2 className="w-full text-center text-2xl mb-4 text-white font-semibold tracking-[1px] lg:text-4xl">
          Experiencia
        </h2>
        <TimelineExperience
          company="@armazémPB"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur commodi expedita reiciendis ullam quis eos doloribus maiores officiis quam quidem, placeat dignissimos minima nostrum enim laborum nisi saepe porro!"
          fromUntil="08/2021 - atualmente"
          position="Front-End"
        />

        <TimelineExperience
          company="@vsoft"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur commodi expedita reiciendis ullam quis eos doloribus maiores officiis quam quidem, placeat dignissimos minima nostrum enim laborum nisi saepe porro!"
          fromUntil="01/2021 - 08/2021"
          position="Front-End"
        />
      </section>
    </main>
  );
}
