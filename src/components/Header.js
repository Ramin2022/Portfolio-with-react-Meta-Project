import React, { useRef, useEffect } from "react";
import { Box, HStack, VStack, Text,docked } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// media parts
const socials = [
  {
    icon: <FaEnvelope size={25} />,
    url: "mailto:raminjooya1999@gmail.com",
  },
  {
    icon: <FaGithub size={25} />,
    url: "https://www.github.com/Ramin2022",
  },
  {
    icon: <FaLinkedin size={25} />,
    url: "https://www.linkedin.com/in/raminjooya",
  },
];

// header component
const Header = () => {
  // header refernce
  const headerRef = useRef(null);

  // for finding out about the scroll postino
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scroll the specific position
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
    zIndex="docked"
      backgroundColor="#18181b"
      position="fixed"
      top="0"
      left="0"
      right="0"
      translateY={0}
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={headerRef}
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  target="_blank"
                  href={url}
                  rel="noopener noreferre"
                >
                  {icon}
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#porjects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
