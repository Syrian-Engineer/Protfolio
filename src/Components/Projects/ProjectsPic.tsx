// import { useState, useRef, useEffect } from "react";

// interface Props{
//     projectPic1:string,
//     projectPic2?:string,
// }

// const ProjectsPic = ({projectPic1,projectPic2}:Props) => {
//     const [isRotating, setIsRotating] = useState(true);  // State to track if the image should rotate
//     const [rotationAngle, setRotationAngle] = useState(0); // State to track the current rotation angle
//     const animationFrameRef = useRef<null|number>(null);  // Store reference to cancel the animation frame if needed
  
//     // Function to update the rotation angle
//     const updateRotation = () => {
//       setRotationAngle((prevAngle) => (prevAngle + 1) % 360); // Increment angle by 1 each frame
//     };
  
//     // Run the rotation animation while isRotating is true
//     useEffect(() => {
//       if (isRotating) {
//         const animate = () => {
//           updateRotation(); // Update the rotation angle
//           animationFrameRef.current = requestAnimationFrame(animate); // Continue animation
//         };
//         animationFrameRef.current = requestAnimationFrame(animate); // Start animation loop
//       } else {
//         cancelAnimationFrame(Number(animationFrameRef.current)); // Stop the animation when not rotating
//       }
  
//       return () => {
//         cancelAnimationFrame(Number(animationFrameRef.current)); // Clean up the animation frame when the component unmounts
//       };
//     }, [isRotating]);
  
//     // Handle click to stop the rotation
//     const handleClick = () => {
//       setIsRotating((prev)=>!prev); // Stop the animation
//     };
//   return (
//     <div className=" w-full h-full flex flex-col justify-center items-center gap-6">
//       <img
//         src={projectPic1}
//         alt="Rotating Image"
//         className="w-96"
//         style={{
//           transform: `rotateY(${rotationAngle}deg)`,  // Apply the current rotation angle
//         }}
//         onClick={handleClick}
//       />
//       {projectPic2 && (
//         <img
//         src={projectPic1}
//         alt="Rotating Image"
//         className="w-96"
//         style={{
//           transform: `rotateY(${rotationAngle}deg)`,  // Apply the current rotation angle
//         }}
//         onClick={handleClick}
//       />
//       )}
//     </div>
//   )
// }

// export default ProjectsPic
import { useState, useRef, useEffect } from "react";

interface Props {
  projectPic1: string;
  projectPic2?: string;
}

const ProjectsPic = ({ projectPic1, projectPic2 }: Props) => {
  const [scale, setScale] = useState(0.1); // Start with a small scale (10% of original size)
  const animationFrameRef = useRef<null | number>(null);  // Store reference to cancel the animation frame if needed

  // Function to update the scale
  const updateScale = () => {
    setScale((prevScale) => {
      // Stop at scale 1, and prevent going beyond
      return prevScale < 1 ? prevScale + 0.01 : 1;
    });
  };

  // Run the scaling animation
  useEffect(() => {
    const animate = () => {
      updateScale(); // Update the scale
      if (scale < 1) {
        animationFrameRef.current = requestAnimationFrame(animate); // Continue animation if scale < 1
      }
    };
    animationFrameRef.current = requestAnimationFrame(animate); // Start animation loop

    return () => {
      cancelAnimationFrame(Number(animationFrameRef.current)); // Clean up the animation frame when the component unmounts
    };
  }, [scale]); // Trigger the effect every time scale changes

  return (
    <div className="size-full -mt-5  flex flex-col justify-center items-center gap-6">
      <img
        src={projectPic1}
        alt="Scaling Image"
        className="w-96 rounded-2xl"
        style={{
          transform: `scale(${scale})`,  // Apply the current scale
        }}
      />
      {projectPic2 && (
        <img
          src={projectPic2}
          alt="Scaling Image"
          className="w-96 rounded-2xl"
          style={{
            transform: `scale(${scale})`,  // Apply the current scale
          }}
        />
      )}
    </div>
  );
};

export default ProjectsPic;
