// -> Components
import { Timeline } from "@/components/menu/timeline";

// -> Types
interface TimelineExperienceProps {
  position: string;
  company: string;
  fromUntil: string;
  description: string;
}

export function TimelineExperience(props: TimelineExperienceProps) {
  return (
    <Timeline>
      <h3 className="font-bold text-pallet-white text-sm tracking-[1px] md:text-base">
        {props.position}{" "}
        <strong className="text-pallet-red text-xs md:text-base">
          {props.company}
        </strong>
      </h3>
      <p className="text-xs font-medium text-gray-400">{props.fromUntil}</p>
      <p className="text-sm font-medium text-white w-full">
        {props.description}
      </p>
    </Timeline>
  );
}
