"use client";

// -> Components
import { Skills } from "@/components/skills";
import { TimelineExperience } from "./components/timeline-experience";

export default function About() {
  return (
    <div className="gap-4 px-4 overflow-y-auto lg:flex-col md:px-0">
      <main className="bg-blue-500 w-full">
        <span> dwqdwqkjh </span>
      </main>

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
