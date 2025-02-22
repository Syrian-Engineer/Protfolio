interface Props {
    technologies: string[]; // Accept an array of technologies
  }
  
  const TechUsed = ({ technologies }: Props) => {
    return (
      <div>
        <h1 className="my-4 text-xl">Technologies Used In Project:</h1>
        <div className="h-full flex flex-col gap-2 w-[26.4rem] overflow-hidden text-nowrap">
          <div className="flex flex-wrap gap-4 justify-start">
            {technologies.map((tech, index) => (
              <p
                key={index}
                className="h-fit flex items-center text-white bg-gradient-to-b from-[#9e6bda] to-[#d7abf7] p-3 rounded-xl hover:cursor-pointer hover:text-black transition duration-300 hover:scale-95"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TechUsed;
  