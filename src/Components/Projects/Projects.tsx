import { useGSAP } from "@gsap/react";
import ProjectsContent from "./ProjectsContent";
import ProjectsPic from "./ProjectsPic";
import TechUsed from "./TechUsed";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  projectTitle: string;
  projectDescribiton: string;
  projectPic1: string;
  projectPic2:string;
  projectLink:string;
  handleIncreaseButton: () => void;
  handleDecreaseButton: () => void;
  count: number; // Add the count prop here;
  technologies:string[]
}

const Projects = ({
  projectTitle,
  projectDescribiton,
  projectPic1,
  projectPic2,
  projectLink,
  handleIncreaseButton,
  handleDecreaseButton,
  count,
  technologies
}: Props) => {
  useGSAP(() => {
    const barAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#bar", // Trigger the animation when #bar is in view
        start: "top 60%", // Start when the top of #bar reaches the bottom of the viewport
        end: "bottom 40%", // End when the top of #bar reaches the center of the viewport
        scrub: 0.5, // Makes the animation linked to the scroll progress
        // once:true
        // markers: true, // Enables visual markers for debugging,
      }
    });

    // Animate the #bar element coming from above
    barAnimation.from("#bar", {
      y: -200, // Start above the screen by 200px
      opacity: 0, // Start off invisible
      ease: "back.out(1.7)", // Add a "bounce" easing effect,
      duration:1000
    });
  });

  useGSAP(()=>{
    const projectContentAnimation = gsap.timeline({
      scrollTrigger:{
        trigger:"#project-content",
        start:"top 50%",
        end:"bottom 90%",
        scrub:0.5,
        // once:true
      }
    })
    projectContentAnimation.from("#project-content",{
      x:-500,
      // ease:"back.out",
      duration:1000
    })
  })

  useGSAP(()=>{
    const projectPicAnimation = gsap.timeline({
      scrollTrigger:{
        trigger:"#project-pic",
        start:"top 50%",
        end:"bottom 90%",
        scrub:0.5,
        // once:true
      }
    })
    projectPicAnimation.from("#project-pic",{
      x:500,
      // ease:"back.out",
      duration:1000
    })
  })
  return (
    <div className="section flex flex-col items-center gap-1 h-fit mb-10 pt-9" id="Projects">
      <div id="bar" className="flex w-2/3 h-16 ml-16 p-2 items-center gap-2 ">
        <div
          className={`w-1/4 h-1/6 rounded-full ${count === 1 ? 'bg-black' : 'bg-purple-300'}`}
        ></div>
        <div
          className={`w-1/4 h-1/6 rounded-full ${count === 2 ? 'bg-black' : 'bg-purple-300'}`}
        ></div>
        <div
          className={`w-1/4 h-1/6 rounded-full ${count === 3 ? 'bg-black' : 'bg-purple-300'}`}
        ></div>
        <div
          className={`w-1/4 h-1/6 rounded-full ${count === 4 ? 'bg-black' : 'bg-purple-300'}`}
        ></div>
        <div
          className={`w-1/4 h-1/6 rounded-full ${count === 5 ? 'bg-black' : 'bg-purple-300'}`}
        ></div>
      </div>

      <div className="flex w-2/3 gap-12 h-[30rem] p-7 overflow-hidden ml-52">
        <div id="project-content" className="flex flex-col w-full">
          <ProjectsContent projectTitle={projectTitle} projectDescribiton={projectDescribiton} />
          <TechUsed technologies={technologies} />
        </div>
        <div className="size-full" id="project-pic">
          <ProjectsPic projectPic1={projectPic1} projectPic2={projectPic2} />
        </div>
      </div>

      <div className="flex justify-around w-1/2">
        <button
          className="bg-black text-white rounded-full p-3 hover:scale-90 transition duration-300 hover:text-purple-300"
          onClick={handleDecreaseButton}
        >
          Prev
        </button>
        <button
          className="bg-black text-white rounded-full p-3 hover:scale-90 transition duration-300 hover:text-purple-300"
          onClick={handleIncreaseButton}
        >
          Next
        </button>
        <a 
          className="bg-purple-300 p-3 rounded-full hover:scale-90 hover:text-white hover:cursor-pointer transition duration-300"
          href={projectLink}
          target="blank"
        >
          Visit
        </a>
      </div>
    </div>
  );
};

export default Projects;
