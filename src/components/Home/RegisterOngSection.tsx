function RegisterOngSection() {
  return (
    <section
      id="section-4"
      className="relative flex min-h-screen snap-start flex-col justify-center overflow-hidden bg-secondary-dark px-[6vw] py-20 sm:px-[8vw]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#FF5671_0%,#892C39_50%,#FF5671_100%)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-5">
          <h1 className="font-montserrat text-[40px] font-semibold leading-tight text-[#FFF7F8] sm:text-5xl">
            Como posso cadastrar minha ONG?
          </h1>
          <p className="max-w-xl font-poppins text-base leading-7 text-white/80">
            Cadastre sua organiza��o, apresente suas causas e encontre apoiadores em uma experi�ncia clara e confi�vel.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-card backdrop-blur sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 text-white">
              <p className="font-montserrat text-lg font-semibold">1. Dados</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Informe os dados principais da ONG.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white">
              <p className="font-montserrat text-lg font-semibold">2. Causas</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Selecione as frentes que sua organiza��o apoia.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white">
              <p className="font-montserrat text-lg font-semibold">3. Publicar</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Finalize e fique vis�vel para novos apoiadores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { RegisterOngSection };
