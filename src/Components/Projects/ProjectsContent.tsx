import TechUsed from "./TechUsed"

interface Props{
    projectTitle:string,
    projectDescribiton:string,
}
const ProjectsContent = ({projectTitle,projectDescribiton}:Props) => {
  return (
    <div className="w-1/2 flex flex-col gap-5 ">
        <div>
            <h2 className="text-2xl font-bold">{projectTitle}</h2>
            <p className="text-gray-500 h-fit">{projectDescribiton} Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit nihil eos quae itaque qui porro, aut dignissimos nam aliquam! Illum atque sint, adipisci quidem eius voluptates consectetur provident repudiandae!</p>
        </div>
        <TechUsed />
    </div>
  )
}

export default ProjectsContent