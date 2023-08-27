"use client";

import { HomeNavigation } from "@/components/Home/Navigation";
import { HomeMainSection } from "@/components/Home/MainSection";
import { UIEvent, useState } from "react";
import { HomePageHeader } from "@/components/Home/HomePageHeader";

export default function Home() {
  const [accScrollPage, setScrollPage] = useState(0);

  const calculateDiffPosition = (section: HTMLElement, target: HTMLElement) => {
    const sectionCenter = section.offsetTop + section.offsetHeight / 2;
    const targetCenter = target.scrollTop + target.clientHeight / 2;
    return Math.abs(sectionCenter - targetCenter);
  };

  const findClosestSection = (sections: HTMLElement[], target: HTMLElement) => {
    const closeSection = sections.map((section, idx) => ({
      index: idx,
      diffPosition: calculateDiffPosition(section, target),
    }));

    return closeSection.reduce(
      (closest, current) =>
        current && current.diffPosition < closest?.diffPosition
          ? current
          : closest,
      closeSection[0],
    ).index;
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    if (!event.target) return;
    const target = event.target as HTMLDivElement;
    const sections: HTMLElement[] = [];

    [0, 1, 2, 3, 4].forEach((idx) => {
      const accSection = document.getElementById(`section-${idx}`);
      if (!accSection) return;
      sections.push(accSection);
    });

    const closestSectionIdx = findClosestSection(sections, target);

    setScrollPage(closestSectionIdx);
  };

  return (
    <div className="flex h-screen flex-col bg-white-linear">
      <HomePageHeader type={accScrollPage === 1 ? 1 : 0} />
      <HomeNavigation paginateLength={8} selectedIdx={accScrollPage} />
      <main
        className="h-full snap-y flex-col overflow-x-hidden overflow-y-scroll"
        onScroll={handleScroll}
      >
        <HomeMainSection />
        <section
          id="section-1"
          className="h-screen snap-center bg-primary-default pl-[8vw] pt-28"
        >
          <h1 className="font-montserrat text-4xl font-bold text-white">
            Sobre a ReachNG
          </h1>
        </section>
        <section id="section-2" className="h-screen snap-center pl-[8vw] pt-28">
          <h1 className="font-montserrat text-4xl font-bold text-secondary-default">
            ONGs que contribuimos
          </h1>
        </section>
        <section id="section-3" className="h-screen snap-center pl-[8vw] pt-28">
          <h1 className="font-montserrat text-4xl font-bold text-secondary-default">
            Como posso ser apoiador
          </h1>
        </section>
        <section id="section-4" className="h-screen snap-center pl-[8vw] pt-28">
          <h1 className="font-montserrat text-4xl font-bold text-secondary-default">
            Como posso cadastrar minha ONG?
          </h1>
        </section>
      </main>
    </div>
  );
}
