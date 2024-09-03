// -> NextJS
import Image from "next/image";

// -> Constants
import { listSkills } from "@/constants/listSkills";

export function Skills() {
  return (
    <div 
      className="flex flex-wrap max-w-full items-center justify-center p-6 
      bg-[#333] gap-x-4 gap-y-8 rounded-lg lg:gap-x-12 lg:gap-y-12"
    >
      {listSkills.map((skill) => (
        <div 
          key={skill.name}
          className="flex flex-col items-center justify-center rounded-full bg-pallet-secondary 
          w-14 h-14 md:w-28 md:h-28"
        >
          <Image
            src={skill.image}
            alt={`Tecnologia ${skill.name}`}
            className="w-8 h-8 md:w-14 md:h-14 rounded-lg"
            priority
          />
          <small className="text-[10px] font-semibold hidden md:block"> {skill.name} </small>
        </div>
      ))}
    </div>
  );
}
