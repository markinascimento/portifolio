// -> NextJS
import Image from "next/image";

// Swipper lib
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// -> Constants
import { listSkills } from "@/constants/listSkills";

export function Skills() {
  return (
    <div className="w-full h-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="w-full max-w-[768px] mx-auto px-4"
      >
        {listSkills.map((skill) => (
          <SwiperSlide
            key={skill.name}
            className="max-w-48 min-h-48 rounded-2xl bg-pallet-primary border-4 border-pallet-cyan"
          >
            <div className="flex flex-col gap-1 items-center justify-center max-w-48 min-h-48">
              <Image
                src={skill.image}
                alt={`Tecnologia ${skill.name}`}
                className="w-32 h-32 rounded-lg"
                priority
              />
              <strong className="text-pallet-cyan tracking-[4px]">
                {skill.name}
              </strong>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
