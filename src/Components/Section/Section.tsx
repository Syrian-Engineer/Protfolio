interface Props {
    title: string;
    isSelected: boolean; // Track whether the section is selected
    onClick: () => void; // Handler for the click event
  }
  
  const Section = ({ title, isSelected, onClick }: Props) => {
    return (
      <div onClick={onClick} className="" >
        <a
          href={`#${title}`}
          className={`text-xl hover:cursor-pointer transition duration-300 rounded-full p-2   ${
            isSelected ? "bg-black text-white" : "text-black"
          }`}
        >
          {title}
        </a>
      </div>
    );
  };
  
  export default Section;
  