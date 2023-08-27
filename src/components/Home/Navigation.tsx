type HomeNavigationProps = {
  paginateLength: number;
  selectedIdx: number;
};

function HomeNavigation({
  paginateLength = 8,
  selectedIdx = 0,
}: HomeNavigationProps) {
  const afterCssClass = `after:m-auto after:h-40 after:w-px after:rounded  ${
    selectedIdx === 1 ? "after:bg-white" : "after:bg-primary-default"
  } after:content-['']`;

  return (
    <div
      id="left-scroll-conter"
      className="fixed left-[4vw] top-1/2 -translate-y-1/2"
    >
      <ul
        className={`flex flex-col items-center font-poppins font-light ${
          selectedIdx === 1 ? "text-white" : "text-primary-default"
        }`}
      >
        {[...Array(paginateLength)].map((_, idx) => (
          <li
            className={`flex flex-col ${idx === selectedIdx && afterCssClass}`}
            key={`nav-li-${idx}`}
          >
            <p
              className={
                idx === selectedIdx ? "text-3xl font-bold" : "font-light"
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
