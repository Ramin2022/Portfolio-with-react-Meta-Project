import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

// Projects info
const projects = [
  {
    title: "Video Search",
    description:
      "A Youtube search video app which you can search from youtube.",
    getImageSrc: () => require("../images/YoutubeApp.PNG"),
  },
  {
    title: "Note App",
    description:
      "A Note app which you can do the CRUD operation and navigate to different pages",
    getImageSrc: () => require("../images/noteapp.PNG"),
  },
  {
    title: "Music App",
    description: "A simpel music player which you can play musics.",
    getImageSrc: () => require("../images/musicApp.PNG"),
  },
  {
    title: "Ecommerce Website",
    description:
      "An Ecommerce website which you can add,delte item and do navigations.",
    getImageSrc: () => require("../images/ecommerce.PNG"),
  },
];

// Project section component
const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={4}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <SimpleGrid spacing={10} minChildWidth="400px">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
