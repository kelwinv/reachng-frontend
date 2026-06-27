function AboutSection() {
  return (
    <section
      id="section-1"
      className="relative flex min-h-screen snap-start items-center overflow-hidden bg-primary-default px-[6vw] py-20 sm:px-[8vw]"
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg
          viewBox="0 0 1440 900"
          className="h-full w-full"
          aria-hidden="true"
        >
          <ellipse
            cx="200"
            cy="200"
            rx="300"
            ry="300"
            fill="none"
            stroke="#FAF7FC"
            strokeWidth="2"
          />
          <ellipse
            cx="1240"
            cy="200"
            rx="300"
            ry="300"
            fill="none"
            stroke="#FAF7FC"
            strokeWidth="2"
          />
        </svg>
      </span>

      <div className="relative mx-auto w-full max-w-6xl">
        <h1 className="mb-8 font-montserrat text-4xl font-bold text-white sm:text-5xl">
          Sobre a ReachNG
        </h1>

        <div className="grid gap-4 rounded-[28px] bg-white/90 p-5 shadow-card backdrop-blur md:grid-cols-3 md:divide-x md:divide-primary-default/30 md:p-10">
          <article className="rounded-2xl bg-white p-5 shadow-sm md:bg-transparent md:p-6">
            <h2 className="mb-4 font-montserrat text-2xl font-semibold text-primary-dark">
              Quem somos?
            </h2>
            <p className="font-poppins text-base leading-7 text-primary-dark-soft sm:text-lg">
              O ReachNG � uma plataforma que conecta pessoas engajadas a
              organiza��es n�o-governamentais que transformam realidades.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm md:bg-transparent md:p-6">
            <h2 className="mb-4 font-montserrat text-2xl font-semibold text-primary-dark">
              Como funciona?
            </h2>
            <p className="mb-3 font-poppins text-base leading-7 text-primary-dark-soft sm:text-lg">
              Navegue pelas ONGs cadastradas, conhe�a suas causas e escolha onde deseja contribuir.
            </p>
            <p className="font-poppins text-base leading-7 text-primary-dark-soft sm:text-lg">
              Depois, acompanhe em tempo real o impacto da sua participa��o.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm md:bg-transparent md:p-6">
            <h2 className="mb-4 font-montserrat text-2xl font-semibold text-primary-dark">
              Por que escolher o ReachNG?
            </h2>
            <p className="font-poppins text-base leading-7 text-primary-dark-soft sm:text-lg">
              Transpar�ncia total, curadoria de ONGs verificadas e uma jornada simples para apoiar causas reais.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
