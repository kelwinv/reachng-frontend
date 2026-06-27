import { DotSidebar } from "./DotSidebar";

function ContactSection() {
  return (
    <section
      id="section-7"
      className="relative flex min-h-screen snap-start flex-col items-center justify-center overflow-hidden bg-secondary-dark px-[6vw] py-20 sm:px-[8vw]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-primary-dark opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-[12rem] h-64 bg-primary-default opacity-10" aria-hidden="true" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 rounded-[32px] border border-white/10 bg-white/5 px-6 py-12 text-center shadow-card backdrop-blur sm:px-10">
        <h1 className="font-montserrat text-[40px] font-bold text-white sm:text-5xl">
          Entre em Contato
        </h1>
        <p className="max-w-xl font-poppins text-lg font-light leading-8 text-white/80">
          Quer saber mais sobre o ReachNG, fazer uma parceria ou cadastrar sua ONG? Fale conosco.
        </p>
        <a
          href="mailto:contato@reachng.com.br"
          className="rounded-full bg-primary-default px-8 py-3 font-montserrat font-semibold text-white transition hover:opacity-70"
        >
          contato@reachng.com.br
        </a>
      </div>

      <DotSidebar />
    </section>
  );
}

export { ContactSection };
