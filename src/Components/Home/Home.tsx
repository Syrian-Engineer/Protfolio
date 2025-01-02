
import "./Home.css";

const Home = () => {
  return (
    <div className="section flex mt-12 h-[500px] " id="Home" >
      {/* First div with the text */}
      <div className="w-[300px] relative h-[400px] grid grid-rows-4 grid-cols-2 gap-2" >
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


