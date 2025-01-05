import { useState, useEffect } from "react";
import Section from "../Section/Section";
import "./Header.css";

const Header = () => {
  const [selectedSection, setSelectedSection] = useState<string>("Home");

  // Function to handle scroll event and update the selected section
  const handleScroll = () => {
    const sections = document.querySelectorAll(".section") as NodeListOf<HTMLElement>;
    let currentSection: string = ""; // Default section
  
    // Get the scroll position of the page
    const scrollPosition = window.scrollY;
  
    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop; // The distance of the section from the top of the document
      const sectionHeight = section.offsetHeight; // The height of the section
  
      // Adjust the threshold to handle larger gaps
      const threshold = 150; // You can adjust this to match your gap value (gap-44 corresponds to ~11rem)
  
      // Check if the section is in view
      if (scrollPosition + threshold >= sectionTop && scrollPosition + threshold < sectionTop + sectionHeight) {
        currentSection = section.id;
      }
    });
  
    setSelectedSection(currentSection);
  };

  // Attach scroll event listener when component mounts
  useEffect(() => {
    // Scroll to the top after page reload
    setTimeout(() => {
      window.scrollTo(0, 0); // Ensure scroll position is reset after page load
    }, 100); // Delay for 100 milliseconds (can adjust as needed)

    // Set default section to Home when the page is reloaded
    setSelectedSection("Home");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  // Function to handle section click and scroll to it
  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="header fixed top-0 ml-5 w-full flex flex-row items-center justify-between pt-2 pb-2 z-10">
      <div className="flex items-center">
        <img src="../../../public/Images/infinity.png" alt="" className="w-9" />
        <h1 className="text-xl ml-3 font-extrabold font-serif bg-gradient-to-br from-[#e202e6] to-[#288dc8] bg-clip-text text-transparent">
          Engineer Koussai
        </h1>
      </div>

      <div className="flex gap-7 absolute left-1/2 transform -translate-x-1/2 ml-10 z-10 pt-2 pb-2">
        <Section
          title="Home"
          isSelected={selectedSection === "Home"}
          onClick={() => handleSectionClick("Home")}
        />
        <Section
          title="About"
          isSelected={selectedSection === "About"}
          onClick={() => handleSectionClick("About")}
        />
        <Section
          title="Projects"
          isSelected={selectedSection === "Projects"}
          onClick={() => handleSectionClick("Projects")}
        />
        <Section
          title="Get In Touch"
          isSelected={selectedSection === "Get In Touch"}
          onClick={() => handleSectionClick("Get In Touch")}
        />
      </div>
    </div>
  );
};

export default Header;
