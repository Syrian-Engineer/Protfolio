import TechUsed from "./TechUsed"

interface Props{
    projectTitle:string,
    projectDescribiton:string,
}
const ProjectsContent = ({projectTitle,projectDescribiton}:Props) => {
  return (
    <div className="w-1/2 flex flex-col gap-5 ">
        <div>
            <h2 className="text-3xl font-bold">{projectTitle}</h2>
            <p className="text-gray-500 h-fit">{projectDescribiton} </p>
        </div>
        <TechUsed />
    </div>
  )
}

export default ProjectsContent