import { type } from "os";
import { TitleHeaderIcon } from "../icon/TitleHeaderIcon";

type HomeNavigationProps = {
  type: number;
};

function HomePageHeader({ type = 0 }: HomeNavigationProps) {
  return (
    <header className="fixed z-50 flex h-24 w-full max-w-[90vw] gap-2 self-center pt-2">
      <div className=" m-auto flex h-full w-full max-w-5xl  items-center justify-between sm:items-end">
        <TitleHeaderIcon type={type} />
        <button
          className={`cursor-pointer rounded-md text-white transition ${
            type === 0
              ? "bg-primary-default hover:opacity-60"
              : "border-2 border-solid hover:bg-primary-dark-soft"
          } px-10 py-2`}
        >
          Ver Ongs
        </button>
      </div>
    </header>
  );
}

export { HomePageHeader };
