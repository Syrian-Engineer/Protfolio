import ProjectsContent from "./ProjectsContent";
import ProjectsPic from "./ProjectsPic";

interface Props {
  projectTitle: string;
  projectDescribiton: string;
  projectPic1: string;
  projectPic2:string;
  projectLink:string;
  handleIncreaseButton: () => void;
  handleDecreaseButton: () => void;
  count: number; // Add the count prop here
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
}: Props) => {
  return (
    <div className="section flex flex-col items-center gap-1 h-fit mb-10 pt-9" id="Projects">
      
        {/* The top div with dynamic background color */}
        <div className="flex w-2/3 h-16 ml-16 p-2 items-center gap-2 ">
          <div
            className={`w-1/4 h-1/6 rounded-full  ${count === 1 ? 'bg-black ' : 'bg-purple-300'}`}
          ></div>
          <div
            className={`w-1/4 h-1/6 rounded-full  ${count === 2 ? 'bg-black' : 'bg-purple-300'}`}
          ></div>
          <div
            className={`w-1/4 h-1/6 rounded-full  ${count === 3 ? 'bg-black' : 'bg-purple-300'}`}
          ></div>
          <div
            className={`w-1/4 h-1/6 rounded-full  ${count === 4 ? 'bg-black' : 'bg-purple-300'}`}
          ></div>
        </div>

        {/* The content and images */}
        <div className="flex w-2/3 h-[30rem] p-7 overflow-hidden ml-52" >
          <ProjectsContent projectTitle={projectTitle} projectDescribiton={projectDescribiton} />
          <ProjectsPic projectPic1={projectPic1} projectPic2={projectPic2} />
        </div>

        {/* Buttons */}
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
          > Visit</a>
        </div>
    </div>
  );
};

export default Projects;
