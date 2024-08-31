"use client";

// -> Components
import { ThreeDCardDemo } from "./components/ThreeDCard";

export default function Projects() {
  return (
    <div className="w-full h-full overflow-y-auto p-4">
      <header className="flex flex-col w-full pt-4">
        <h1 className="text-xl text-white font-semibold lg:text-4xl">
          Meus trabalhos
        </h1>

        <h2 className="font-medium text-gray-300">
          Esses são alguns dos projetos que trabalhei recentemente.
        </h2>
      </header>

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
    </div>
  );
}
