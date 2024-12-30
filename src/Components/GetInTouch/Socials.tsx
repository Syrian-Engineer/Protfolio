
interface Props{
    title:string,
    imgUrl:string,
    link:string
}
const Socials = ({title,imgUrl,link}:Props) => {
    
    const handleClick = ()=>{
        window.open(link, "_blank");
    }

  return (
    <div 
    className="flex w-36 h-16 gap-2 bg-black text-white p-2 items-center rounded-xl hover:cursor-pointer hover:scale-90 transition duration-300"
    onClick={handleClick}
    >

        <img
        className="w-12 " 
        src={imgUrl} alt="" />
        <h1 className="font-medium">{title}</h1>

    </div>
  )
}

export default Socials