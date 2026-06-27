type HomeNavigationProps = {
  paginateLength: number;
  selectedIdx: number;
};

function HomeNavigation({
  paginateLength = 8,
  selectedIdx = 0,
}: HomeNavigationProps) {
  const lightNav = [1, 4, 5, 6, 7].includes(selectedIdx);
  const afterCssClass = `after:m-auto after:h-16 after:w-px after:rounded  ${
    lightNav ? "after:bg-white" : "after:bg-primary-default"
  } after:content-['']`;

  return (
    <div
      id="left-scroll-conter"
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 md:left-[4vw] md:top-1/2 md:bottom-auto md:-translate-x-0 md:-translate-y-1/2"
    >
      <ul
        className={`flex flex-row items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2 font-poppins font-light backdrop-blur md:flex-col md:gap-0 md:border-0 md:bg-transparent md:px-0 md:py-0 ${
          lightNav ? "text-white" : "text-primary-default"
        }`}
      >
        {[...Array(paginateLength)].map((_, idx) => (
          <li
            className={`flex flex-col ${idx === selectedIdx && afterCssClass}`}
            key={`nav-li-${idx}`}
          >
            <p
              className={
                idx === selectedIdx ? "text-xl font-bold md:text-3xl" : "text-sm font-light md:text-base"
              }
            >
              {idx + 1}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { HomeNavigation };
