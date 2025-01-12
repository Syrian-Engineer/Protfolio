import Section from "../AboutSection/Section"
import "./About.css"

const About = () => {
  return (
    <div className="section flex h-[50rem] w-[60rem] pt-16" id="About">
      <div className="flex flex-col h-[40rem] gap-12 w-[50rem] justify-center items-center">
        <span className="text-9xl font-bold">A B</span>
        <span className="text-9xl w-[14.1rem] font-bold">O U</span>
        <span className="text-9xl text-purple-300 font-bold relative">
          T <span className="text-xl font-normal absolute bottom-3 left-24">Me</span>
        </span>
      </div>
      <div className="flex flex-col w-[62.5rem] gap-5">
        <Section
          title="About Me"
          footNote=".- Mohamad Koussai Kareem Aldeen .- Damascus, Western-Mazzah .- +963983610978"
        />
        <Section
          title="Education"
          footNote=".- Information Technology Engineering .- Damascus University"
        />
        <Section
          title="Skills"
          footNote=".- Communication .- Teamwork .- Collaboration .- Problem-Solving .- Creativity "
        />
        <Section
          title="Technical Skills"
          footNote=".- Html Css JavaScript TypeScript .- Tailwind ChakraUI Css .- React React Router ReactQuery Redux .- FireBase Authintication FireBase DataBase .- Vercel Deploy"
        />
      </div>
    </div>
  );
};


export default About

