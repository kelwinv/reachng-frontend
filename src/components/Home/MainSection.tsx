import Image from "next/image";
import { LogoIcon } from "../icon/LogoIcon";

function HomeMainSection() {
  return (
    <section
      id="section-0"
      className="relative flex min-h-screen snap-start items-center overflow-hidden px-[6vw] pb-12 pt-28 sm:px-[8vw]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,86,113,0.18),_transparent_42%),radial-gradient(circle_at_80%_20%,_rgba(255,224,224,0.8),_transparent_32%)]" />
      <span className="pointer-events-none absolute inset-x-0 top-0 -translate-y-14 opacity-80">
        <Image
          src="images/bg-line1.svg"
          width={1440}
          height={720}
          alt=""
          className="h-auto w-full"
          priority
        />
      </span>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <div className="relative mx-auto mb-6 h-20 w-fit sm:h-28 lg:mx-0 lg:h-32">
            <Image
              src="images/reactng-text.svg"
              width={656}
              height={88}
              alt="REACHNG"
              className="h-full w-auto"
              priority
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:-bottom-5 lg:left-12 lg:translate-x-0">
              <LogoIcon className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
            </div>
          </div>
          <div className="mx-auto h-1 w-28 rounded-r-sm bg-primary-default lg:mx-0" />
          <p className="mt-8 max-w-xl font-poppins text-2xl leading-tight text-primary-dark-soft sm:text-3xl lg:text-4xl">
            Seja a mudan�a que voc� deseja ver no mundo
          </p>
          <p className="mx-auto mt-5 max-w-lg font-poppins text-sm leading-6 text-primary-dark-soft/80 sm:text-base lg:mx-0">
            Conecte pessoas e organiza��es sociais em uma experi�ncia clara,
            acolhedora e pronta para apoiar causas reais.
          </p>
        </div>

        <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
          {[
            ["ONGs verificadas", "Curadoria de organiza��es com causas reais e impacto vis�vel."],
            ["Apoio simples", "Fluxo direto para descobrir, apoiar e acompanhar a participa��o."],
            ["Transpar�ncia", "Uma interface pensada para deixar a jornada f�cil de entender."],
            ["Mobiliza��o", "Estrutura visual forte para engajar novos apoiadores."],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-2xl border border-white/70 bg-white/80 p-5 text-left shadow-card backdrop-blur"
            >
              <p className="font-montserrat text-lg font-semibold text-primary-dark">
                {title}
              </p>
              <p className="mt-2 font-poppins text-sm leading-6 text-primary-dark-soft">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <Image
          src="images/wave-main.svg"
          width={1440}
          height={170}
          alt=""
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

export { HomeMainSection };
