"use client";

// -> Components
import { Skills } from "@/components/skills";
import { TimelineExperience } from "./components/timeline-experience";

export default function About() {
  return (
    <div className="w-full h-full overflow-y-auto p-4 lg:pr-16">
      <main className="bg-blue-500 w-full">
        <span> dwqdwqkjh </span>
      </main>

      <p className="tracking-[1px] leading-6">
        Olá, eu sou Jonny Viccari, desenvolvedor frontend apaixonado por transformar 
        ideias em experiências digitais que fazem a diferença. Com 3 anos de 
        experiência no desenvolvimento web, tenho como foco criar interfaces 
        funcionais, acessíveis e que encantem os usuários. Embora meu trabalho 
        esteja principalmente no frontend, adoro explorar o backend em projetos 
        pessoais, o que me ajuda a ter uma visão mais completa e integrada do que 
        desenvolvo. Para mim, programação é mais do que escrever código; é sobre 
        resolver problemas e criar experiências que realmente importam. Gosto de 
        cada detalhe, desde o design da interface até a performance da aplicação, 
        sempre buscando novas formas de melhorar e aprender. Estou sempre pronto 
        para novos desafios e animado para contribuir com minha experiência e 
        criatividade no seu próximo projeto. Vamos criar algo incrível juntos?
      </p>

      <Skills />

      <div className="w-full max-w-[1024x] mx-auto mt-8">
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
      </div>
    </div>
  );
}
