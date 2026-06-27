function DotSidebar() {
  return (
    <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-l-lg bg-[#D9D9D9] px-3 py-5 md:flex">
      {[0, 1, 2].map((i) => (
        <button
          key={i}
          className="h-4 w-4 rounded-full bg-white shadow-sm transition hover:opacity-70"
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

export { DotSidebar };
