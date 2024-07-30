"use client";

// -> NextJS
import Image from "next/image";
import Link from "next/link";

// -> Components
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";

// -> Icons
import githubIcon from "@/assets/images/github.png";

// -> Types
interface IThreeDCardDemoProps {
  title: string;
  description: string;
  link: string;
  github: string;
}

export function ThreeDCardDemo({
  title,
  description,
  link,
  github,
}: IThreeDCardDemoProps) {
  return (
    <CardContainer className="px-4">
      <CardBody className="bg-pallet-secondary relative p-6 w-auto h-auto rounded-xl sm:w-[30rem] hover:shadow-2xl">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/teste.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl z-20 group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <footer className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl font-normal text-pallet-white hover:opacity-50 transition-opacity"
          >
            Acessar
          </CardItem>

          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="flex items-center gap-2 bg-pallet-primary font-medium tracking-[0.5px] px-4 py-2 rounded-full text-pallet-white hover:opacity-60 transition-opacity"
          >
            <Image
              src={githubIcon}
              alt="Icone do github"
              height={24}
              width={24}
            />
            Github
          </CardItem>
        </footer>
      </CardBody>
    </CardContainer>
  );
}
