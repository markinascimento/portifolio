"use client";

// -> Components
import { Container } from "@/components/container";
import { Skills } from "@/components/skills";

export default function About() {
  return (
    <Container className="gap-4 lg:flex-col">
      <main className="bg-blue-500 w-full">
        <span> dwqdwqkjh </span>
      </main>

      <section className="flex flex-1 w-full">
        <Skills />
      </section>
    </Container>
  );
}
