"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
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
      <ul className="list-disc pl-5">
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            dicta ipsum architecto repellat, tenetur eveniet illum quibusdam
            molestias vitae eligendi itaque pariatur illo reprehenderit, nisi
            mollitia quis minima quasi? Laboriosam.
          </p>

          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-8">
            {currentTab ? currentTab.content : <p>No content found.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
