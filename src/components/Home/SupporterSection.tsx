function SupporterSection() {
  const steps = [
    {
      title: "Acesse a plataforma",
      body: "Crie sua conta gratuitamente e explore as causas dispon�veis.",
    },
    {
      title: "Escolha uma ONG",
      body: "Navegue pelo cat�logo de ONGs verificadas e encontre a causa que mais combina com voc�.",
    },
    {
      title: "Contribua",
      body: "Fa�a sua contribui��o de forma simples e segura, sabendo para onde vai seu apoio.",
    },
    {
      title: "Acompanhe sua participa��o",
      body: "Receba atualiza��es e veja em tempo real o impacto gerado pela sua participa��o.",
    },
  ];

  return (
    <section
      id="section-3"
      className="flex min-h-screen snap-start items-center bg-white-linear px-[6vw] py-20 sm:px-[8vw]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-montserrat text-[40px] font-semibold leading-tight text-primary-dark sm:text-5xl">
            Como posso ser apoiador
          </h1>
          <p className="font-poppins text-base font-light leading-7 text-primary-dark-soft">
            Apoiar uma ONG nunca foi t�o simples. Siga os passos abaixo e comece a fazer a diferen�a hoje mesmo.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex min-h-[140px] flex-col justify-center rounded-2xl bg-primary-ligth px-5 py-4 shadow-card"
              >
                <p className="mb-2 font-montserrat font-semibold text-primary-dark">
                  {index + 1}. {step.title}
                </p>
                <p className="font-poppins text-sm font-light leading-6 text-primary-dark-soft">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#FFF,#FFE0E0_100%)] p-8 shadow-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,86,113,0.25),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(137,44,57,0.18),transparent_30%)]" />
          <div className="relative flex min-h-[360px] items-center justify-center rounded-[24px] border border-white/80 bg-white/70 text-center font-montserrat text-lg font-semibold text-primary-dark-soft backdrop-blur">
            Ilustra��o do apoiador
          </div>
        </div>
      </div>
    </section>
  );
}

export { SupporterSection };
