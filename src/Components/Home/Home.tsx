// import "./Home.css"
// const Home = () => {
//   return (
//     <div className="flex mt-12  ">
//         <div>
//             hello i,m <span className="text-6xl">koussai </span>
//         </div>
//         <div className="profile-img bg-gradient-to-r from-[#d1b3f4] to-[#e0c7f2] relative overflow-hidden rounded-3xl shadow-[10px_10px_10px_rgba(0,0,0,0.3)]">
//             <img src="/src/assets/Untitled-1.png" alt="" className="absolute hover:scale-110 bottom-0 transition duration-300" />
//         </div>

//     </div>
//   )
// }

// export default Home



// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="flex mt-12 h-[500px]">
//       {/* First div with the text */}
//       {/* <div className="flex flex-col justify-between h-full w-52 ">
//         <p className="text-2xl flex items-end justify-start h-[10%]">hello i,m</p>
//         <p className="text-[7rem] te font-bold h-[90%] grid grid-cols-[repeat(auto-fill,_minmax(2ch,_1fr))] justify-items-center items-center text-center">
//           koussai
//         </p>
//       </div> */}
//       <div className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-gray-200">
//   <span className="text-center text-[7rem]">ko</span>
//   <span className="text-center text-[7rem]">us</span>
//   <span className="text-center text-[7rem]">ai</span>
// </div>

//       {/* Second div with the profile image */}
//       <div className="profile-img bg-gradient-to-r from-[#d1b3f4] to-[#e0c7f2] relative overflow-hidden rounded-3xl shadow-[10px_10px_10px_rgba(0,0,0,0.3)] h-full w-[300px]">
//         <img
//           src="/src/assets/Untitled-1.png"
//           alt="Profile"
//           className="absolute bottom-0 w-full object-cover transition-transform duration-300 hover:scale-110"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;




// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="flex mt-12 h-[500px]">
//       {/* First div with the text */}
//       <div className="w-[300px] h-fit flex flex-col justify-evenly ">
//         <h1 className=" justify-start">Hello i,m</h1>
//         <span className="text-center text-[5.5rem]">ko</span>
//         <span className="text-center text-[5.5rem]">us</span>
//         <span className="text-center text-[5.5rem] bg-gradient-to-r from-[#d1b3f4] to-[#e0c7f2] bg-clip-text text-transparent ">ai</span>
//       </div>

//       {/* Second div with the profile image */}
//       <div className="profile-img bg-gradient-to-r from-[#d1b3f4] to-[#e0c7f2] relative overflow-hidden rounded-3xl shadow-[10px_10px_10px_rgba(0,0,0,0.3)] h-full w-[300px]">
//         <img
//           src="/src/assets/Untitled-1.png"
//           alt="Profile"
//           className="absolute bottom-0 w-full object-cover transition-transform duration-300 hover:scale-110"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;



import "./Home.css";

const Home = () => {
  return (
    <div className="flex mt-12 h-[500px] " >
      {/* First div with the text */}
      <div className="w-[300px] relative h-[400px] grid grid-rows-4 grid-cols-2 gap-2">
        <p className=" text-3xl ">Hello i,m</p>
        
        <span className="flex  justify-center items-center col-span-2 row-span-1 text-center text-[6.5rem] ">ko</span>
        <span className="flex  justify-center items-center col-span-2 row-span-1 text-center text-[6.5rem]">us</span>
        <span className="flex  justify-center items-center col-span-2 row-span-1 text-center text-[6.5rem] bg-gradient-to-r from-[#d1b3f4] to-[#e0c7f2] bg-clip-text text-transparent">ai</span>
      </div>
      <div className="relative">
        <h1 className="absolute bottom-16 w-96  font-medium rotate-90 -right-36  ">FORNT-END
          <span className="bg-gradient-to-r from-[#cba5f6] to-[#c180ef] text-transparent bg-clip-text">DEVELOPER</span>
        </h1>
      </div>
      {/* Second div with the profile image */}
      <div className="profile-img bg-gradient-to-r from-[#d1b3f4] to-[#e0c7f2] relative overflow-hidden rounded-3xl shadow-[10px_10px_10px_rgba(0,0,0,0.3)] h-full w-[300px]">
        <img
          src="/src/assets/Untitled-1.png"
          alt="Profile"
          className="absolute bottom-0 w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Home;


