interface Props {
  title: string;
  isSelected: boolean; // Track whether the section is selected
  onClick: () => void; // Handler for the click event
}

const Section = ({ title, isSelected, onClick }: Props) => {
  const handleClick = (e:React.MouseEvent)=>{
    e.preventDefault();
    onClick();
  }
  return (
    <div onClick={handleClick} className="">
      <a
        href={`#${title}`} // This will match the id of the section
        className={`text-xl hover:cursor-pointer transition duration-300 rounded-full p-2 ${
          isSelected ? "bg-black text-white" : "text-black"
        }`}
      >
        {title}
      </a>
    </div>
  );
};

export default Section;
