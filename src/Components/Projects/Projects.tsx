import ProjectsContent from "./ProjectsContent";
import ProjectsPic from "./ProjectsPic";

interface Props {
  projectTitle: string;
  projectDescribiton: string;
  projectPic: string;
  handleIncreaseButton: () => void;
  handleDecreaseButton: () => void;
  count: number; // Add the count prop here
}

const Projects = ({
  projectTitle,
  projectDescribiton,
  projectPic,
  handleIncreaseButton,
  handleDecreaseButton,
  count,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-1 h-fit mb-10" id="Projects">
      
        {/* The top div with dynamic background color */}
        <div className="flex w-2/3 h-16 ml-16 p-2 items-center gap-2 ">
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
        </div>

        {/* The content and images */}
        <div className="flex w-2/3 h-[30rem] p-7 overflow-hidden ml-52" >
          <ProjectsContent projectTitle={projectTitle} projectDescribiton={projectDescribiton} />
          <ProjectsPic projectPic1={projectPic} projectPic2="/src/assets/FriendsTrip NewTrip Page.png" />
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
        </div>
    </div>
  );
};

export default Projects;
