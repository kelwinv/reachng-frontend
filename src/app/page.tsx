"use client";

import { HomeNavigation } from "@/components/Home/Navigation";
import { HomeMainSection } from "@/components/Home/MainSection";
import { UIEvent, useState } from "react";
import { HomePageHeader } from "@/components/Home/HomePageHeader";
import { AboutSection } from "@/components/Home/AboutSection";
import { OngsSection } from "@/components/Home/OngsSection";
import { SupporterSection } from "@/components/Home/SupporterSection";
import { RegisterOngSection } from "@/components/Home/RegisterOngSection";
import { ObjectiveSection } from "@/components/Home/ObjectiveSection";
import { OngsCausesSection } from "@/components/Home/OngsCausesSection";
import { ContactSection } from "@/components/Home/ContactSection";

// headerType: 0 = default (pink logo + solid button)
//             1 = variant2 (white logo + outline button, light bg)
//             2 = variant3 (white logo + solid button, dark/pink bg)
const SECTION_CONFIG = [
  { headerType: 0, navLight: false }, // 01 Hero
  { headerType: 2, navLight: true }, // 02 Sobre (pink bg)
  { headerType: 1, navLight: false }, // 03 ONGs
  { headerType: 1, navLight: false }, // 04 Apoiador
  { headerType: 2, navLight: true }, // 05 Cadastro ONG (dark)
  { headerType: 2, navLight: true }, // 06 Objetivo (dark)
  { headerType: 2, navLight: true }, // 07 Causas (dark)
  { headerType: 2, navLight: true }, // 08 Contato (dark)
];

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

    Array.from({ length: 8 }, (_, i) => i).forEach((idx) => {
      const accSection = document.getElementById(`section-${idx}`);
      if (!accSection) return;
      sections.push(accSection);
    });

    const closestSectionIdx = findClosestSection(sections, target);

    setScrollPage(closestSectionIdx);
  };

  const { headerType } = SECTION_CONFIG[accScrollPage] ?? SECTION_CONFIG[0];

  return (
    <div className="flex h-screen flex-col bg-white-linear">
      <HomePageHeader type={headerType} />
      <HomeNavigation paginateLength={8} selectedIdx={accScrollPage} />
      <main
        className="h-full snap-y overflow-x-hidden overflow-y-scroll"
        onScroll={handleScroll}
      >
        <HomeMainSection />
        <AboutSection />
        <OngsSection />
        <SupporterSection />
        <RegisterOngSection />
        <ObjectiveSection />
        <OngsCausesSection />
        <ContactSection />
      </main>
    </div>
  );
}
