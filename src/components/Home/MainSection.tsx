import Image from "next/image";
import { LogoIcon } from "../icon/LogoIcon";

function HomeMainSection() {
  return (
    <section
      id="section-0"
      className="relative m-auto flex h-[75vh] max-w-[80vw] snap-start flex-col items-center justify-center"
    >
      <span className="pointer-events-none absolute top-0 z-10 w-screen -translate-y-24 ">
        <Image
          src="images/bg-line1.svg"
          width={1440}
          height={720}
          alt=""
          className="w-screen"
        />
      </span>
      <div className="relative">
        <div className="relative z-10 mb-4">
          <Image
            src="images/reactng-text.svg"
            width={656}
            height={88}
            alt="REACHNG"
          />
        </div>
        <div className="absolute bottom-0 right-1/2  translate-x-1/2">
          <LogoIcon />
        </div>
        <span className="flex h-1 rounded-r-sm bg-primary-default"></span>
      </div>
      <p className="text-center font-poppins text-2xl text-primary-dark-soft">
        Seja a mudança que você deseja ver no mundo
      </p>
      <div className="absolute bottom-0 w-screen">
        <Image
          src="images/wave-main.svg"
          width={1440}
          height={170}
          alt=""
          className="w-screen"
        />
      </div>
    </section>
  );
}

export { HomeMainSection };
