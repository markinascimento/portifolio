"use client";

// -> Components
import { Container } from "@/components/container";
import { ThreeDCardDemo } from "./components/ThreeDCard";

export default function Projects() {
  return (
    <Container className="space-y-4 overflow-y-auto">
      <h1 className="text-2xl text-center text-white font-semibold lg:text-4xl">
        Meus trabalhos
      </h1>

      <main className="grid grid-cols-1 gap-8 w-full md:grid-cols-2 pb-4">
        <ThreeDCardDemo
          link="https://todo-list-livid-one-54.vercel.app/"
          github="https://github.com/markinascimento/todo-list"
          title="Todo List"
          description="Uma aplicação intuitiva que ajuda você a organizar suas tarefas
          diárias de forma prática e eficiente."
        />

        <ThreeDCardDemo
          link="https://todo-list-livid-one-54.vercel.app/"
          github="https://github.com/markinascimento/todo-list"
          title="Todo List"
          description="Uma aplicação intuitiva que ajuda você a organizar suas tarefas
          diárias de forma prática e eficiente."
        />

        <ThreeDCardDemo
          link="https://todo-list-livid-one-54.vercel.app/"
          github="https://github.com/markinascimento/todo-list"
          title="Todo List"
          description="Uma aplicação intuitiva que ajuda você a organizar suas tarefas
          diárias de forma prática e eficiente."
        />

        <ThreeDCardDemo
          link="https://todo-list-livid-one-54.vercel.app/"
          github="https://github.com/markinascimento/todo-list"
          title="Todo List"
          description="Uma aplicação intuitiva que ajuda você a organizar suas tarefas
          diárias de forma prática e eficiente."
        />
      </main>
    </Container>
  );
}
