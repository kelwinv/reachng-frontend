import { DotSidebar } from "./DotSidebar";

function ObjectiveSection() {
  return (
    <section
      id="section-5"
      className="relative flex min-h-screen snap-start flex-col justify-center overflow-hidden bg-secondary-dark px-[6vw] py-20 sm:px-[8vw]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h1 className="mb-5 font-montserrat text-[40px] font-bold text-[#F4F4F4] sm:text-5xl">
            Objetivo do aplicativo
          </h1>
          <p className="max-w-lg font-poppins text-base leading-7 text-white/75">
            Criar um caminho simples para conectar pessoas �s ONGs, com foco em clareza, confian�a e continuidade do apoio.
          </p>
        </div>

        <div className="rounded-[28px] bg-white/10 p-4 shadow-card ring-1 ring-white/10 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5 text-white">
              <p className="font-montserrat text-lg font-semibold">Descoberta</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Mostra ONGs e causas com destaque visual.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 text-white">
              <p className="font-montserrat text-lg font-semibold">Apoio</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Simplifica a decis�o e o fluxo de contribui��o.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 text-white">
              <p className="font-montserrat text-lg font-semibold">Acompanhamento</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Deixa o impacto f�cil de acompanhar.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 text-white">
              <p className="font-montserrat text-lg font-semibold">Conex�o</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Fortalece rela��o entre apoiador e organiza��o.</p>
            </div>
          </div>
        </div>
      </div>

      <DotSidebar />
    </section>
  );
}

export { ObjectiveSection };
