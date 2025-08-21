import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "AI Assistant",
    description: "Project 1",
    image: "/images/projects/desktop.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "AI Assistant",
    description: "Project 2",
    image: "/images/projects/download.jpeg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "AI Assistant",
    description: "Project 3",
    image: "/images/projects/download.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "AI Assistant",
    description: "Project 4",
    image: "/images/projects/download.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "AI Assistant",
    description: "Project 5",
    image: "/images/projects/download.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "AI Assistant",
    description: "Project 6",
    image: "/images/projects/download.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0c14] relative z-0">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[#18cef2] mb-16">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
