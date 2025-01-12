interface Props {
  title: string;
  footNote: string;
}

const Section = ({ title, footNote }: Props) => {
  // Split footNote by '.', then wrap each part in <li> (except for the last part)
  const footNoteItems = footNote.split('.').map((part, index) => {
    const trimmedPart = part.trim();
    if (trimmedPart) {
      return (
        <li key={index}>
          {trimmedPart}.
        </li>
      );
    }
    return null; // Skip any empty items created by splitting
  });

  return (
    <div>
      <h1 className="text-4xl bg-gradient-to-r from-[#d1b3f4] to-[#7019ae] bg-clip-text text-transparent">
        {title}
      </h1>
      <ul className="text-xl list-inside">
        {footNoteItems}
      </ul>
    </div>
  );
};

export default Section;
