import Header from "./Components/Header/Header"
import "./App.css"
import Body from "./Components/Body/Body"

const App = () => {
  return (
    <div className="App relative flex flex-col min-h-lvh justify-start w-full  " id="Home">
      <Header />
      <Body /> 
    </div>
  )
}

export default App