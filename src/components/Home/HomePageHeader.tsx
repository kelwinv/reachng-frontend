import { TitleHeaderIcon } from "../icon/TitleHeaderIcon";

type HomeNavigationProps = {
  type: number;
};

function HomePageHeader({ type = 0 }: HomeNavigationProps) {
  const solidButton = type === 0 || type === 2;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 shadow-card backdrop-blur sm:h-20 sm:px-6">
        <TitleHeaderIcon type={type} className="h-8 w-auto sm:h-10" />
        <button
          className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition sm:px-7 sm:py-3 ${
            solidButton
              ? "bg-primary-default text-white hover:opacity-70"
              : "border-2 border-primary-default text-primary-default hover:bg-primary-default hover:text-white"
          }`}
        >
          Ver Ongs
        </button>
      </div>
    </header>
  );
}

export { HomePageHeader };
