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
    <div className="mt-9  w-full h-full flex flex-col items-center p-5 gap-44 ">
        <Home />
        <About />
        {count === 1 && (
        <Projects projectTitle="Freinds Trip" projectDescribiton="Lorem 3rsa" projectPic="/src/assets/FriendsTrip Auth Page.png" handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
        )}
        {count === 2 && (
        <Projects projectTitle="Mini-DashBord" projectDescribiton="Lorem 3rsa" projectPic="/src/assets/FriendsTrip Auth Page.png" handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
        )}
        {count === 3 && (
        <Projects projectTitle="Game-Hub" projectDescribiton="Lorem 3rsa" projectPic="/src/assets/FriendsTrip Auth Page.png" handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
        )}
        {count === 4 && (
        <Projects projectTitle="Protfolio" projectDescribiton="Lorem 3rsa" projectPic="/src/assets/FriendsTrip Auth Page.png" handleIncreaseButton={handleIncreaseButton} handleDecreaseButton={handleDecreaseButton} count={count}/>
        )}
       
        <GetInTouch />

    </div>
  )
}

export default Body