"use client";

import { Container } from "@/components/container";
import { Skills } from "@/components/skills";

export default function About() {
  return (
    <Container className="gap-4 lg:flex-col">
      <div className="bg-blue-500 w-full">
        <span> dwqdwqkjh </span>
      </div>

      <div className="flex flex-1 w-full">
        <Skills />
      </div>
      {/*  */}
    </Container>
  );
}
