"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#f2f2f2] text-lg sm:text-xl lg:text-2xl">
        <li>Node.js</li>
        <li>React</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#f2f2f2] text-lg sm:text-xl lg:text-2xl">
        <li>Cosmos College of Management & Technology</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="bg-[#0a0c14] py-20 sm:py-24">
      <div className="md:grid md:grid-cols-2 gap-12 xl:gap-16 items-center container mx-auto px-4 md:px-12">
        {/* Image */}
        <div className="relative w-full flex justify-center md:justify-start">
          <div className="rounded-full bg-[#181818] w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative shadow-[0_0_50px_#18cef2] transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/about-image.png"
              width={400}
              height={400}
              alt="About Image"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#18cef2] mb-4">
            About Me
          </h2>
          <p className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta
            ipsum architecto repellat, tenetur eveniet illum quibusdam molestias
            vitae eligendi itaque pariatur illo reprehenderit, nisi mollitia
            quis minima quasi? Laboriosam.
          </p>

          {/* Tabs */}
          <div className="flex flex-row justify-start mt-8 space-x-4 flex-wrap">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                className={`px-6 py-3 rounded-full font-semibold text-lg sm:text-xl lg:text-2xl transition-all duration-200 ${
                  tab === tabItem.id
                    ? "bg-[#18cef2] text-[#0a0c14] shadow-[0_0_15px_#18cef2]"
                    : "bg-[#121212] text-[#f2f2f2] hover:bg-[#181818] hover:shadow-[0_0_15px_#18cef2]"
                }`}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8 text-[#f2f2f2] space-y-3 text-lg sm:text-xl lg:text-2xl">
            {currentTab ? currentTab.content : <p>No content found.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
