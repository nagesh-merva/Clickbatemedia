import NavBar from "./nav/nav"
import MainPage from "./main/main"
import Service from "./service/service"
import SerSec from "./service/sersec.jsx"
import Portfolio from "./portfolio/portfolio.jsx"


function App() {
  return (
    <>
      <NavBar></NavBar>
      <MainPage></MainPage>
      <Service></Service>
      <SerSec></SerSec>
      <Portfolio></Portfolio>
    </>
  )
}

export default App
