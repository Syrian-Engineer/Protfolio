import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    // Animation for title
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#title",
        start: "top 75%", // Trigger when the title is 75% down the viewport
        end: "top 25%",   // End when it's 25% from the top
        scrub: 0.5,       // Smooth out the animation
        toggleActions: "play none none none", // Ensure it only plays once
      },
    });
    titleAnimation.fromTo("#title", 
      { x: -200, opacity: 0 },   // Start from the left and opacity 0
      { x: 0, opacity: 1 }        // End at the original position with full opacity
    );

    // Animation for the list
    const listAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#footnote",
        start: "top 75%", // Trigger when the footnote is 75% down the viewport
        end: "top 25%",   // End when it's 25% from the top
        scrub: 0.5,       // Smooth out the animation
        toggleActions: "play none none none", // Ensure it only plays once
      },
    });
    listAnimation.fromTo("#footnote", 
      { x: 200, opacity: 0 },   // Start from the right and opacity 0
      { x: 0, opacity: 1 }       // End at the original position with full opacity
    );
  });

  return (
    <div>
      <h1
        id="title"
        className="text-4xl bg-gradient-to-r from-[#d1b3f4] to-[#7019ae] bg-clip-text text-transparent relative"
      >
        {title}
      </h1>
      <ul
        id="footnote"
        className="text-xl list-inside relative"
      >
        {footNoteItems}
      </ul>
    </div>
  );
};

export default Section;
