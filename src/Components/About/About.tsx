import Section from "../AboutSection/Section"
import "./About.css"

const About = () => {
  return (
    <div className="flex h-[40rem] w-[60rem] " id="About">
        <div className="flex flex-col h-full gap-12 w-[50rem]  justify-center items-center">
            <span className="text-9xl font-bold">A B</span>
            <span className="text-9xl w-[14.1rem] font-bold">O U</span>
            <span className="text-9xl text-purple-300 font-bold relative">T <span className="text-xl  font-normal absolute bottom-3 left-24 ">Me</span></span>
        </div>
        <div className="flex flex-col w-[62.5rem] gap-5">
            <Section title="About Me" footNote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa assumenda ipsum animi? Provident fugit, itaque adipisci aperiam quo asperiores, ratione" />
            <Section title="Education" footNote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa assumenda ipsum animi? Provident fugit, itaque adipisci aperiam quo asperiores, ratione" />
            <Section title="Skills" footNote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa assumenda ipsum animi? Provident fugit, itaque adipisci aperiam quo asperiores, ratione" />
            <Section title="Social Life" footNote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa assumenda ipsum animi? Provident fugit, itaque adipisci aperiam quo asperiores, ratione" />
        </div>
    </div>
  )
}

export default About