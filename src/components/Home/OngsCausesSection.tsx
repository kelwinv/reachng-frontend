import { DotSidebar } from "./DotSidebar";

function OngsCausesSection() {
  return (
    <section
      id="section-6"
      className="relative flex min-h-screen snap-start flex-col justify-center overflow-hidden bg-secondary-dark px-[6vw] py-20 sm:px-[8vw]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <h1 className="mb-5 font-montserrat text-[40px] font-bold text-[#F4F4F4] sm:text-5xl">
            ONGs e suas causas sociais e ambientais
          </h1>
          <p className="max-w-xl font-poppins text-base leading-7 text-white/75">
            O projeto organiza diferentes tipos de atua��o para ajudar o usu�rio a identificar rapidamente onde quer contribuir.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Educa��o",
            "Meio ambiente",
            "Assist�ncia social",
            "Sa�de",
          ].map((cause) => (
            <div
              key={cause}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white shadow-card"
            >
              <p className="font-montserrat text-xl font-semibold">{cause}</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Bloco visual para destacar o tipo de impacto associado � ONG.
              </p>
            </div>
          ))}
        </div>
      </div>

      <DotSidebar />
    </section>
  );
}

export { OngsCausesSection };
