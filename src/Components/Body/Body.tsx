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
          projectPic2="/Images/FriendsTrip Auth Page.png" 
          projectLink="https://friends-trip.vercel.app"
          handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
          )}
          {count === 2 && (
          <Projects 
          projectTitle="Mini-DashBord " 
          projectDescribiton="Lorem 3rsa dewwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwww" 
          projectPic1="/Images/DashBord-Auth.png" 
          projectPic2="/Images/DashBord-Main.png" 
          projectLink="https://mini-dashbord.vercel.app"
          handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
          )}
          {count === 3 && (
          <Projects 
          projectTitle="Game-Hub" 
          projectDescribiton="This Is Game-Hub fewwwwwwww fewwwwww fweeeeee fwwwe wfeeeeeeeeee fweeeeeeeeee fweeeeeeeeee wefff edwwwww dewwwwwwww " 
          projectPic1="/Images/Game-Hub-DarkTheme.png" 
          projectPic2="/Images/Game-Hub-LightTheme.png" 
          projectLink="https://game-hub-project-koussai.vercel.app"
          handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
          )}
          {count === 4 && (
          <Projects 
          projectTitle="Protfolio" 
          projectDescribiton="This Is Protfolio feeeeeeee feeeeeee wfeeeeee fweeeeeeee fwefweeeeeeeeee fewwwwwwwww fewwwwwwwwwwefff fweeeeee fewwwwww" 
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