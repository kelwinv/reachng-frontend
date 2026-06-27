import Image from "next/image";

type OngCard = {
  name: string;
  description: string;
  imageUrl: string;
};

const SAMPLE_ONGS: OngCard[] = [
  {
    name: "ONG Esperan�a",
    description:
      "Promovendo educa��o e oportunidades para crian�as em situa��o de vulnerabilidade.",
    imageUrl: "",
  },
  {
    name: "ONG Verde Vivo",
    description:
      "Atuando na preserva��o ambiental e reflorestamento de �reas degradadas.",
    imageUrl: "",
  },
  {
    name: "ONG Luz do Amanh�",
    description:
      "Apoiando fam�lias em situa��o de risco por meio de assist�ncia social.",
    imageUrl: "",
  },
];

function OngsSection() {
  return (
    <section
      id="section-2"
      className="flex min-h-screen snap-start flex-col justify-center bg-white-linear px-[6vw] py-20 sm:px-[8vw]"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-8 self-start font-montserrat text-4xl font-bold text-primary-dark sm:text-5xl">
          ONGs que contribu�mos
        </h1>

        <div className="rounded-[28px] bg-white/85 p-6 shadow-card backdrop-blur sm:p-10">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {SAMPLE_ONGS.map((ong) => (
              <div
                key={ong.name}
                className="flex flex-col items-center gap-4 text-center"
              >
                {ong.imageUrl ? (
                  <Image
                    src={ong.imageUrl}
                    alt={ong.name}
                    width={200}
                    height={200}
                    className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
                  />
                ) : (
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-primary-ligth text-primary-dark-soft sm:h-48 sm:w-48">
                    ONG
                  </div>
                )}
                <p className="font-montserrat text-2xl font-semibold text-primary-dark">
                  {ong.name}
                </p>
                <p className="max-w-[240px] font-poppins text-base leading-7 text-primary-dark-soft">
                  {ong.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { OngsSection };
export type { OngCard };
