import { useState } from "react"
import About from "../About/About"
import Home from "../Home/Home"
import Projects from "../Projects/Projects"
import GetInTouch from "../GetInTouch/GetInTouch"

  const Body = () => {
    const[count , setCount] = useState(1);

    const handleIncreaseButton = ()=>{
      if(count < 4)
      {
        setCount(count+1);
      }    
    }
    const handleDecreaseButton = ()=>{
      if(count >1){
        setCount(count-1)
      }
    }

    return (
      <div className="mt-9  w-full h-full flex flex-col items-center p-5 gap-44  ">
          <Home />
          <About />
          {count === 1 && (
          <Projects 
          projectTitle="Freinds Trip" 
          projectDescribiton="This Project Aims To When Freinds Go To Trip To Save Their Memories And Calculate Transctions For Each Freind In The Trip And Show The Trips That The User Saved Them   " 
          projectPic1="/Images/FriendsTrip Auth Page.png" 
          projectPic2="/Images/FriendsTrip NewTrip Page.png" 
          projectLink="https://friends-trip.vercel.app"
          handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
          )}
          {count === 2 && (
          <Projects 
          projectTitle="Mini-DashBord " 
          projectDescribiton="This Is DashBoard Project To Show Static Data With interactive user interfaces and interactive Charts And Login Page For Authentication" 
          projectPic1="/Images/DashBord-Auth.png" 
          projectPic2="/Images/DashBord-Main.png" 
          projectLink="https://mini-dashbord.vercel.app"
          handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
          )}
          {count === 3 && (
          <Projects 
          projectTitle="Game-Hub" 
          projectDescribiton="This Is Game-Hub Porject for Fetching Games Based On Api From “api.rawg.io” ,filtering Games And Display Them On The App ,Applying Dark Theme And Light Theme " 
          projectPic1="/Images/Game-Hub-DarkTheme.png" 
          projectPic2="/Images/Game-Hub-LightTheme.png" 
          projectLink="https://game-hub-project-koussai.vercel.app"
          handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
          )}
          {count === 4 && (
          <Projects 
          projectTitle="Protfolio" 
          projectDescribiton="This Is Protfolio Project To Describe The Information About Me And Show The Projects That I have Made And My Own Socails To Connect With me  " 
          projectPic1="/Images/Protfolio-Home.png" 
          projectPic2="/Images/Protfolio-GetInTouch.png" 
          projectLink="https://protfolio-delta-coral.vercel.app/"
          handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
          )}
        
          <GetInTouch />

      </div>
    )
  }

  export default Body