import { useState } from "react";
import Section from "../Section/Section";
import "./Header.css";

const Header = () => {
  // State to keep track of the selected section
  const [selectedSection, setSelectedSection] = useState<string>("Home");

  // Function to handle click and update selected section
  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="header  fixed top-0 ml-5 w-full flex flex-row items-center justify-between pt-2 pb-2 z-10">
      {/* First div (on the left) */}
      <div className="flex items-center">
        <img src="/src/assets/infinity.png" alt="" className="w-9" />
        <h1 className="text-xl ml-3 font-extrabold font-serif bg-gradient-to-br from-[#e202e6] to-[#288dc8] bg-clip-text text-transparent">
          Engineer Koussai
        </h1>
      </div>

      {/* Second div (centered) */}
      <div className="flex gap-7 absolute left-1/2 transform -translate-x-1/2 ml-10 z-10 pt-2 pb-2 ">
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
