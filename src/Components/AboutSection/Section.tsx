
interface Props{
    title:string,
    footNote:string
}

const Section = ({title,footNote}:Props) => {
  return (
    <div >
        <h1 className="text-4xl  bg-gradient-to-r from-[#d1b3f4] to-[#7019ae] bg-clip-text text-transparent">{title}</h1>
        <p className="text-xl">{footNote}</p>
    </div>
  )
}

export default Section